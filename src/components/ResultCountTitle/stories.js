import React from 'react';
import { storiesOf } from '@storybook/react';

import ResultCountTitle from '.';

export default ({module}) => {
  storiesOf('ResultCountTitle', module)
    .add('default', () => <ResultCountTitle count={3} countColor="white" countBackgroundColor="#b10e1e">Title</ResultCountTitle>)
    .add('Counter Title with value 0', () => <ResultCountTitle count={0} countColor="black" countBackgroundColor="#dee0e2">Title</ResultCountTitle>);
};
