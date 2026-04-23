'use client';

import { useRef, useEffect, useState } from 'react';

const VERTEX_SRC = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAGMENT_SRC = `
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

const vec3 COL_YELLOW = vec3(0.961, 0.816, 0.0);
const vec3 COL_PURPLE = vec3(0.722, 0.612, 0.969);
const vec3 COL_BLUE   = vec3(0.478, 0.718, 1.0);
const vec3 COL_BG     = vec3(0.043, 0.043, 0.051);

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 mouse = (u_mouse - 0.5) * 0.15;
  vec3 color = COL_BG;

  for (int i = 0; i < 4; i++) {
    float fi = float(i);
    float speed = 0.08 + fi * 0.02;
    float phase = fi * 1.57;

    float cx = 0.2 + fi * 0.2
             + sin(u_time * speed + phase) * 0.08
             + mouse.x * (0.5 + fi * 0.3);

    float wave = sin(uv.y * 6.0 + u_time * (0.15 + fi * 0.05) + fi * 2.0) * 0.03
               + sin(uv.y * 12.0 - u_time * 0.1 + fi) * 0.01;

    float x = uv.x - cx + wave + mouse.y * 0.02;
    float width = 0.06 + sin(u_time * 0.05 + fi) * 0.02;
    float intensity = exp(-x * x / (2.0 * width * width));

    float vfade = smoothstep(0.0, 0.3, uv.y) * smoothstep(1.0, 0.5, uv.y);
    intensity *= vfade;

    vec3 beamColor;
    if (i == 0) beamColor = COL_PURPLE;
    else if (i == 1) beamColor = COL_BLUE;
    else if (i == 2) beamColor = COL_YELLOW;
    else beamColor = mix(COL_PURPLE, COL_BLUE, 0.5);

    color += beamColor * intensity * 0.12;
  }

  float vignette = 1.0 - length((uv - 0.5) * vec2(1.2, 1.6)) * 0.4;
  color *= vignette;

  gl_FragColor = vec4(color, 1.0);
}`;

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext): WebGLProgram | null {
  const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SRC);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn('Program link error:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }

  gl.deleteShader(vs);
  gl.deleteShader(fs);
  return program;
}

interface HeroBackgroundProps {
  enabled?: boolean;
}

export function HeroBackground({ enabled = true }: HeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<{
    raf: number;
    gl: WebGLRenderingContext | null;
    program: WebGLProgram | null;
    buffer: WebGLBuffer | null;
    smoothMouse: { x: number; y: number };
    isVisible: boolean;
    contextLost: boolean;
  }>({
    raf: 0,
    gl: null,
    program: null,
    buffer: null,
    smoothMouse: { x: 0.5, y: 0.5 },
    isVisible: true,
    contextLost: false,
  });
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setWebglFailed(true);
      return;
    }

    // Skip WebGL on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      setWebglFailed(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false, stencil: false });
    if (!gl) {
      setWebglFailed(true);
      return;
    }

    const program = createProgram(gl);
    if (!program) {
      setWebglFailed(true);
      return;
    }

    // Fullscreen quad
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    gl.useProgram(program);

    const state = stateRef.current;
    state.gl = gl;
    state.program = program;
    state.buffer = buffer;

    // Resize
    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio, 1) * 0.5;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl!.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    // Visibility
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => { state.isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    // Mouse
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Context loss
    const onContextLost = (e: Event) => {
      e.preventDefault();
      state.contextLost = true;
      cancelAnimationFrame(state.raf);
    };
    const onContextRestored = () => {
      state.contextLost = false;
      const newProgram = createProgram(gl!);
      if (!newProgram) { setWebglFailed(true); return; }
      state.program = newProgram;
      gl!.useProgram(newProgram);
      render(performance.now());
    };
    canvas.addEventListener('webglcontextlost', onContextLost);
    canvas.addEventListener('webglcontextrestored', onContextRestored);

    // Render loop
    function render(time: number) {
      state.raf = requestAnimationFrame(render);
      if (!state.isVisible || state.contextLost) return;

      state.smoothMouse.x += (mouseRef.current.x - state.smoothMouse.x) * 0.03;
      state.smoothMouse.y += (mouseRef.current.y - state.smoothMouse.y) * 0.03;

      gl!.uniform1f(uTime, time * 0.001);
      gl!.uniform2f(uResolution, canvas!.width, canvas!.height);
      gl!.uniform2f(uMouse, state.smoothMouse.x, state.smoothMouse.y);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
    }

    state.raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(state.raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      canvas.removeEventListener('webglcontextrestored', onContextRestored);
      if (state.buffer) gl.deleteBuffer(state.buffer);
      if (state.program) gl.deleteProgram(state.program);
      state.gl = null;
      state.program = null;
      state.buffer = null;
    };
  }, [enabled]);

  const fallbackStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
    background: [
      'radial-gradient(ellipse 60% 50% at 25% 40%, rgba(184,156,247,0.08), transparent 70%)',
      'radial-gradient(ellipse 50% 40% at 55% 35%, rgba(122,183,255,0.06), transparent 60%)',
      'radial-gradient(ellipse 40% 30% at 75% 45%, rgba(245,208,0,0.05), transparent 50%)',
    ].join(', '),
  };

  if (!enabled) {
    return <div style={fallbackStyle} />;
  }

  return (
    <>
      <div style={fallbackStyle} />
      {!webglFailed && (
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      )}
    </>
  );
}
