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
import { Link } from 'react-router-dom';
import PageNavigation, { asAnchor } from '@govuk-frederic/page-navigation';

const NavLink = asAnchor(Link);
const NavigationItems = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/section-01',
    title: 'Section 01',
  },
  {
    url: '/section-02',
    title: 'Section 02',
  },
];

…

<PageNavigation>
  {NavigationItems.map(({url, title}, index) => (
    <NavLink key={index} to={url}>{title}</NavLink>
  ))}
</PageNavigation>
```

### TODO:
- Add responsive considerations
- Replace magic numbers from HOC items with constants

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```null``` | node | Navigation items


