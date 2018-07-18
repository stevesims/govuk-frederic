HeaderButton
============

### Import
```js
  import HeaderButton from '@govuk-frederic/header-button';
```
<!-- STORY -->

### Usage

Simple
```jsx
<HeaderButton>One</HeaderButton>
```

Multiple header buttons
```jsx
<Fragment>
 <HeaderButton>One</HeaderButton>
 <HeaderButton>Two</HeaderButton>
</Fragment>
```

Multiple header buttons with keyline
```jsx
import Keyline from '@govuk-frederic/keyline';

<Fragment>
 <Keyline>
   <HeaderButton>One</HeaderButton>
   <HeaderButton>Two</HeaderButton>
 </Keyline>
</Fragment>
```

Active header button
```jsx
<HeaderButton active>On</HeaderButton>
```

Disabled header button
```jsx
<HeaderButton disabled>Off</HeaderButton>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `active` |  | `````` | bool | 
 `children` |  | `````` | node | 
 `disabled` |  | `````` | bool | 


