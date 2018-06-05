import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DistractionFree from '.';

export default ({module}) => {
  storiesOf('unsorted/DistractionFree', module)
    .add('default', () => (
      <DistractionFree onClick={action('clicked back button')}>
        content goes here
      </DistractionFree>
    ))
    .add('with title', () => (
      <DistractionFree arrowLeftTitle="Back to example" onClick={action('clicked back button')}>
        content goes here
      </DistractionFree>
    ));
};
