import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Arrow from '@govuk-frederic/arrow';

const RotatingButton = styled('button')(
  {
    ':focus': {
      outline: 'none',
    },
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    height: '20px',
    padding: 0,
    transition: 'transform 0.3s ease-in-out',
    width: '20px',
  },
  ({ open }) => ({
    transform: open ? 'rotate(0deg)' : 'rotate(-90deg)',
  }),
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * import manageState from 'manage-state';
 *
 * const ManagedOpenButton = manageState(OpenButton, { propsToState: ['open']});
 *
 * <ManagedOpenButton />
 * ```
 */
const OpenButton = ({ open, onChange, ...props }) => (
  <RotatingButton open={open} onClick={() => onChange && onChange({ open: !open })} {...props}>
    <Arrow width={20} />
  </RotatingButton>
);

OpenButton.propTypes = {
  onChange: PropTypes.func,
  open: PropTypes.bool,
};

export { RotatingButton };
export default OpenButton;
