import React from 'react';
import { storiesOf } from '@storybook/react';

import Arrow from '.';

export default ({module}) => {
  storiesOf('Arrow', module)
    .add('default', () => <Arrow />);
};
