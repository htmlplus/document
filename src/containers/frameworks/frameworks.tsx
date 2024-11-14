'use client';

import { useEffect, useMemo } from 'react';
// TODO: it's a large dependency
import Select, { components } from 'react-select';

import { usePathname, useRouter } from 'next/navigation';

import { frameworks } from '@/data';

import { useFrameworks } from './useFrameworks';

function Option(props: any) {
  return (
    <components.Option {...props}>
      <SingleValue {...props}></SingleValue>
    </components.Option>
  );
}

function SingleValue(props: any) {
  return (
    <components.Placeholder {...props}>
      <img
        style={{ width: '1.25rem', height: '1.25rem', objectFit: 'contain', verticalAlign: 'middle', margin: '0' }}
        src={props.data.logo}
        alt={`${props.data.label} logo`}
      />
      &nbsp;&nbsp;
      {props.data.label}
    </components.Placeholder>
  );
}

export function Frameworks() {
  const pathname = usePathname();

  const router = useRouter();

  const store = useFrameworks();

  const items = useMemo(
    () =>
      frameworks
        .filter((framework) => !framework.disabled)
        .map((framework) => ({
          value: framework.key,
          label: framework.title,
          logo: framework.logo
        })),
    [frameworks]
  );

  // TODO
  const key = useMemo(() => {
    const framework = pathname.split('/')?.[1];
    if (!framework) return;
    if (!frameworks.some((framework) => pathname.startsWith(`/${framework.key}`))) return;
    return framework;
  }, [pathname]);

  const selected = useMemo(
    () => items.find((framework) => framework.value === store.framework),
    [items, store.framework]
  );

  useEffect(() => {
    if (!key) return;
    store.setFramework(key);
  }, [key]);

  // TODO
  const change = (framework: any) => {
    const prev = pathname;
    const next = pathname.replace(`/${store.framework}/`, `/${framework.value}/`);
    if (next == prev) return;
    router.replace(next);
    store.setFramework(framework.value);
  };

  return (
    <div className="frameworks">
      <p>Select Your Framework</p>
      <Select
        isSearchable={false}
        isDisabled={!key}
        components={{
          Option,
          SingleValue
        }}
        options={items}
        value={selected}
        onChange={change}
      ></Select>
    </div>
  );
}
