import React from 'react';
import { storiesOf } from '@storybook/react';

import Count from '.';

const stories = storiesOf('Count/Count', module);

stories.add('Component default', () => <Count
  value="5"
/>);
