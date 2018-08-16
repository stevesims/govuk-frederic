import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import TitleResultCount from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Count/TitleResultCount', module);
const examples = storiesOf('Count/TitleResultCount/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => <TitleResultCount count={3} countColor="white" countBackgroundColor="#b10e1e">Title Title Title</TitleResultCount>);
examples.add('Counter title with value 0', () => <TitleResultCount count={0} countColor="black" countBackgroundColor="#dee0e2">Title Title Title</TitleResultCount>);
