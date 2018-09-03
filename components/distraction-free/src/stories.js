import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import DistractionFree from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Page/DistractionFree', module);
const examples = storiesOf('Page/DistractionFree/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () =>
  <DistractionFree onClick={action('clicked back button')}>
    content goes here
  </DistractionFree>
);

examples.add('With title', () =>
  <DistractionFree arrowLeftTitle="Back to example" onClick={action('clicked back button')}>
    content goes here
  </DistractionFree>
);
