import { Fragment } from 'react';

import { kebabCase } from 'change-case';

import { Alert } from '@/components';
import { Parameter, TocItem } from '@/containers';
import { elements, frameworks } from '@/data';

interface IPage {
  params: IParams;
}

interface IParams {
  element: string;
  framework: string;
}

export function generateStaticParams() {
  const params: IParams[] = [];

  for (const framework of frameworks) {
    for (const element of elements) {
      params.push({
        element: element.key,
        framework: framework.key
      });
    }
  }

  return params;
}

export default function Page({ params }: IPage) {
  const element = elements.find((element) => element.key == params.element);

  // TODO
  // const meta = {
  //   title: element.title || null,
  //   description: element.description || null,
  //   url: getPath(ROUTES.API_DETAILS, params) || null
  // };

  const sections = [
    {
      key: 'property',
      title: 'Properties',
      items: element.properties || []
    },
    {
      key: 'slot',
      title: 'Slots',
      items: element.slots || []
    },
    {
      key: 'event',
      title: 'Events',
      items: (element.events || []).map((event: any) => ({
        ...event,
        name: kebabCase(event.name)
      }))
    },
    {
      key: 'style',
      title: 'CSS Variables',
      items: element.styles || []
    },
    {
      key: 'part',
      title: 'CSS Parts',
      items: element.parts || []
    },
    {
      key: 'method',
      title: 'Methods',
      items: element.methods || []
    }
  ];

  return (
    <>
      <h1>{element.title}</h1>
      <p>See below to learn more about properties, slots, events, style variables, CSS parts, and methods.</p>
      <Alert type="info">
        There is no difference between the APIs of the elements, And the only difference is in the names of the events
      </Alert>
      {sections.map((section: any) => (
        <Fragment key={section.key}>
          <h2>
            <TocItem level={2}>{section.title}</TocItem>
          </h2>
          {!section.items?.length && <p>There are no {section.title}.</p>}
          {section.items.map((item: any, index: number) => (
            <Fragment key={item.name}>
              <Parameter element={element} kind={section.key} {...item} />
              {section.items.length - 1 > index && <plus-divider width="xs"></plus-divider>}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </>
  );
}
