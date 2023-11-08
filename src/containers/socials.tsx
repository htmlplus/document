'use client';

import { Button, Grid, Icon } from '@/components';
import { socials } from '@/data';

export function Socials() {
  return (
    <Grid alignItems="center" justifyContent="center" wrap="off">
      {socials.map((social) => (
        <Grid.Item key={social.key}>
          <Button icon text to={social.url}>
            <Icon name={social.icon}></Icon>
          </Button>
        </Grid.Item>
      ))}
    </Grid>
  );
}
