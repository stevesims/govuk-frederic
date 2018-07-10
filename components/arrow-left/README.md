ArrowLeft
=========

### Import
```js
  import ArrowLeft from '@govuk-frederic/arrow-left';
```
<!-- STORY -->

### Usage

Simple
```jsx
<ArrowLeft />
```

Dark background
```jsx
import { GREY_1 } from 'govuk-colours';

const darkBackground = {
  backgroundColor: GREY_1,
  minHeight: '320px',
  minWidth: '320px',
  padding: '20px',
};

<div style={darkBackground}>
 <ArrowLeft width={28} fill="white" />
</div>
```

Light background
```jsx
import { WHITE } from 'govuk-colours';

const lightBackground = {
 backgroundColor: WHITE,
 minHeight: '320px',
 minWidth: '320px',
 padding: '20px',
};

<div style={lightBackground}>
 <ArrowLeft width={28} fill="black" />
</div>
```

Dark background & title
```jsx
import { GREY_1 } from 'govuk-colours';

const darkBackground = {
 backgroundColor: GREY_1,
 minHeight: '320px',
 minWidth: '320px',
 padding: '20px',
};

<div style={darkBackground}>
 <ArrowLeft width={28} fill="white" color="white">
   Back to previous page
 </ArrowLeft>
</div>
```

Light background & title
```jsx
import { WHITE } from 'govuk-colours';

const lightBackground = {
  backgroundColor: WHITE,
  minHeight: '320px',
  minWidth: '320px',
  padding: '20px',
};

<div style={lightBackground}>
 <ArrowLeft width={28} fill="black">
   Back to previous page
 </ArrowLeft>
</div>
```

Wrapped with anchor with title text
```jsx
import { WHITE } from 'govuk-colours';

const lightBackground = {
 backgroundColor: WHITE,
 minHeight: '320px',
 minWidth: '320px',
 padding: '20px',
};

<div style={lightBackground}>
 <a href="http://example.com" style={{ color: '#005CA7' }}>
   <ArrowLeft width={28} fill="black">
     Back to previous page
   </ArrowLeft>
 </a>
</div>
```

Wrapped with anchor with title text on dark background
```jsx
import { GREY_1 } from 'govuk-colours';

const darkBackground = {
 backgroundColor: GREY_1,
 minHeight: '320px',
 minWidth: '320px',
 padding: '20px',
};

<div style={darkBackground}>
 <a href="http://example.com" style={{ color: 'white' }}>
   <ArrowLeft width={28} fill="white">
     Back to previous page
   </ArrowLeft>
 </a>
</div>
```

Passing down onClick with title text
```jsx
import { GREY_1 } from 'govuk-colours';

const darkBackground = {
 backgroundColor: GREY_1,
 minHeight: '320px',
 minWidth: '320px',
 padding: '20px',
};

<div style={darkBackground}>
 <ArrowLeft width={28} fill="white" onClick={action('clicked arrow button')}>
   Back to previous page
 </ArrowLeft>
</div>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | string | 
 `color` |  | ```undefined``` | string | 
 `fill` |  | ```BLUE``` | string | 
 `onClick` |  | ```undefined``` | func | 
 `width` |  | ```20``` | number | 


