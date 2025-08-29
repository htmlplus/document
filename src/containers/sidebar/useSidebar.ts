import { create } from 'zustand';

import { sidebar } from '@/data';

import type { SidebarItem, SidebarState } from './sidebar.types';

const expanded = new Set<string>();

export const useSidebar = create<SidebarState>((set, get) => ({
	items: [],
	prev: undefined,
	next: undefined,
	sync(path, framework) {
		const items = sidebar(framework);

		init(path, undefined, items);

		set({ items });

		get().update();
	},
	toggle(item) {
		if (!item.items) return;

		item.expand = !item.expand;

		if (item.expand) {
			expanded.add(item.title + item.url);
		} else {
			expanded.delete(item.title + item.url);
		}

		const items = get().items.concat([]);

		set({ items });

		get().update();
	},
	update() {
		const items = flat(get().items).filter((item) => !!item.url);

		const index = items.findIndex((item) => item.active);

		const prev = items[index - 1];

		const next = items[index + 1];

		set({ prev, next });
	}
}));

const flat = (items?: SidebarItem[]) => {
	if (!items) return [];

	const result = [...items];

	for (const item of items) {
		flat(item.items).map((item) => result.push(item));
	}

	return result;
};

const init = (path: string, parent?: SidebarItem, items?: SidebarItem[]) => {
	if (!items) return;

	for (const item of items) {
		item.active = false;

		item.expand = expanded.has(item.title + item.url);

		item.parent = parent;

		if (path === item.url) {
			let parent: SidebarItem | undefined = item;

			do {
				parent.active = true;

				if (!parent.expand && parent.items) {
					parent.expand = true;
					expanded.add(parent.title + parent.url);
				}

				parent = parent.parent;
			} while (parent);
		}

		if (!item.items) continue;

		init(path, item, item.items);
	}
};
