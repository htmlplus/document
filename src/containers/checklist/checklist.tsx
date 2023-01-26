import { capitalCase } from 'change-case';

import { Grid } from '@app/components';
import { Toc } from '@app/containers';

import { ChecklistProps } from './checklist.types';

export const Checklist = (properties: ChecklistProps) => {
  const style = (property: any) => {
    return {
      opacity: property && property != 'N/A' ? 0.4 : null,
      textDecoration: property == 'N/A' ? 'line-through' : null
    };
  };
  return (
    <>
      <h2>
        <Toc.Item level={2}>Checklist</Toc.Item>
      </h2>
      <p>List of done</p>
      <Grid gutterX="sm">
        {Object.keys(properties).map((property) => (
          <Grid.Item key={property} xs="12" md="6" style={style(properties[property as keyof ChecklistProps])}>
            <small>{capitalCase(property)}</small>
          </Grid.Item>
        ))}
      </Grid>
    </>
  );
};
