import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { WHITE, BLACK, YELLOW } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';

const LogoAnchor = styled(({
  as: T = 'a',
  active, // include here so we don't pass to <a />
  ...props
}) => <T {...props } />)({
  fontSize: '30px',
  lineHeight: '30px',
  fontWeight: '700',
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

LogoAnchor.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  active: PropTypes.bool,
};

export default LogoAnchor;
