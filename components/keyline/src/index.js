import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withWhiteSpace } from '@govuk-react/hoc';

import { GREY_1 } from 'govuk-colours';
import { NTA_LIGHT } from '@govuk-react/constants';

const KeylineWrapper = styled('span')(({ inlineBlock, borderColor }) => ({
  border: 0,
  borderBottom: `1px solid ${borderColor || GREY_1}`,
  display: inlineBlock ? 'inline-block' : 'block',
  fontFamily: NTA_LIGHT,
}));

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Keyline>
 *    <p>example</p>
 * </Keyline>
 * ```
 *
 * inlineBlock
 * ```jsx
 * <Keyline inlineBlock>
 *    <p>example</p>
 * </Keyline>
 * ```
 *
 * inlineBlock with orange border
 * ```jsx
 * <<Keyline inlineBlock borderColor="#ff9900">
 *    <p>example</p>
 * </Keyline>
 * ```
 */
const Keyline = props => <KeylineWrapper {...props} />;

Keyline.propTypes = {
  borderColor: PropTypes.string,
  children: PropTypes.node,
  inlineBlock: PropTypes.bool,
};

export default withWhiteSpace({ marginBottom: 3 })(Keyline);
