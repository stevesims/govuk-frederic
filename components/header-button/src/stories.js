import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import HeaderButton from '.';
import Keyline from '@govuk-frederic/keyline';
import ReadMe from '../README.md';

const stories = storiesOf('Buttons/HeaderButton', module);
const examples = storiesOf('Buttons/HeaderButton/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () =>
  <HeaderButton>One</HeaderButton>,
);

examples.add('Multiple header buttons', () =>
  <Fragment>
    <HeaderButton>One</HeaderButton>
    <HeaderButton>Two</HeaderButton>
  </Fragment>,
);

examples.add('Multiple header buttons with keyline', () =>
  <Fragment>
    <Keyline>
      <HeaderButton>One</HeaderButton>
      <HeaderButton>Two</HeaderButton>
    </Keyline>
  </Fragment>,
);

examples.add('Active header button', () =>
  <HeaderButton active>On</HeaderButton>,
);

examples.add('Disabled header button', () =>
  <HeaderButton disabled>Off</HeaderButton>,
);
