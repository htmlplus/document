export interface ISidebarItem {
  active?: boolean;
  expand?: boolean;
  icon?: string;
  title: string;
  items?: ISidebarItem[];
  parent?: ISidebarItem;
  stable?: boolean;
  url?: string;
}
