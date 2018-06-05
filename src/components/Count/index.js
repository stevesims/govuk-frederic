import React from 'react';
import PropTypes from 'prop-types';

const Count = (props) => {
  const {
    className = 'result-count',
    textClass = 'result-count-text',
    value,
  } = props;

  return (
    <div className={`count ${className}`}>
      <span className={textClass}>{value}</span>
    </div>
  );
};

Count.propTypes = {
  className: PropTypes.string,
  textClass: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Count;
