import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import HeaderButton from '.';
import Keyline from '@govuk-frederic/keyline';

const stories = storiesOf('Buttons/HeaderButton', module);

stories.add('Component default', () =>
  <HeaderButton>One</HeaderButton>,
);

stories.add('Multiple Header Buttons', () =>
  <Fragment>
    <HeaderButton>One</HeaderButton>
    <HeaderButton>Two</HeaderButton>
  </Fragment>,
);

stories.add('Multiple Header Buttons with keyline', () =>
  <Fragment>
    <Keyline>
      <HeaderButton>One</HeaderButton>
      <HeaderButton>Two</HeaderButton>
    </Keyline>
  </Fragment>,
);

stories.add('Active Header Button', () =>
  <HeaderButton active>On</HeaderButton>,
);

stories.add('Disable Header Button', () =>
  <HeaderButton disabled>Off</HeaderButton>,
);
