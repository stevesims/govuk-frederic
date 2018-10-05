PageHeader
==========

### Import
```js
  import PageHeader from '@govuk-frederic/page-header';
```
<!-- STORY -->

### Usage

Default example

```jsx
import PageHeader, { asLogoAnchor, asNavAnchor } from '@govuk-frederic/page-header';

const LogoLink = asLogoAnchor(Link);
const NavLink = asNavAnchor(Link);
const PageLogo = (<LogoLink to="/">Logo text</LogoLink>);
const PriorityNavigation = (<NavLink to="/">My Account</NavLink>);

…

<PageHeader logo={PageLogo}>
  {PriorityNavigation}
</PageHeader >
```

### TODO:
- Add responsive considerations

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```null``` | node | 
 `logo` |  | ```null``` | node | 


