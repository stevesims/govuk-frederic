import React from 'react';
import { storiesOf } from '@storybook/react';

import CompactTableAccordionGroup from '.';
import ResultCountTitle from '@govuk-frederic/result-count-title';
import Spinner from '@govuk-frederic/spinner';

import manageState from 'manage-state';

class CompactTableAccordionGroupAsyncExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        count: 88,
        firstItem: 'Davis Paul Jones',
        id: 1,
        title: 'Names',
      }, {
        count: 3,
        firstItem: 'Some address',
        id: 2,
        title: 'Addresses',
      }],
    };
  }

  loadItem(index) {
    // mock ajax call
    setTimeout(() => {
      this.setState(() => {
        const newItems = this.state.items.map((item, i) => {
          if (index === i) {
            return {
              ...item,
              loaded: true,
              text: `Loaded item ${index}`,
            };
          } return item;
        });
        return {items: newItems};
      });
    }, 1000);
  }

  onChange(open, index) {
    this.setState(() => {
      const newItems = this.state.items.map((item, i) => {
        if (index === i) {
          return {
            ...item,
            open,
          };
        } return item;
      });
      return {items: newItems};
    });

    // eslint disable justification:
    // "avoid the use of user input in property name fields"
    // https://blog.liftsecurity.io/2015/01/14/the-dangers-of-square-bracket-notation/
    // - `index` is not a user input as it comes from items.map in render.
    // - This code is also not expected to be executed on a server, other than during unit tests,
    //   in which case this vulnerability is not relevant.
    if(open && !this.state.items[index].loaded) { // eslint-disable-line security/detect-object-injection
      this.loadItem(index);
    }
  }

  render() {
    const { items } = this.state;

    return <div>
      {items.map((item, index) => (
        <CompactTableAccordionGroup
          changeOnTitleClick
          key={item.id}
          title={
            <ResultCountTitle count={item.count} title={item.title} />
          }
          open={item.open}
          expanded={item.loaded ? item.text : <Spinner visible />}
          onChange={({open}) => this.onChange(open, index)}>
          {item.firstItem}
        </CompactTableAccordionGroup>
      ))}
    </div>;
  }
}

const ManagedCompactTableAccordionGroup = manageState(CompactTableAccordionGroup, {
  propsToState: ['open'],
});

const arrayExampleItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const stories = storiesOf('Tables/CompactTableAccordionGroup', module);

stories.add('Component default', () => <CompactTableAccordionGroup title="Title" expanded="expanded">
      Children
</CompactTableAccordionGroup>);

stories.add('no children', () => <CompactTableAccordionGroup open title="Title" expanded="expanded"/>);

stories.add('open', () => <CompactTableAccordionGroup open title="Title" expanded="expanded">
      Children
</CompactTableAccordionGroup>);

stories.add('state managed', () => <ManagedCompactTableAccordionGroup title="Title" expanded="expanded">
          Children
</ManagedCompactTableAccordionGroup>);

stories.add('state managed without children', () => <ManagedCompactTableAccordionGroup title="Title" expanded="expanded"/>);

stories.add('changeOnTitleClick', () => <ManagedCompactTableAccordionGroup changeOnTitleClick title="Title" expanded="expanded">
          Children
</ManagedCompactTableAccordionGroup>);

stories.add('array', () => <ManagedCompactTableAccordionGroup
  expanded={
    arrayExampleItems.map((item, index) => {
      if (index) {
        return <div>{item}</div>;
      }
      return null;
    })}
>
  {arrayExampleItems[0]}
</ManagedCompactTableAccordionGroup>);

stories.add('async', () => <CompactTableAccordionGroupAsyncExample />);
