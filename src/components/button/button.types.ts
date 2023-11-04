import { Colors } from '@/types';

export interface IButton {
  block?: boolean;
  children: React.ReactNode;
  color?: Colors;
  disabled?: boolean;
  icon?: boolean;
  link?: boolean | 'underline';
  loading?: boolean;
  outlined?: boolean;
  size?: 'sm' | 'md' | 'lg';
  target?: string;
  text?: boolean;
  title?: string;
  to?: string;
  onClick?: any;
}
