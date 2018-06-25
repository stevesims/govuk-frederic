import React from 'react';
import { storiesOf } from '@storybook/react';

import CountdownTextarea from '.';

import manageState from 'manage-state';

const ManagedCountdownTextarea = manageState(CountdownTextarea, {
  changeEvent: true,
  propsToState: ['value'],
});

const stories = storiesOf('Forms/CountdownTextarea', module);

stories.add('Component default', () => <ManagedCountdownTextarea />);
stories.add('with maxLength (150)', () => <ManagedCountdownTextarea noMaxLengthAttr maxLength={150} />);
stories.add('with maxLength (100) and positiveOnly', () => <ManagedCountdownTextarea maxLength={100} positiveOnly />);

