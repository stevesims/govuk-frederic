import React from 'react';
import { storiesOf } from '@storybook/react';

import RemoveButton from '.';

const stories = storiesOf('Buttons/RemoveButton', module);

stories.add('Component default', () => <RemoveButton title="Remove" />);
stories.add('Next to some text', () => <div><span>Text here</span><RemoveButton title="Remove" /></div>);
