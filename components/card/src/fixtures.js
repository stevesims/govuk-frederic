import React from 'react';
import { text, boolean } from '@storybook/addon-knobs/react';
import Card from '.';

export default () => <Card
  backgroundColor="#eee"
  padBottom
  mb={0}
  >
  <Card
    backgroundColor={text('backgroundColor', 'white')}
    accentColor={text('accentColor', 'teal')}
    topBorder={boolean('topBorder', false)}
    centered={boolean('centered', false)}
    padBottom={boolean('padBottom', true)}
    >
    {text('Contents', 'Card example')}
  </Card>
</Card>;
