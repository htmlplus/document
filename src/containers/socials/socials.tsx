'use client';

import { Button } from '@/components';
import { socials } from '@/data';

export function Socials() {
  return (
    <plus-grid align-items="center" justify-content="center" wrap="off">
      {socials.map((social) => (
        <plus-grid-item key={social.key}>
          <Button icon text to={social.url}>
            <plus-icon name={social.icon}></plus-icon>
          </Button>
        </plus-grid-item>
      ))}
    </plus-grid>
  );
}
