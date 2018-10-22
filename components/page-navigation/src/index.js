import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { SPACING } from '@govuk-react/constants';
import { BLUE, WHITE } from 'govuk-colours';

import Anchor from './atoms/anchor';

const StyledNavigation = styled('div')({
  width: '100%',
  background: WHITE,
  color: BLUE,
  borderBottom: 'solid 1px #e2e2e2',
});

const InnerContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: SPACING.SCALE_5,
  paddingRight: SPACING.SCALE_5,
});

const NavigationItems = styled('div')({
  display: 'flex',
});

/**
 *
 * ### Usage
 *
 * Default example
 *
 * ```jsx
 * import React from 'react';
 * import { BrowserRouter } from 'react-router-dom';
 * import asNavLink from 'as-nav-link';

 * import PageNavigation from '.';

 * const NavLink = asNavLink()(PageNavigation.Anchor);

 * const PageNavigationExample = () => (
 *   <BrowserRouter>
 *     <PageNavigation>
 *       <NavLink exact to="/">Home</NavLink>
 *       <NavLink exact to="/section-01">Section 01</NavLink>
 *       <NavLink exact to="/section-02">Section 02</NavLink>
 *     </PageNavigation>
 *   </BrowserRouter>
 * );
 * ```
 *
 * ### TODO:
 * - Add responsive considerations
 */
const PageNavigation = ({ children }) => (
  <StyledNavigation>
    <InnerContainer>
      <NavigationItems>
        {children}
      </NavigationItems>
    </InnerContainer>
  </StyledNavigation>
);

PageNavigation.propTypes = {
  /** Navigation items */
  children: PropTypes.node,
};

PageNavigation.defaultProps = {
  children: null,
};

PageNavigation.Anchor = Anchor;

export default PageNavigation;
