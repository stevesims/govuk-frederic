import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import ResultCount from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Count/ResultCount', module);
const examples = storiesOf('Count/ResultCount/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => (
  <ResultCount backgroundColor="#6f777b" color="white">0</ResultCount>
));

examples.add('Long count', () => (
  <ResultCount backgroundColor="#6f777b" color="white">000</ResultCount>
));

examples.add('Disable count', () => (
  <ResultCount backgroundColor="#dee0e2" color="black">0</ResultCount>
));

examples.add('Highlight count', () => (
  <ResultCount backgroundColor="#b10e1e" color="white">3</ResultCount>
));

examples.add('Alternative count', () => (
  <ResultCount backgroundColor="#e48600" color="#3a2505">3</ResultCount>
));
