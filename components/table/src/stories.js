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

const stories = storiesOf('Tables/Table', module);

stories.add('Component default', () =>
  <Table titles={arrayExampleHeadings} rows={arrayExampleContent} names={exampleNames} />
);

stories.add('rowIncludesHeading', () =>
  <Table titles={arrayExampleHeadings} rows={arrayExampleContent} rowIncludesHeading />
);

stories.add('rowIncludesHeading, no titles', () =>
  <Table rows={arrayExampleContent} rowIncludesHeading names={exampleNames} />
);

stories.add('rowIncludesHeading, no titles, small single row', () =>
  <Table rows={[['title', 'value']]} rowIncludesHeading />
);

stories.add('rowIncludesHeading, with flexible columns', () =>
  <Table titles={arrayExampleHeadings} rows={arrayExampleContent} flexibleColumns rowIncludesHeading />
);
