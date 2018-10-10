import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import PageHeader, { asLogoAnchor, asNavAnchor } from '.';

const LogoLink = asLogoAnchor(Link);
const NavLink = asNavAnchor(Link);

const PageLogo = (<LogoLink to="/">Logo text</LogoLink>);
const PriorityNavigation = (<NavLink to="/">My Account</NavLink>);

const PageHeaderExample = () => (
  <BrowserRouter>
    <PageHeader logo={PageLogo}>
      {PriorityNavigation}
    </PageHeader >
  </BrowserRouter>
);

export default PageHeader;

export {
  PageHeaderExample,
};
