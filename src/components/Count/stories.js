import React from 'react';
import { storiesOf } from '@storybook/react';

import Count from '.';

export default ({module}) => {
  storiesOf('unsorted/Count', module)
    .add('default', () => <Count
      value="5"
    />);
};
