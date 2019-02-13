import React from 'react';
import { mount } from 'enzyme';

import Card, { CardDocumented } from '.';

describe('Card', () => {
  it('matches snapshot for simple render', () => {
    expect(mount(<CardDocumented>Example</CardDocumented>)).toMatchSnapshot('simple card');
  });

  it('matches snapshot for all options render', () => {
    expect(mount(<Card
      backgroundColor="yellow"
      accentColor="teal"
      topBorder
      centered
      padBottom
    >
      Example
    </Card>)).toMatchSnapshot('complex card');
  });
});
