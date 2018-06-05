import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '.';

const arrayExampleHeadings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
const arrayExampleContent = [
  ['Content 1-1', 'Content 1-2', 'Content 3', 'Content 4'],
  ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
  ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
];
const exampleNames = ['one', 'two', 'three', 'four'];

export default ({module}) => {
  storiesOf('Table', module)
    .add('default', () =>
      <Table titles={arrayExampleHeadings} rows={arrayExampleContent} names={exampleNames} />
    )
    .add('rowIncludesHeading', () =>
      <Table titles={arrayExampleHeadings} rows={arrayExampleContent} rowIncludesHeading />
    )
    .add('rowIncludesHeading, no titles', () =>
      <Table rows={arrayExampleContent} rowIncludesHeading names={exampleNames} />
    )
    .add('rowIncludesHeading, no titles, small single row', () =>
      <Table rows={[['title', 'value']]} rowIncludesHeading />
    )
    .add('rowIncludesHeading, with flexible columns', () =>
      <Table titles={arrayExampleHeadings} rows={arrayExampleContent} flexibleColumns rowIncludesHeading />
    );
};
