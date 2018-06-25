import React from 'react';
import { storiesOf } from '@storybook/react';

import Component from '.';

const stories = storiesOf('Loading/Spinner', module);

stories.add('Component default', () => <Component visible />);
