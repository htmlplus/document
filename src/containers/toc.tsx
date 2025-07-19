'use client';

import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';

import { kebabCase } from 'change-case';
import { create } from 'zustand';

import { classes } from '@/utils';

export interface TocItemProps {
  children?: ReactNode;
  level?: number;
}

interface TocState {
  items: TocItem[];
  add: (item: TocItem) => void;
  remove: (item: TocItem) => void;
  scrollTo: (item: TocItem) => void;
  update: (item: TocItem, entry: IntersectionObserverEntry) => void;
}

interface TocItem {
  isActive?: boolean;
  element?: HTMLElement;
  entry?: IntersectionObserverEntry;
  id?: string;
  key?: string;
  level?: number;
  observer?: IntersectionObserver;
  title?: string;
  top?: number;
}

const useToc = create<TocState>((set, get) => ({
  items: [],
  add: (item: TocItem) => {
    let items = get().items.concat(item);

    for (const item of items) {
      item.top = item.element?.getBoundingClientRect().top;
    }

    items = items.sort((a, b) => ((a.top ?? 0) < (b.top ?? 0) ? -1 : 0));

    set({ items });

    item.observer = new IntersectionObserver(([entry]) => get().update(item, entry));

    item.observer.observe(item.element!);
  },
  remove: (item: TocItem) => {
    item.observer?.disconnect();
    const items = get().items.filter((x) => x.key != item.key);
    set({ items });
  },
  scrollTo: (item: TocItem) => {
    item.element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    window.setTimeout(() => (window.location.hash = `#${item.id}`), 500);
  },
  update(item: TocItem, entry: IntersectionObserverEntry) {
    item.entry = entry;
    const entries = get().items.filter((item) => item.entry?.isIntersecting);
    if (!entries.length) return;
    const items = get().items;
    items.forEach((item) => (item.isActive = item === entries[0]));
    set({ items: [...items] });
  },
}));

export function Toc() {
  const toc = useToc();
  useEffect(() => {
    let clear: any;
    const timeout = () => {
      if (document.readyState != 'complete') {
        clear = window.setTimeout(timeout, 250);
        return;
      }
      const item = toc.items.find((item) => item.id && location.hash.endsWith(item.id));
      if (!item) return;
      toc.scrollTo(item);
    };
    timeout();
    return () => clearTimeout(clear);
  }, []);
  if (!toc.items.length) return null;
  return (
    <div className="toc">
      <p>Contents</p>
      {toc.items.map((item) => (
        <a
          className={`border-0 border-l-2 border-solid block cursor-pointer no-underline text-[#a7a7a7] text-[90%] leading-[1.6] hover:no-underline hover:border-main hover:text-main ${item.isActive ? 'border-primary text-primary' : 'border-l-main-lighten-3'}`}
          style={{
            paddingLeft: `${item.level! > 1 ? (item.level! - 1) * 20 : 0}px`,
          }}
          key={item.key}
          onClick={() => toc.scrollTo(item)}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}

export function TocItem({ children, level }: TocItemProps) {
  const element = useRef(null);

  const [isReady, setIsReady] = useState(false);

  const toc = useToc();

  const item: TocItem | undefined = useMemo(() => {
    if (!isReady) return;
    return {
      element: element.current!,
      id: kebabCase(children?.toString() ?? ''),
      key: Math.random().toString(),
      level,
      title: children?.toString(),
    };
  }, [isReady]);

  const onClick = (event: any) => {
    event.preventDefault();
    if (item) toc.scrollTo(item);
  };

  useEffect(() => setIsReady(!!element.current));

  useEffect(() => {
    if (!item) return;
    toc.add(item);
    return () => toc.remove(item);
  }, [item]);

  return (
    <>
      <a
        className="float-left pr-[4px] ml-[-18px] no-underline cursor-pointer text-inherit after:clear-both"
        aria-hidden="true"
        ref={element}
        onClick={onClick}
      >
        <div className="inline-block overflow-visible align-text-bottom fill-current invisible">#</div>
      </a>
      {children}
    </>
  );
}
