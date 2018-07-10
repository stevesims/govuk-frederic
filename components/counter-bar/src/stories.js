import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import CounterBar from '.';
import ReadMe from '../README.md';

class ControlledCounterBar extends React.Component {
  state = {
    activeTitle: true,
    counters: [
      { id: 'abc', name: 'Counter 1', score: 0 },
      { id: 'def', name: 'Counter 2', score: 2 },
      { id: 'ghi', name: 'Counter 3', score: 2 },
    ],
  };

  render() {
    return <div style={{padding: '4px'}}>
      <CounterBar
        activeTitle={this.state.activeTitle}
        listTitle="All counters"
        name="name"
        counters={this.state.counters}
        onSelect={(id) => {
          const newCounters = this.state.counters.map(counter => {
            return {
              ...counter,
              active: counter.id === id,
            };
          });
          this.setState({ activeTitle: id === undefined, counters: newCounters });
        }}
      />
    </div>;
  }
}

const stories = storiesOf('Count/CounterBar', module);
const examples = storiesOf('Count/CounterBar/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () =>
  <CounterBar
    listTitle="All counters"
    name="name"
    counters={[
      { id: 'abc', name: 'Counter 1', score: 0 },
      { id: 'def', name: 'Counter 2', score: 2 },
      { id: 'ghi', name: 'Counter 3', score: 2 },
      { id: 'jkl', name: 'Counter 4', score: 9 },
      { id: 'mno', name: 'Counter 5', score: 2 },
      { id: 'pqr', name: 'Counter 6', score: 1 },
      { id: 'stu', name: 'Counter 7', score: 0 },
    ]}
  />,
);

examples.add('Active Counter', () =>
  <CounterBar
    listTitle="All counters"
    name="name"
    counters={[
      { id: 'abc', name: 'Counter 1', score: 0 },
      { active: true, id: 'def', name: 'Counter 2', score: 2 },
      { id: 'ghi', name: 'Counter 3', score: 2 },
    ]}
  />,
);

examples.add('Active Title', () =>
  <CounterBar
    activeTitle
    listTitle="All counters"
    name="name"
    counters={[
      { id: 'abc', name: 'Counter 1', score: 0 },
      { id: 'def', name: 'Counter 2', score: 2 },
      { id: 'ghi', name: 'Counter 3', score: 0 },
    ]}
  />,
);

examples.add('Active Counter and Title on click', () => <ControlledCounterBar />);

examples.add('Clickable Counters', () => <CounterBar
  listTitle="All counters"
  name="name"
  counters={[
    { id: 'abc', name: 'Counter 1', score: 0 },
    { id: 'def', name: 'Counter 2', score: 2 },
    { id: 'ghi', name: 'Counter 3', score: 2 },
    { id: 'jkl', name: 'Counter 4', score: 9 },
    { id: 'mno', name: 'Counter 5', score: 2 },
    { id: 'pqr', name: 'Counter 6', score: 1 },
    { id: 'stu', name: 'Counter 7' },
  ]}
  // eslint-disable-next-line no-alert
  onSelect={ (id) => alert(`Counter with id: ${id} selected.`) }
/>);

examples.add('CounterBar with padded container', () =>
  <div style={{padding: '4px'}}>
    <CounterBar
      listTitle="All counters"
      name="name"
      counters={[
        { id: 'abc', name: 'Counter 1', score: 0 },
        { id: 'def', name: 'Counter 2', score: 2 },
        { id: 'ghi', name: 'Counter 3', score: 2 },
        { id: 'jkl', name: 'Counter 4', score: 0 },
        { id: 'mno', name: 'Counter 5', score: 2 },
        { id: 'pqr', name: 'Counter 6', score: 0 },
        { id: 'stu', name: 'Counter 7', score: 2 },
      ]}
    />
  </div>,
);

examples.add('Zero/no scores', () =>
  <CounterBar
    listTitle="All counters"
    name="name"
    counters={[
      { id: 'abc', name: 'Counter 1', score: 0 },
      { id: 'def', name: 'Counter 2' },
      { id: 'ghi', name: 'Counter 3', score: 0 },
    ]}
  />,
);
