import Link from 'next/link';
import type { ReactNode } from 'react';
import { Icon } from './icon';
import { BOOKING_URL } from '@/lib/constants';

export interface ButtonProps {
  children: ReactNode;
  size?: 'sm';
  href?: string;
}

export function BtnPrimary({ children, size, href }: ButtonProps) {
  const target = href ?? BOOKING_URL;
  const className = `btn btn-primary${size === 'sm' ? ' btn-sm' : ''}`;
  const inner = (
    <>
      {children}
      <span className="arrow">
        <Icon name="arrow" size={12} />
      </span>
    </>
  );

  if (target.startsWith('http') || target.startsWith('#')) {
    return (
      <a href={target} className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={target} className={className}>
      {inner}
    </Link>
  );
}
