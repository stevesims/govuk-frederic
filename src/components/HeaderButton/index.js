import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { FOCUS_COLOUR, LINK_ACTIVE_COLOUR, LINK_COLOUR} from 'govuk-colours';

const Button = glamorous.button(
  {
    background: 'none',
    borderBottom: '4px solid transparent',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: '4px solid transparent',
    display: 'inline-block',
    fontSize: '18px',
    fontWeight: 'bold',
    minWidth: '190px',
    padding: '8px',
    textAlign: 'center',
  },
  ({ active }) => (
    active ? {
      borderBottomColor: LINK_COLOUR,
      borderTopColor: LINK_COLOUR,
      color: LINK_COLOUR,
    } : {}
  ),
  ({ disabled }) => (
    disabled ? {
      opacity: '0.35',
    } : {
      ':focus': {
        background: `${FOCUS_COLOUR}`,
        outline: `1px solid ${FOCUS_COLOUR}`,
      },
      ':hover': {
        borderBottomColor: `${LINK_ACTIVE_COLOUR}`,
        borderTopColor: `${LINK_ACTIVE_COLOUR}`,
      },
    }
  ),
);

const HeaderButton = ({active, children, disabled, ...props}) => (
  <Button {...props} active={active} disabled={disabled}>
    {children}
  </Button>
);

HeaderButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

export default HeaderButton;
