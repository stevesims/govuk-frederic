import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import HeaderButton from '.';
import Keyline from '../Keyline';

export default ({module}) => {
  storiesOf('HeaderButton', module)
    .add('default', () =>
      <HeaderButton>One</HeaderButton>
    )
    .add('Multiple Header Buttons', () =>
      <Fragment>
        <HeaderButton>One</HeaderButton>
        <HeaderButton>Two</HeaderButton>
      </Fragment>
    )
    .add('Multiple Header Buttons with keyline', () =>
      <Fragment>
        <Keyline>
          <HeaderButton>One</HeaderButton>
          <HeaderButton>Two</HeaderButton>
        </Keyline>
      </Fragment>
    )
    .add('Active Header Button', () =>
      <HeaderButton active>On</HeaderButton>
    )
    .add('Disable Header Button', () =>
      <HeaderButton disabled>Off</HeaderButton>
    );
};
