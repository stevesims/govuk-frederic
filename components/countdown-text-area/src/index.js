import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ERROR_COLOUR } from 'govuk-colours';
import { TextAreaField } from '@govuk-react/text-area';
import { NTA_LIGHT } from '@govuk-react/constants';

const StyledTextAreaField = styled(TextAreaField)({
  minHeight: '250px',
});

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
  position: 'absolute',
  bottom: '12px',
  right: '10px',
  fontFamily: NTA_LIGHT,
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * import manageState from 'manage-state';
 *
 * const ManagedCountdownTextarea = manageState(CountdownTextArea, {
 *  changeEvent: true,
 *  propsToState: ['value'],
 * });
 *
 * <ManagedCountdownTextarea />
 * ```
 *
 * With maxlength (150)
 * ```jsx
 * import manageState from 'manage-state';
 *
 * const ManagedCountdownTextarea = manageState(CountdownTextArea, {
 *  changeEvent: true,
 *  propsToState: ['value'],
 * });

 * <ManagedCountdownTextarea noMaxLengthAttr maxLength={150} />
 * ```
 *
 * With maxlength (100) and positiveOnly
 * ```jsx
 * import manageState from 'manage-state';
 *
 * const ManagedCountdownTextarea = manageState(CountdownTextArea, {
 *  changeEvent: true,
 *  propsToState: ['value'],
 * });
 *
 * <ManagedCountdownTextarea maxLength={100} positiveOnly />
 * ```
 */
const CountdownTextArea = props => {
  const {
    maxLength, noMaxLengthAttr, positiveOnly, ...input
  } = props;

  const showRemaining = !!maxLength;
  const remaining = showRemaining ? maxLength - (input.value || '').length : false;
  const over = showRemaining && remaining <= 0;
  const name = input.name ? input.name : 'CountdownTextArea';

  return (
    <StyledTextArea over={over} {...props} name={`${name}--container`}>
      <StyledTextAreaField {...input} maxLength={noMaxLengthAttr ? null : maxLength} />
      {showRemaining && (
        <StyledCountdownContainer name={`${name}--count_wrapper`}>
          <StyledCountdown name={`${name}--count`}>{over && positiveOnly ? '0' : remaining}</StyledCountdown>
        </StyledCountdownContainer>
      )}
    </StyledTextArea>
  );
};

CountdownTextArea.defaultProps = {
  maxLength: undefined,
  noMaxLengthAttr: false,
  positiveOnly: false,
  input: {},
};

CountdownTextArea.propTypes = {
  maxLength: PropTypes.number,
  noMaxLengthAttr: PropTypes.bool,
  positiveOnly: PropTypes.bool,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
  }),
};

export default CountdownTextArea;
