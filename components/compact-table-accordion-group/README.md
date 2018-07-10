CompactTableAccordionGroup
==========================

### Import
```js
  import CompactTableAccordionGroup from '@govuk-frederic/compact-table-accordion-group';
```
<!-- STORY -->

### Usage

State managed with children
```jsx
import manageState from 'manage-state';

const ManagedCompactTableAccordionGroup = manageState(CompactTableAccordionGroup, {
  propsToState: ['open'],
});

<ManagedCompactTableAccordionGroup title="Title" expanded="expanded">
  Children
</ManagedCompactTableAccordionGroup>
```

State managed without children
```jsx
import manageState from 'manage-state';

const ManagedCompactTableAccordionGroup = manageState(CompactTableAccordionGroup, {
  propsToState: ['open'],
});

<ManagedCompactTableAccordionGroup title="Title" expanded="expanded"/>
```

Toggle open on title click with 'changeOnTitleClick' prop
```jsx
import manageState from 'manage-state';

const ManagedCompactTableAccordionGroup = manageState(CompactTableAccordionGroup, {
  propsToState: ['open'],
});

<ManagedCompactTableAccordionGroup changeOnTitleClick title="Title" expanded="expanded">
  Children
</ManagedCompactTableAccordionGroup>
```

Array
```jsx
import manageState from 'manage-state';

const arrayExampleItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const ManagedCompactTableAccordionGroup = manageState(CompactTableAccordionGroup, {
  propsToState: ['open'],
});


<ManagedCompactTableAccordionGroup
  expanded={
  arrayExampleItems.map((item, index) => {
    if (index) {
      return <div>{item}</div>;
    }
    return null;
  })}
>
  {arrayExampleItems[0]}
</ManagedCompactTableAccordionGroup>
```

### TODO:
- Implement Async story example in CodeSandbox

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `changeOnTitleClick` |  | ```false``` | bool | 
 `children` | true | `````` | node | 
 `expanded` | true | `````` | node | 
 `onChange` |  | `````` | func | 
 `open` |  | ```false``` | bool | 
 `title` |  | `````` | node | 


