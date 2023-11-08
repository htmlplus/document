import { Fragment } from 'react';

import { kebabCase, pascalCase } from 'change-case';

import { Alert } from '@/components';
import { Parameter, TocItem } from '@/containers';
import { components, frameworks } from '@/data';

interface IPage {
  params: IParams;
}

interface IParams {
  component: string;
  framework: string;
}

export function generateStaticParams() {
  const params: IParams[] = [];

  for (const framework of frameworks) {
    for (const component of components) {
      params.push({
        component: component.key,
        framework: framework.key
      });
    }
  }

  return params;
}

export default function Page({ params }: IPage) {
  const component = components.find((component) => component.key == params.component);

  // TODO
  // const meta = {
  //   title: component.title || null,
  //   description: component.description || null,
  //   url: getPath(ROUTES.API_DETAILS, params) || null
  // };

  const sections = [
    {
      key: 'property',
      title: 'Properties',
      items: component.properties
    },
    {
      key: 'slot',
      title: 'Slots',
      items: component.slots
    },
    {
      key: 'event',
      title: 'Events',
      items: component.events.map((event: any) => ({
        ...event,
        // TODO
        name: params.framework == 'react-dedicated' ? pascalCase(event.name) : kebabCase(event.name)
      }))
    },
    {
      key: 'style',
      title: 'CSS Variables',
      items: component.styles
    },
    {
      key: 'part',
      title: 'CSS Parts',
      items: component.parts
    },
    {
      key: 'method',
      title: 'Methods',
      items: component.methods
    }
  ];

  return (
    <>
      <h1>{component.title}</h1>
      <p>See below to learn more about properties, slots, events, style variables, CSS parts, and methods.</p>
      <Alert type="info">
        There is no difference between the APIs of the components, And the only difference is in the names of the events
      </Alert>
      {sections.map((section: any) => (
        <Fragment key={section.key}>
          <h2>
            <TocItem level={2}>{section.title}</TocItem>
          </h2>
          {!section.items?.length && <p>There are no {section.title}.</p>}
          {section.items.map((item: any, index: number) => (
            <Fragment key={item.name}>
              <Parameter component={component} kind={section.key} {...item} />
              {section.items.length - 1 > index && <plus-divider></plus-divider>}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </>
  );
}
