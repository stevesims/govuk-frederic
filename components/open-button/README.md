OpenButton
==========

### Import
```js
  import OpenButton from '@govuk-frederic/open-button';
```
<!-- STORY -->

### Usage

Simple
```jsx
import manageState from 'manage-state';

const ManagedOpenButton = manageState(OpenButton, { propsToState: ['open']});

<ManagedOpenButton />
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `onChange` |  | `````` | func | 
 `open` |  | `````` | bool | 


