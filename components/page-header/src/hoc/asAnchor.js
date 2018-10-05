import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import { SPACING } from '@govuk-react/constants';
import { WHITE, BLACK, YELLOW } from 'govuk-colours';

const asAnchor = (AnchorType) => {
  const Anchor = props => (
    <AnchorType {...props}>{props.children}</AnchorType>
  );

  const StyledHoc = styled(Anchor)({
    display: 'flex',
    padding: SPACING.SCALE_1,
    color: WHITE,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
    ':focus': {
      outline: 'none',
      color: BLACK,
      background: YELLOW,
    },
  });

  Anchor.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
  };

  return StyledHoc;
};

export default asAnchor;
