CountdownTextArea
=================

### Import
```js
  import CountdownTextArea from '@govuk-frederic/countdown-text-area';
```
<!-- STORY -->

### Usage

Simple
```jsx
import manageState from 'manage-state';

const ManagedCountdownTextarea = manageState(CountdownTextArea, {
 changeEvent: true,
 propsToState: ['value'],
});

<ManagedCountdownTextarea />
```

With maxlength (150)
```jsx
import manageState from 'manage-state';

const ManagedCountdownTextarea = manageState(CountdownTextArea, {
 changeEvent: true,
 propsToState: ['value'],
});

<ManagedCountdownTextarea noMaxLengthAttr maxLength={150} />
```

With maxlength (100) and positiveOnly
```jsx
import manageState from 'manage-state';

const ManagedCountdownTextarea = manageState(CountdownTextArea, {
 changeEvent: true,
 propsToState: ['value'],
});

<ManagedCountdownTextarea maxLength={100} positiveOnly />
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `maxLength` |  | ```undefined``` | number | 
 `noMaxLengthAttr` |  | ```false``` | bool | 
 `positiveOnly` |  | ```false``` | bool | 


