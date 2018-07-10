import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';
import manageState from 'manage-state';

import CountdownTextArea from '.';
import ReadMe from '../README.md';

const ManagedCountdownTextarea = manageState(CountdownTextArea, {
  changeEvent: true,
  propsToState: ['value'],
});

const stories = storiesOf('Forms/CountdownTextArea', module);
const examples = storiesOf('Forms/CountdownTextArea/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => <ManagedCountdownTextarea />);
examples.add('With maxLength (150)', () => <ManagedCountdownTextarea noMaxLengthAttr maxLength={150} />);
examples.add('With maxLength (100) and positiveOnly', () => <ManagedCountdownTextarea maxLength={100} positiveOnly />);
