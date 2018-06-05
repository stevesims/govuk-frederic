import React from 'react';
import { storiesOf } from '@storybook/react';

import RemoveButton from '.';

export default ({module}) => {
  storiesOf('RemoveButton', module)
    .add('default', () => <RemoveButton title="Remove" />)
    .add('Next to some text', () => <div><span>Text here</span><RemoveButton title="Remove" /></div>);
};
