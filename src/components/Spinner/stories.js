import React from 'react';
import { storiesOf } from '@storybook/react';

import Component from '.';

export default ({module}) => {
  storiesOf('unsorted/Spinner', module)
    .add('default', () => <Component visible />);
};
