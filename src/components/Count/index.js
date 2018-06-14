import React from 'react';
import PropTypes from 'prop-types';

const Count = (props) => {
  const {
    value,
  } = props;

  return (
    <div>
      <span>{value}</span>
    </div>
  );
};

Count.propTypes = {
  textClass: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Count;
