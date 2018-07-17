import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import CounterBar from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Count/CounterBar', module);
const examples = storiesOf('Count/CounterBar/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () =>
  (<CounterBar>
    <CounterBar.Total score={15}>All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>),
);

examples.add('Active counter', () =>
  (<CounterBar>
    <CounterBar.Total score={15}>All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3} active>Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>),
);

examples.add('Active total', () =>
  (<CounterBar>
    <CounterBar.Total score={15} active>All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>),
);

examples.add('Without Counters wrapper', () =>
  (<CounterBar>
    <CounterBar.Total score={15}>All counters</CounterBar.Total>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar>),
);

examples.add('Empty counters', () =>
  (<CounterBar>
    <CounterBar.Total score={7}>All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter />
      <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
      <CounterBar.Counter />
    </CounterBar.Counters>
  </CounterBar>),
);

examples.add('CounterBar with padded counters container', () =>
  (<div style={{padding: '4px'}}>
    <CounterBar>
      <CounterBar.Total score={15}>All counters</CounterBar.Total>
      <CounterBar.Counters>
        <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
        <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
        <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
        <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
        <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
      </CounterBar.Counters>
    </CounterBar>
  </div>),
);

examples.add('Zero/no scores', () =>
  (<CounterBar>
    <CounterBar.Total score={9}>All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={0}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
      <CounterBar.Counter>Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>),
);

examples.add('Custom colours on total', () =>
  (<CounterBar>
    <CounterBar.Total score={15} scoreColor="yellow" scoreBackgroundColor="pink">All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>),
);

examples.add('Custom colours on counters', () =>
  (<CounterBar>
    <CounterBar.Total score={15}>All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={2} scoreColor="orange" scoreBackgroundColor="blue">Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4} scoreColor="yellow" scoreBackgroundColor="purple">Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>),
);

examples.add('Use any HTML element string for the total', () =>
(<CounterBar>
  <CounterBar.Total score={15} component="aside">All counters</CounterBar.Total>
  <CounterBar.Counters>
    <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
    <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
    <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
    <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
    <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
  </CounterBar.Counters>
</CounterBar>),
);

examples.add('Use a Link component for the total', () =>
  (<HashRouter>
    <CounterBar>
      <CounterBar.Total score={15} component={Link} to="/courses?sort=name'/">All counters</CounterBar.Total>
      <CounterBar.Counters>
        <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
        <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
        <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
        <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
        <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
      </CounterBar.Counters>
    </CounterBar>
  </HashRouter>),
);

examples.add('Use any HTML element string for a counter', () =>
  (<CounterBar>
    <CounterBar.Total score={15}>All counters</CounterBar.Total>
    <CounterBar.Counters>
      <CounterBar.Counter score={1} component="nav">Counter 1</CounterBar.Counter>
      <CounterBar.Counter score={2} component="aside">Counter 2</CounterBar.Counter>
      <CounterBar.Counter score={3} component="div">Counter 3</CounterBar.Counter>
      <CounterBar.Counter score={4} component="section">Counter 4</CounterBar.Counter>
      <CounterBar.Counter score={5} component="span">Counter 5</CounterBar.Counter>
    </CounterBar.Counters>
  </CounterBar>),
);

examples.add('Use a Link component for a counter', () =>
  (<HashRouter>
    <CounterBar>
      <CounterBar.Total score={15}>All counters</CounterBar.Total>
      <CounterBar.Counters>
        <CounterBar.Counter score={1} component={Link} to="/courses/1/">Counter 1</CounterBar.Counter>
        <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
        <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
        <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
        <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
      </CounterBar.Counters>
    </CounterBar>
  </HashRouter>),
);

