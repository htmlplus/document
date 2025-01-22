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

export interface SidebarState {
  items: SidebarItem[];
  prev?: SidebarItem;
  next?: SidebarItem;
  sync(path: string, framework: string): void;
  toggle(item: SidebarItem): void;
  update(): void;
}
