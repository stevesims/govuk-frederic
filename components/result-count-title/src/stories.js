import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import ResultCountTitle from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Count/ResultCountTitle', module);
const examples = storiesOf('Count/ResultCountTitle/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => <ResultCountTitle count={3} countColor="white" countBackgroundColor="#b10e1e">Title</ResultCountTitle>);
examples.add('In black with count value 0', () => <ResultCountTitle count={0} countColor="black" countBackgroundColor="#dee0e2">Title</ResultCountTitle>);
