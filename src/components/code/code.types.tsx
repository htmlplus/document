export interface ICode {
  children?: React.ReactNode;
  copy?: boolean;
  language: 'html' | 'css' | 'js' | 'jsx' | 'shell';
}
