export interface SidebarItem {
  active?: boolean;
  expand?: boolean;
  icon?: string;
  title: string;
  items?: SidebarItem[];
  parent?: SidebarItem;
  stable?: boolean;
  url?: string;
}
