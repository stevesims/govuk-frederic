PageNavigation
==============

### Import
```js
  import PageNavigation from '@govuk-frederic/page-navigation';
```
<!-- STORY -->

### Usage

Default example

```jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import asNavLink from 'as-nav-link';

import PageNavigation from '.';

const NavLink = asNavLink()(PageNavigation.Anchor);

const PageNavigationExample = () => (
  <BrowserRouter>
    <PageNavigation>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/section-01">Section 01</NavLink>
      <NavLink exact to="/section-02">Section 02</NavLink>
    </PageNavigation>
  </BrowserRouter>
);
```

### TODO:
- Add responsive considerations

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```null``` | node | Navigation items


