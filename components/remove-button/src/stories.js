import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import RemoveButton from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Buttons/RemoveButton', module);
const examples = storiesOf('Buttons/RemoveButton/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => <RemoveButton title="Remove" />);
examples.add('Next to some text', () => <div><span>Text here</span><RemoveButton title="Remove" /></div>);
