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
<Table titles={arrayExampleHeadings} rows={arrayExampleContent} names={exampleNames} />
```

rowIncludesHeading
```jsx
<Table titles={arrayExampleHeadings} rows={arrayExampleContent} rowIncludesHeading />
```

rowIncludesHeading, no titles
```jsx
<Table rows={arrayExampleContent} rowIncludesHeading names={exampleNames} />
```

rowIncludesHeading, no titles, small single row
```jsx
<Table rows={[['title', 'value']]} rowIncludesHeading />
```

rowIncludesHeading, with flexible columns
```jsx
<Table titles={arrayExampleHeadings} rows={arrayExampleContent} flexibleColumns rowIncludesHeading />
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `flexibleColumns` |  | `````` | bool | 
 `name` |  | `````` | string | 
 `names` |  | ```[]``` | arrayOf[object Object] | 
 `rowIncludesHeading` |  | `````` | bool | 
 `rows` | true | `````` | arrayOf[object Object] | 
 `titles` |  | `````` | arrayOf[object Object] | 


