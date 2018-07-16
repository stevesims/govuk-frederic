TableAccordionGroup
===================

### Import
```js
  import TableAccordionGroup from '@govuk-frederic/table-accordion-group';
```
<!-- STORY -->

### Usage

State managed with children
```jsx
import manageState from 'manage-state';

const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
  propsToState: ['open'],
});

<ManagedTableAccordionGroup title="Title" expanded="expanded">
  Children
</ManagedTableAccordionGroup>
```

State managed without children
```jsx
import manageState from 'manage-state';

const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
  propsToState: ['open'],
});

<ManagedTableAccordionGroup title="Title" expanded="expanded"/>
```

Toggle open on title click with 'changeOnTitleClick' prop
```jsx
import manageState from 'manage-state';

const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
  propsToState: ['open'],
});

<ManagedTableAccordionGroup changeOnTitleClick title="Title" expanded="expanded">
  Children
</ManagedTableAccordionGroup>
```

Array
```jsx
import manageState from 'manage-state';

const arrayExampleItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
  propsToState: ['open'],
});


<ManagedTableAccordionGroup
  expanded={
  arrayExampleItems.map((item, index) => {
    if (index) {
      return <div>{item}</div>;
    }
    return null;
  })}
>
  {arrayExampleItems[0]}
</ManagedTableAccordionGroup>
```

### TODO:
- Implement Async story example in CodeSandbox

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `changeOnTitleClick` |  | ```false``` | bool | 
 `children` |  | ```undefined``` | node | 
 `expanded` | true | `````` | node | 
 `onChange` |  | `````` | func | 
 `open` |  | ```false``` | bool | 
 `title` |  | `````` | node | 


