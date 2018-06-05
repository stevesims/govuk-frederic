import React from 'react';
import { storiesOf } from '@storybook/react';

import ResultCountHeader from '.';

export default ({module}) => {
  storiesOf('TitleResultCount', module)
    .add('default', () => <ResultCountHeader count={3} countColor="white" countBackgroundColor="#b10e1e">Title Title Title</ResultCountHeader>)
    .add('Counter Title with value 0', () => <ResultCountHeader count={0} countColor="black" countBackgroundColor="#dee0e2">Title Title Title</ResultCountHeader>);
};
