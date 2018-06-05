import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import Arrow from '../Arrow';

const RotatingButton = glamorous.button(
  {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    height: '20px',
    padding: 0,
    transition: 'transform 0.3s ease-in-out',
    width: '20px',
  },
  ({open}) => (
    {transform:
        open
          ? 'rotate(0deg)'
          : 'rotate(-90deg)',
    }
  ),
);

const OpenButton = ({open, onChange}) => (
  <RotatingButton open={open} onClick={() => onChange && onChange({open: !open})}>
    <Arrow
      width={20} />
  </RotatingButton>);

OpenButton.propTypes = {
  onChange: PropTypes.func,
  open: PropTypes.bool,
};

export { RotatingButton };
export default OpenButton;
