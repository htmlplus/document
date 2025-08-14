import { ReactNode } from 'react';

export interface AlertProps {
  children?: ReactNode;
  type?: 'error' | 'info' | 'success' | 'warning';
}

const colors = {
  error: 'border-[#ef5350] text-[#ef5350] bg-[#ffebee]',
  info: 'border-[#29b6f6] text-[#29b6f6] bg-[#e1f5fe]',
  success: 'border-[#66bb6a] text-[#66bb6a] bg-[#e8f5e9]',
  warning: 'border-[#ffb74d] text-[#ffb74d] bg-[#fff8e1]',
};

export function Alert({ children, type }: AlertProps) {
  return <div className={`border-l-4 py-3 px-4 rounded text-sm [&>p]:m-0 ${type ? colors[type] : ''}`}>{children}</div>;
}
