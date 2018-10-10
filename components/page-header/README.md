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
- Check rendering of multiple items in Navigation container and provide example Story
- Replace magic numbers from HOC items with constants

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```null``` | node | Navigation items, rendered on the right
 `logo` |  | ```null``` | node | Title, rendered large on the left


