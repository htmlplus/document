import { Fragment } from 'react';

import { kebabCase } from 'change-case';

import { Alert, Button, Code } from '@/components';
import { ROUTES } from '@/constants';
import { Markup, TocItem } from '@/containers';
import { elements, frameworks } from '@/data';
import { getPath } from '@/utils';

interface Params {
  framework: string;
  element: string;
}

export function generateStaticParams(): Params[] {
  return frameworks.flatMap((framework) =>
    elements.map((element) => ({
      element: element.key,
      framework: framework.key,
    })),
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { element: elementKey } = await params;

  const element = elements.find((element) => element.key == elementKey)!;

  return {
    title: element.title,
    description: element.description,
    url: getPath(ROUTES.API_DETAILS, await params),
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { element: elementKey } = await params;

  const element = elements.find((element) => element.key == elementKey)!;

  const sections = [
    {
      key: 'property',
      title: 'Properties',
      items: element.properties || [],
    },
    {
      key: 'slot',
      title: 'Slots',
      items: element.slots || [],
    },
    {
      key: 'event',
      title: 'Events',
      items: (element.events || []).map((event) => ({
        ...event,
        name: kebabCase(event.name),
      })),
    },
    {
      key: 'style',
      title: 'CSS Variables',
      items: element.styles || [],
    },
    {
      key: 'part',
      title: 'CSS Parts',
      items: element.parts || [],
    },
    {
      key: 'method',
      title: 'Methods',
      items: element.methods || [],
    },
  ];

  return (
    <Fragment>
      <h1>{element.title}</h1>
      <p>See below to learn more about properties, slots, events, style variables, CSS parts, and methods.</p>
      <Alert type="info">
        There is no difference between the APIs of the elements, And the only difference is in the names of the events
      </Alert>
      {sections.map((section) => (
        <Fragment key={section.key}>
          <h2>
            <TocItem level={2}>{section.title}</TocItem>
          </h2>
          {!section.items?.length && <p>There are no {section.title}.</p>}
          {section.items.map((item: any, index) => {
            item.kind ??= section.key;

            item.type = item.detail ?? item.returns ?? item.type;

            item.typeReference = (() => {
              let reference = '';

              switch (item.kind) {
                case 'event':
                  reference = item.detailReference;
                  break;
                case 'method':
                  reference = item.returnsReference;
                  break;
                case 'property':
                  reference = item.typeReference;
                  break;
              }

              if (!reference) return '';

              return getPath(ROUTES.TYPE_GITHUB_LINK, { element: element.key, fileName: `${reference.slice(2)}.ts` });
            })();

            return (
              <Fragment key={item.name}>
                <plus-grid gutter-x="md">
                  <plus-grid-item xs="12" sm="12" md="6">
                    <b>Name</b>
                    <div>
                      {item.name}
                      {item.experimental && <span> (Experimental)</span>}
                    </div>
                  </plus-grid-item>
                  {['event', 'method', 'property'].includes(item.kind) && (
                    <Fragment>
                      <plus-grid-item xs="12" sm="6" md="grow">
                        {!!item.type && (
                          <Fragment>
                            <b>Type</b>
                            <div>
                              {!item.typeReference && <span>{item.type}</span>}
                              {!!item.typeReference && (
                                <Button link target="_blank" to={item.typeReference}>
                                  {item.type}
                                </Button>
                              )}
                            </div>
                          </Fragment>
                        )}
                      </plus-grid-item>
                    </Fragment>
                  )}
                  {['style'].includes(item.kind) && <plus-grid-item xs="12" sm="grow" hide-sm-down></plus-grid-item>}
                  {['property', 'style'].includes(item.kind) && (
                    <Fragment>
                      <plus-grid-item xs="12" sm="auto" hide-md-up>
                        <b>Default</b>
                        <div>{item.initializer || 'undefined'}</div>
                      </plus-grid-item>
                      <plus-grid-item xs="12" sm="auto" hide-sm-down style={{ textAlign: 'right' }}>
                        <b>Default</b>
                        <div>{item.initializer || 'undefined'}</div>
                      </plus-grid-item>
                    </Fragment>
                  )}
                  <plus-grid-item xs="12"></plus-grid-item>
                  {['event'].includes(item.kind) && (
                    <plus-grid-item xs="12">
                      <b>Cancelable</b>
                      <div>{`${!!item.cancelable}`}</div>
                    </plus-grid-item>
                  )}
                  {['property'].includes(item.kind) && (
                    <Fragment>
                      <plus-grid-item xs="12" sm="6">
                        <b>Attribute</b>
                        <div>{item.attribute}</div>
                      </plus-grid-item>
                      <plus-grid-item xs="12" sm="grow">
                        <b>Reflect</b>
                        <div>{`${!!item.reflects}`}</div>
                      </plus-grid-item>
                    </Fragment>
                  )}
                  {['method'].includes(item.kind) && (
                    <Fragment>
                      {!!item.signature && (
                        <plus-grid-item xs="12">
                          <b>Signature</b>
                          <div>
                            <Code language="js">{item.signature}</Code>
                          </div>
                        </plus-grid-item>
                      )}
                    </Fragment>
                  )}
                  {!!item.description && (
                    <plus-grid-item xs="12">
                      <b>Description</b>
                      <Markup value={item.description}></Markup>
                    </plus-grid-item>
                  )}
                </plus-grid>
                {section.items.length - 1 > index && <plus-divider width="xs"></plus-divider>}
              </Fragment>
            );
          })}
        </Fragment>
      ))}
    </Fragment>
  );
}
