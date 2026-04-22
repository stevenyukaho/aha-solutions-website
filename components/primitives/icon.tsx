export type IconName =
  | 'bolt'
  | 'clock'
  | 'rocket'
  | 'calendar'
  | 'globe'
  | 'robot'
  | 'funnel'
  | 'briefcase'
  | 'envelope'
  | 'user'
  | 'check'
  | 'x'
  | 'arrow'
  | 'play'
  | 'key'
  | 'settings'
  | 'sparkle'
  | 'bell'
  | 'lightning'
  | 'book'
  | 'cash'
  | 'docs'
  | 'plus';

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

const paths: Record<IconName, string> = {
  bolt: 'M13 2 4 14h6l-1 8 9-12h-6z',
  clock: 'M12 7v5l3 2 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
  rocket:
    'M4.5 16.5 3 21l4.5-1.5 M14 8l2 2 M19 3s-4 .5-7 3.5-4 6-4 8l3.5 3.5c2 0 5-1 8-4s3.5-7 3.5-7zM5 13s-1 1-1 3l4 4c2 0 3-1 3-1 M15 9a2 2 0 1 1-.01 0z',
  calendar: 'M3 9h18 M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z M8 3v4 M16 3v4',
  globe:
    'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M3 12h18 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18',
  robot:
    'M8 11h.01 M16 11h.01 M7 16c1.5 1 3 1.5 5 1.5s3.5-.5 5-1.5 M12 3v3 M5 8h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z',
  funnel: 'M3 4h18l-7 9v6l-4 2v-8z',
  briefcase:
    'M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 9V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4',
  envelope: 'M3 7h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M3 7l9 7 9-7',
  user: 'M20 21a8 8 0 0 0-16 0 M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  check: 'M5 12l5 5 9-11',
  x: 'M6 6l12 12 M18 6l-12 12',
  arrow: 'M5 12h14 M13 5l7 7-7 7',
  play: 'M8 5v14l11-7z',
  key: 'M7 12a5 5 0 1 1 10 0v.5M11 12v9M8 16h3M15 7l5 5-5 5',
  settings:
    'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  sparkle: 'M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z',
  bell: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21a2 2 0 0 0 4 0',
  lightning: 'M13 2L4 14h7l-1 8 9-12h-7z',
  book: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z',
  cash: 'M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  docs: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h8M8 9h2',
  plus: 'M12 5v14M5 12h14',
};

export function Icon({ name, size = 16, color = 'currentColor' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name] ?? paths.check} />
    </svg>
  );
}
