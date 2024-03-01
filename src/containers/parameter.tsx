// TODO 'use client';
import { Button, Code } from '@/components';
import { ROUTES } from '@/constants';
import { Markup } from '@/containers';
import { getPath } from '@/utils';

// TODO: set item type
export function Parameter(item: any) {
  const type = item.detail ?? item.returns ?? item.type;

  const typeReference = (() => {
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

    return getPath(ROUTES.TYPE_GITHUB_LINK, { element: item.element.key, fileName: `${reference.slice(2)}.ts` });
  })();

  return (
    <>
      <plus-grid gutter-x="md">
        <plus-grid-item xs="12" sm="12" md="6">
          <b>Name</b>
          <div>
            {item.name}
            {item.experimental && <span> (Experimental)</span>}
          </div>
        </plus-grid-item>
        {['event', 'method', 'property'].includes(item.kind) && (
          <>
            <plus-grid-item xs="12" sm="6" md="grow">
              {!!type && (
                <>
                  <b>Type</b>
                  <div>
                    {!typeReference && <span>{type}</span>}
                    {!!typeReference && (
                      <Button link target="_blank" to={typeReference}>
                        {type}
                      </Button>
                    )}
                  </div>
                </>
              )}
            </plus-grid-item>
          </>
        )}
        {['style'].includes(item.kind) && <plus-grid-item xs="12" sm="grow" hide-sm-down></plus-grid-item>}
        {['property', 'style'].includes(item.kind) && (
          <>
            <plus-grid-item xs="12" sm="auto" hide-md-up>
              <b>Default</b>
              <div>{item.initializer || 'undefined'}</div>
            </plus-grid-item>
            <plus-grid-item xs="12" sm="auto" hide-sm-down style={{ textAlign: 'right' }}>
              <b>Default</b>
              <div>{item.initializer || 'undefined'}</div>
            </plus-grid-item>
          </>
        )}
        <plus-grid-item xs="12"></plus-grid-item>
        {['event'].includes(item.kind) && (
          <plus-grid-item xs="12">
            <b>Cancelable</b>
            <div>{`${!!item.cancelable}`}</div>
          </plus-grid-item>
        )}
        {['property'].includes(item.kind) && (
          <>
            <plus-grid-item xs="12" sm="6">
              <b>Attribute</b>
              <div>{item.attribute}</div>
            </plus-grid-item>
            <plus-grid-item xs="12" sm="grow">
              <b>Reflect</b>
              <div>{`${!!item.reflects}`}</div>
            </plus-grid-item>
          </>
        )}
        {['method'].includes(item.kind) && (
          <>
            {!!item.signature && (
              <plus-grid-item xs="12">
                <b>Signature</b>
                <div>
                  <Code language="js">{item.signature}</Code>
                </div>
              </plus-grid-item>
            )}
          </>
        )}
        {!!item.description && (
          <plus-grid-item xs="12">
            <b>Description</b>
            <Markup value={item.description}></Markup>
          </plus-grid-item>
        )}
      </plus-grid>
    </>
  );
}
