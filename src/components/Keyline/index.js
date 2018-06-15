import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { GREY_1 } from 'govuk-colours';

const KeylineWrapper = glamorous.span(({ inlineBlock, borderColor }) => ({
  border: 0,
  borderBottom: `1px solid ${borderColor ? borderColor : GREY_1}`,
  display: inlineBlock ? 'inline-block' : 'block',
  fontFamily: 'Roboto, Arial, sans-serif',
}));

const Keyline = ({ children, inlineBlock, borderColor }) => (
  <KeylineWrapper inlineBlock={inlineBlock} borderColor={borderColor}>
    {children}
  </KeylineWrapper>
);

Keyline.propTypes = {
  borderColor: PropTypes.string,
  children: PropTypes.node,
  inlineBlock: PropTypes.bool,
};

export default Keyline;
