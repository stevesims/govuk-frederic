import React from 'react';
import { storiesOf } from '@storybook/react';
import Keyline from '.';

export default ({module}) => {
  storiesOf('Keyline', module)
    .add('default', () => (
      <div>
        <Keyline>
          <p>example</p>
        </Keyline>
      </div>
    ))
    .add('inlineBlock', () => (
      <div>
        <Keyline inlineBlock>
          <p>example</p>
        </Keyline>
      </div>
    ))
    .add('inlineBlock with orange border', () => (
      <div>
        <Keyline inlineBlock borderColor="#ff9900">
          <p>example</p>
        </Keyline>
      </div>
    ));
};
