import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';
import { withKnobs } from '@storybook/addon-knobs/react';

import Card from './fixtures';

import ReadMe from '../README.md';

const stories = storiesOf('Card', module);
stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', Card);
