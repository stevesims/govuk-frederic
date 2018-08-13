ObjectTable
===========

### Import
```js
  import ObjectTable from '@govuk-frederic/object-table';
```
<!-- STORY -->

### Usage

Simple
```jsx
const fields = [
  { key: 'one', heading: 'One' },
  { key: 'two', heading: 'Two' },
  { key: 'three', heading: 'Three' },
  { key: 'four', heading: 'Four' },
];
const object = { one: 'test', two: 'test', three: '', four: null };
const title = ['Heading'];

<ObjectTable fields={fields} object={object} title={title}/>;
```

With skipEmptyValues
```jsx
const fields = [
  { key: 'one', heading: 'One' },
  { key: 'two', heading: 'Two' },
  { key: 'three', heading: 'Three' },
  { key: 'four', heading: 'Four' },
];
const object = { one: 'test', two: 'test', three: '', four: null };
const title = ['Heading'];

<ObjectTable fields={fields} object={object} title={title} skipEmptyValues={false}/>
```

With hideWithNoValues
```jsx
const fields = [
  { key: 'one', heading: 'One' },
  { key: 'two', heading: 'Two' },
];
const object = { };
const title = ['Heading'];

<ObjectTable fields={fields} object={object} title={title} hideWithNoValues />;
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `defaultTransform` |  | `````` | func | 
 `fields` |  | ```[]``` | arrayOf[object Object] | 
 `hideWithNoValues` |  | ```false``` | bool | 
 `object` |  | ```{}``` | object | 
 `skipEmptyValues` |  | ```false``` | bool | 
 `title` |  | ```null``` | node | 


