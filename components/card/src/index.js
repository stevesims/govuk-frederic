import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';
import { WHITE, GREY_1 } from 'govuk-colours';

const Card = styled('div')(
  ({ backgroundColor }) => ({
    backgroundColor,
  }),
  ({ accentColor }) => accentColor ? {
    borderBottom: `3px solid ${accentColor}`,
  } : undefined,
  ({ topBorder }) => topBorder ? {
    borderTop: `solid 1px ${GREY_1}`,
  } : undefined,
  ({ centered }) => centered ? {
    textAlign: 'center',
  } : undefined,
  spacing.responsivePadding({ size: 4, direction: ['left', 'right'] }),
  spacing.responsivePadding({ size: 3, direction: 'top' }),
  ({ padBottom }) => spacing.responsivePadding({ size: padBottom ? 3 : 0, direction: 'bottom' }),
  spacing.withWhiteSpace({ marginBottom: 4 }),
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Card>Example</Card>
 * ```
 */
const CardDocumented = props => <Card {...props} />;

CardDocumented.propTypes = {
  children: PropTypes.node.isRequired,
  /** color for the background */
  backgroundColor: PropTypes.string,
  /** color for bottom border accent */
  accentColor: PropTypes.string,
  /** flag to indicate that top of the card should have a single-pixel grey border */
  topBorder: PropTypes.bool,
  /** flag to indicate content should be centered */
  centered: PropTypes.bool,
};

CardDocumented.defaultProps = {
  backgroundColor: WHITE,
  accentColor: undefined,
  topBorder: false,
  centered: false,
};

Card.propTypes = CardDocumented.propTypes;
Card.defaultProps = CardDocumented.defaultProps;

export { CardDocumented };
export default Card;
