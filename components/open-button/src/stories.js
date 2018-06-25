import React from 'react';
import { storiesOf } from '@storybook/react';

import OpenButton from '.';

import manageState from 'manage-state';

const ManagedOpenButton = manageState(OpenButton, { propsToState: ['open']});

const stories = storiesOf('Buttons/OpenButton', module);

stories.add('Component default', () => <ManagedOpenButton />);
