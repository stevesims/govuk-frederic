ArrayObjectTable
================

### Import
```js
  import ArrayObjectTable from '@govuk-frederic/array-object-table';
```
<!-- STORY -->

### Usage

Simple
```jsx
const fields = [
  { key: 'one', heading: 'One' },
  { key: 'two', heading: 'Two' },
];
const array = [
  { one: 'test', two: 'test' },
  { one: 'test' },
  {},
];
const title = ['Heading'];

<ArrayObjectTable fields={fields} array={array} title={title}/>;
```

With skipEmptyRows
```jsx
const fields = [
  { key: 'one', heading: 'One' },
  { key: 'two', heading: 'Two' },
];
const array = [
  {},
  {},
];
const title = ['Heading'];

<ArrayObjectTable fields={fields} array={array} title={title} skipEmptyRows/>
```

With skipEmptyRows and hideWithNoValues
```jsx
const fields = [
  { key: 'one', heading: 'One' },
  { key: 'two', heading: 'Two' },
];
const array = [
  {},
  {},
];
const title = ['Heading'];

<ArrayObjectTable fields={fields} array={array} title={title} skipEmptyRows hideWithNoValues/>;
```

With object transform and default transform
```jsx
const fields = [
  { key: 'one', heading: 'One' },
  { key: 'two', heading: 'Two', transform: value => value ? value.toLowerCase() : '' },
  { key: 'three', heading: 'Three' },
  { key: 'three', heading: 'Four', transform: value => value ? value.toLowerCase() : '*' },
];
const array = [
  {one: 'One', two: 'Two'},
];
const title = ['Heading'];
const defaultTransform = value => (value || '-');

<ArrayObjectTable fields={fields} array={array} title={title} skipEmptyRows hideWithNoValues defaultTransform={defaultTransform}/>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `array` | true | `````` | arrayOf[object Object] | 
 `defaultTransform` |  | ```(value = '-') => value``` | func | 
 `fields` | true | `````` | arrayOf[object Object] | 
 `hideWithNoValues` |  | ```false``` | bool | 
 `skipEmptyRows` |  | ```false``` | bool | 
 `title` |  | ```null``` | node | 


