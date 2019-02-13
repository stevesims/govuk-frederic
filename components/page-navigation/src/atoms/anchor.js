import React from 'react';
import styled from 'styled-components';

import { SPACING } from '@govuk-react/constants';
import { BLUE, YELLOW } from 'govuk-colours';

const Anchor = styled(({
  as: T = 'a',
  active, // include here so we don't pass to <a />
  ...props
}) => <T {...props } />)({
  display: 'flex',
  padding: SPACING.SCALE_1,
  color: BLUE,
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '1.25',
  fontWeight: '700',
  borderBottom: '4px solid transparent',
  paddingTop: SPACING.SCALE_3,
  paddingLeft: SPACING.SCALE_3,
  paddingBottom: '11px',
  paddingRight: SPACING.SCALE_3,
  ':hover': {
    color: '#2b8cc4',
    borderColor: '#2b8cc4',
  },
  ':focus': {
    outline: `3px solid ${YELLOW}`,
  },
}, ({ active }) => (active && {
  borderColor: BLUE,
}));

export default Anchor;
