import React from 'react';
import { storiesOf } from '@storybook/react';
import Keyline from '.';

const stories = storiesOf('Typography/Keyline', module);

stories.add('Component default', () => (
  <div>
    <Keyline>
      <p>example</p>
    </Keyline>
  </div>
));

stories.add('inlineBlock', () => (
  <div>
    <Keyline inlineBlock>
      <p>example</p>
    </Keyline>
  </div>
));

stories.add('inlineBlock with orange border', () => (
  <div>
    <Keyline inlineBlock borderColor="#ff9900">
      <p>example</p>
    </Keyline>
  </div>
));
