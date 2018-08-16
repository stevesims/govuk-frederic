import React from 'react';
import PropTypes from 'prop-types';

import styled from 'react-emotion';
import { FOCUS_COLOUR, LINK_ACTIVE_COLOUR, LINK_COLOUR } from 'govuk-colours';
import { NTA_LIGHT } from '@govuk-react/constants';

const Button = styled('button')(
  {
    background: 'none',
    borderBottom: '4px solid transparent',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: '4px solid transparent',
    display: 'inline-block',
    fontFamily: NTA_LIGHT,
    fontSize: '18px',
    fontWeight: 'bold',
    minWidth: '190px',
    padding: '8px',
    textAlign: 'center',
  },
  ({ active }) =>
    active
      ? {
        borderBottomColor: LINK_COLOUR,
        borderTopColor: LINK_COLOUR,
        color: LINK_COLOUR,
      }
      : {},
  ({ disabled }) =>
    disabled
      ? {
        opacity: '0.35',
      }
      : {
        ':focus': {
          background: `${FOCUS_COLOUR}`,
          outline: `1px solid ${FOCUS_COLOUR}`,
        },
        ':hover': {
          borderBottomColor: `${LINK_ACTIVE_COLOUR}`,
          borderTopColor: `${LINK_ACTIVE_COLOUR}`,
        },
      },
);

/**
 *
 * ### Usage

 * Simple
 * ```jsx
 * <HeaderButton>One</HeaderButton>
 * ```
 *
 * Multiple header buttons
 * ```jsx
 * <Fragment>
 *  <HeaderButton>One</HeaderButton>
 *  <HeaderButton>Two</HeaderButton>
 * </Fragment>
 * ```
 *
 * Multiple header buttons with keyline
 * ```jsx
 * import Keyline from '@govuk-frederic/keyline';
 *
 * <Fragment>
 *  <Keyline>
 *    <HeaderButton>One</HeaderButton>
 *    <HeaderButton>Two</HeaderButton>
 *  </Keyline>
 * </Fragment>
 * ```
 *
 * Active header button
 * ```jsx
 * <HeaderButton active>On</HeaderButton>
 * ```
 *
 * Disabled header button
 * ```jsx
 * <HeaderButton disabled>Off</HeaderButton>
 * ```
 */
const HeaderButton = props => <Button {...props} />;

HeaderButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

export default HeaderButton;
