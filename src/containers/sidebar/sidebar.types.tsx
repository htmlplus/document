export interface SidebarItem {
  title: string;
  icon?: string;
  items?: SidebarItem[];
  stable?: boolean;
  url?: string;
}
