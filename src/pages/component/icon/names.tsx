import NAMES from '@htmlplus/core/icon/names.json';

import { Icon } from '@app/components';
import { LayoutDefault } from '@app/layouts';

const Icons = () => {
  return (
    <LayoutDefault>
      <h1>Icons</h1>
      <p>TODO</p>
      {NAMES.slice(0, 5).map((name) => (
        <Icon key={name} name={name} size="3x" />
      ))}
    </LayoutDefault>
  );
};

export default Icons;
