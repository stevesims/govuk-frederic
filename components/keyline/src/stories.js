import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Keyline from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/Keyline', module);
const examples = storiesOf('Typography/Keyline/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => (
  <div>
    <Keyline>
      <p>example</p>
    </Keyline>
  </div>
));

examples.add('inlineBlock', () => (
  <div>
    <Keyline inlineBlock>
      <p>example</p>
    </Keyline>
  </div>
));

examples.add('inlineBlock with orange border', () => (
  <div>
    <Keyline inlineBlock borderColor="#ff9900">
      <p>example</p>
    </Keyline>
  </div>
));
