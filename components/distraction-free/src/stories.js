import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DistractionFree from '.';

const stories = storiesOf('Page/DistractionFree', module);

stories.add('Component default', () => (
  <DistractionFree onClick={action('clicked back button')}>
        content goes here
  </DistractionFree>
));

stories.add('with title', () => (
  <DistractionFree arrowLeftTitle="Back to example" onClick={action('clicked back button')}>
        content goes here
  </DistractionFree>
));
