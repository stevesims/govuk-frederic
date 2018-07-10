import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import OpenButton from '.';
import ReadMe from '../README.md';

import manageState from 'manage-state';

const ManagedOpenButton = manageState(OpenButton, { propsToState: ['open']});

const stories = storiesOf('Buttons/OpenButton', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => <ManagedOpenButton />);
