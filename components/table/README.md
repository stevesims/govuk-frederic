Table
=====

### Import
```js
  import Table from '@govuk-frederic/table';
```
<!-- STORY -->

### Usage

Simple
```jsx
const arrayExampleHeadings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
const arrayExampleContent = [
 ['Content 1-1', 'Content 1-2', 'Content 1-3', 'Content 1-4'],
 ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
 ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
];
const columnTableNames = ['one', 'two', 'three', ['i', 'am', 'named', 'individually']];

<Table titles={arrayExampleHeadings} rows={arrayExampleContent} names={columnTableNames} />
```

rowIncludesHeading
```jsx
const arrayExampleHeadings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
const arrayExampleContent = [
 ['Content 1-1', 'Content 1-2', 'Content 1-3', 'Content 1-4'],
 ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
 ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
];
const rowTableNamesWithTitles = ['heading', 'one', ['i', 'am', 'named', 'individually'], 'three'];

<Table titles={arrayExampleHeadings} rows={arrayExampleContent} rowIncludesHeading nameByRow names={rowTableNamesWithTitles} />
```

rowIncludesHeading, no titles
```jsx
const arrayExampleHeadings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
const arrayExampleContent = [
 ['Content 1-1', 'Content 1-2', 'Content 1-3', 'Content 1-4'],
 ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
 ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
];
const rowTableNames = ['one', ['i', 'am', 'named', 'individually'], 'three'];

<Table rows={arrayExampleContent} rowIncludesHeading nameByRow names={rowTableNames} />
```

rowIncludesHeading, no titles, small single row
```jsx
const arrayExampleHeadings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
const arrayExampleContent = [
 ['Content 1-1', 'Content 1-2', 'Content 1-3', 'Content 1-4'],
 ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
 ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
];
const rowTableNames = ['one', ['i', 'am', 'named', 'individually'], 'three'];

<Table rows={[['title', 'value']]} rowIncludesHeading nameByRow names={rowTableNames} />
```

rowIncludesHeading, with titles, with flexible columns
```jsx
const arrayExampleHeadings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
const arrayExampleContent = [
 ['Content 1-1', 'Content 1-2', 'Content 1-3', 'Content 1-4'],
 ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
 ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
];
const rowTableNamesWithTitles = ['heading', 'one', ['i', 'am', 'named', 'individually'], 'three'];

<Table titles={arrayExampleHeadings} rows={arrayExampleContent} flexibleColumns rowIncludesHeading nameByRow names={rowTableNamesWithTitles} />
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `flexibleColumns` |  | ```false``` | bool | 
 `name` |  | `````` | string | 
 `nameByRow` |  | ```false``` | bool | 
 `names` |  | ```[]``` | arrayOf[object Object] | 
 `rowIncludesHeading` |  | ```false``` | bool | 
 `rows` | true | `````` | arrayOf[object Object] | 
 `titles` |  | ```null``` | arrayOf[object Object] | 


