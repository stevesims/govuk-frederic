import React from 'react';
import { storiesOf } from '@storybook/react';

import OpenButton from '.';

import manageState from 'manage-state';

const ManagedOpenButton = manageState(OpenButton, { propsToState: ['open']});

export default ({module}) => {
  storiesOf('OpenButton', module)
    .add('default', () => <ManagedOpenButton />);
};
