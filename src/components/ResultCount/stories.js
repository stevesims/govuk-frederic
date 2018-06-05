import React from 'react';
import { storiesOf } from '@storybook/react';

import ResultCount from '.';

export default ({module}) => {
  storiesOf('ResultCount', module)
    .add('default', () => <ResultCount backgroundColor="#6f777b" color="white">0</ResultCount>)
    .add('long count', () => <ResultCount backgroundColor="#6f777b" color="white">000</ResultCount>)
    .add('disable count', () => <ResultCount backgroundColor="#dee0e2" color="black">0</ResultCount>)
    .add('highlight count', () => <ResultCount backgroundColor="#b10e1e" color="white">3</ResultCount>)
    .add('alternative count', () => <ResultCount backgroundColor="#e48600" color="#3a2505">3</ResultCount>);
};
