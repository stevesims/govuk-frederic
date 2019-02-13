TitleResultCount
================

### Import
```js
  import TitleResultCount from '@govuk-frederic/title-result-count';
```
<!-- STORY -->

### Usage

Simple
```jsx
<TitleResultCount count={3}>
 Title Title Title
</TitleResultCount>
```

Counter title with value 0 and override text and background colour.
```jsx
<TitleResultCount count={0} countColor="black" countBackgroundColor="#dee0e2">
 Title Title Title
</TitleResultCount>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | `````` | node | 
 `count` |  | `````` | union(number \| string) | 
 `countBackgroundColor` |  | `````` | string | 
 `countColor` |  | `````` | string | 


