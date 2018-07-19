import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import { GREY_1, WHITE } from 'govuk-colours';
import {
  NTA_LIGHT,
} from '@govuk-react/constants';

const StyledResultCount = styled('span')(({ backgroundColor, color }) => ({
  background: backgroundColor,
  color,
  display: 'inline-block',
  fontFamily: NTA_LIGHT,
  fontSize: '15px',
  lineHeight: '1.25',
  minHeight: '20px',
  minWidth: '20px',
  padding: '1px 4px',
  textAlign: 'center',
}));

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <ResultCount>0</ResultCount>
 * ```
 * 
 * Overriding background and text colours
 * ```jsx
 * <ResultCount backgroundColor="#6f777b" color="white">000</ResultCount>
 * ```
 * 
 */
const ResultCount = props => <StyledResultCount {...props} />;

ResultCount.defaultProps = {
  backgroundColor: GREY_1,
  children: undefined,
  color: WHITE,
};

ResultCount.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
};

export default ResultCount;
