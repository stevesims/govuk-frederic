import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import ObjectTable from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Tables/ObjectTable', module);
const examples = storiesOf('Tables/ObjectTable/Examples', module);
const title = ['Heading'];

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default (skips blank or null values)', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
    { key: 'three', heading: 'Three' },
    { key: 'four', heading: 'Four' },
  ];
  const object = {
    one: 'test', two: 'test', three: '', four: null,
  };

  return <ObjectTable fields={fields} object={object} title={title} />;
});

examples.add('skipEmptyValues false (renders empty values but not null ones)', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
    { key: 'three', heading: 'Three' },
    { key: 'four', heading: 'Four' },
  ];
  const object = {
    one: 'test', two: 'test', three: '', four: null,
  };

  return <ObjectTable fields={fields} object={object} title={title} skipEmptyValues={false} />;
});

examples.add('No values found for fields', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
    { key: 'three', heading: 'Three' },
    { key: 'four', heading: 'Four' },
  ];
  const object = { };

  return <ObjectTable fields={fields} object={object} title={title} />;
});

examples.add('Hide table when no data with hideWithNoValues', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
  ];
  const object = { };

  return <ObjectTable fields={fields} object={object} title={title} hideWithNoValues />;
});

examples.add('Mixed values no skip rows', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
    { key: 'three', heading: 'Three' },
    { key: 'four', heading: 'Four' },
    { key: 'five', heading: 'Five' },
    { key: 'six', heading: 'Six' },
    { key: 'seven', heading: 'Seven' },
  ];
  const object = {
    one: 'test',
    two: 'test',
    three: '',
    four: 'Beta',
    five: null,
    six: 0,
    seven: undefined,
    eight: undefined,
  };

  return <ObjectTable fields={fields} object={object} title={title} />;
});

examples.add('Mixed values with skip rows', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
    { key: 'three', heading: 'Three' },
    { key: 'four', heading: 'Four' },
    { key: 'five', heading: 'Five' },
    { key: 'six', heading: 'Six' },
    { key: 'seven', heading: 'Seven' },
    { key: 'eight', heading: 'Eight', transform: (result = 'TOBOLOL') => result },
  ];
  const object = {
    one: 'test',
    two: 'test',
    three: '',
    four: 'Beta',
    five: null,
    six: 0,
    seven: undefined,
    eight: undefined,
  };

  return <ObjectTable fields={fields} object={object} title={title} skipEmptyValues />;
});

examples.add('Missing item specified in key', () => {
  const fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two' },
    { key: 'three', heading: 'Three' },
    { key: 'four', heading: 'Four' },
    { key: 'five', heading: 'Five' },
    { key: 'six', heading: 'Six' },
    { key: 'seven', heading: 'Seven' },
  ];
  const object = {
    one: 'test',
    MISSING: 'test',
    three: '',
    four: 'Beta',
    five: null,
    six: 0,
    seven: undefined,
    eight: undefined,
  };

  return <ObjectTable fields={fields} object={object} title={title} skipEmptyValues />;
});

examples.add('With default transform', () => {
  const fields = [
    { key: 'one', heading: 'One', names: ['nameForTitleOne', 'nameForValueOne'] },
    { key: 'two', heading: 'Two', names: 'nameForBoth' },
    { key: 'three', heading: 'Three' },
    { key: 'four', heading: 'Four' },
    { key: 'five', heading: 'Five' },
    { key: 'six', heading: 'Six' },
    { key: 'seven', heading: 'Seven', names: ['anotherNameForTitleOne', 'anotherNameForValueOne'] },
  ];
  const object = {
    one: 'test',
    MISSING: 'test',
    three: '',
    four: 'Beta',
    five: null,
    six: 0,
    seven: undefined,
    eight: undefined,
  };
  const defaultTransform = (result = '-') => result;

  return <ObjectTable
    fields={fields}
    object={object}
    title={title}
    defaultTransform={defaultTransform}
    skipEmptyRows
  />;
});
