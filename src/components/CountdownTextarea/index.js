import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { TextAreaField } from '@govuk-react/text-area';
import { ERROR_COLOUR } from 'govuk-colours';

const StyledTextArea = styled('div')(
  {
    display: 'flex',
    position: 'relative',
  },
  ({ over }) => ({
    color: over ? ERROR_COLOUR : undefined, // Warning colour
    fontWeight: over ? 800 : undefined,
  }),
);

const StyledCountdownContainer = styled('div')({
  alignItems: 'flex-end',
  display: 'flex',
  flexGrow: 0,
  lineHeight: 1,
  position: 'relative',
  width: 0,
});

const StyledCountdown = styled('div')({
  bottom: '12px',
  position: 'absolute',
  right: '10px',
});

const CountdownTextarea = props => {
  const {
    maxLength,
    noMaxLengthAttr,
    positiveOnly,
    ...input
  } = props;

  const showRemaining = !!maxLength;
  const remaining = showRemaining ? maxLength - (input.value || '').length : false;
  const over = showRemaining && (remaining <= 0);

  return (
    <StyledTextArea over={over}>
      <TextAreaField
        {...input}
        maxLength={noMaxLengthAttr ? null : maxLength}
      />
      {showRemaining &&
        <StyledCountdownContainer>
          <StyledCountdown>
            {over && positiveOnly ? '0' : remaining}
          </StyledCountdown>
        </StyledCountdownContainer>
      }
    </StyledTextArea>
  );
};

CountdownTextarea.propTypes = {
  maxLength: PropTypes.number,
  noMaxLengthAttr: PropTypes.bool,
  positiveOnly: PropTypes.bool,
};

export default CountdownTextarea;
