import React from 'react';
import { storiesOf } from '@storybook/react';

import CountdownTextarea from '.';

import manageState from 'manage-state';

const ManagedCountdownTextarea = manageState(CountdownTextarea, {
  changeEvent: true,
  propsToState: ['value'],
});

export default ({module}) => {
  storiesOf('unsorted/CountdownTextarea', module)
    .add('default', () => <ManagedCountdownTextarea />)
    .add('with maxLength (150)', () => <ManagedCountdownTextarea noMaxLengthAttr maxLength={150} />)
    .add('with maxLength (100) and positiveOnly', () => <ManagedCountdownTextarea maxLength={100} positiveOnly />);
};
