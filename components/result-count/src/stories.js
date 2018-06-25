import React from 'react';
import { storiesOf } from '@storybook/react';

import ResultCount from '.';

const stories = storiesOf('Count/ResultCount', module);

stories.add('Component default', () => (
  <ResultCount backgroundColor="#6f777b" color="white">0</ResultCount>
));

stories.add('long count', () => (
  <ResultCount backgroundColor="#6f777b" color="white">000</ResultCount>
));

stories.add('disable count', () => (
  <ResultCount backgroundColor="#dee0e2" color="black">0</ResultCount>
));

stories.add('highlight count', () => (
  <ResultCount backgroundColor="#b10e1e" color="white">3</ResultCount>
));

stories.add('alternative count', () => (
  <ResultCount backgroundColor="#e48600" color="#3a2505">3</ResultCount>
));
