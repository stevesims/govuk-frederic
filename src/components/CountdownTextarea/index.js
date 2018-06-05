import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaField } from '@govuk-react/text-area';

const CountdownTextarea = props => {
  const {
    maxLength,
    noMaxLengthAttr,
    positiveOnly,
    ...input
  } = props;

  const showRemaining = !!maxLength;
  const remaining = showRemaining ? maxLength - (input.value || '').length : false;
  const over = showRemaining && (remaining < 0);

  return (
    <div className={`countdown-textarea ${remaining <= 0 ? 'over' : ''}`}>
      <TextAreaField
        {...input}
        maxLength={noMaxLengthAttr ? null : maxLength}
      />
      {showRemaining &&
        <div className="countdown-textarea--countdown-container">
          <div className="countdown-textarea--countdown">
            {over && positiveOnly ? '0' : remaining}
          </div>
        </div>
      }
    </div>
  );
};

CountdownTextarea.propTypes = {
  maxLength: PropTypes.number,
  noMaxLengthAttr: PropTypes.bool,
  positiveOnly: PropTypes.bool,
};

export default CountdownTextarea;
