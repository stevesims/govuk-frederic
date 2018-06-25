import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { FONT_SIZE, LINE_HEIGHT, MEDIA_QUERIES } from '@govuk-react/constants';

import { BLUE } from 'govuk-colours';

const Wrapper = styled('span')(
  {
    alignItems: 'center',
    display: 'flex',
    width: 'fit-content',
  },
  ({ color }) => ({
    color: color || undefined,
  }),
);

const Title = styled('span')({
  fontFamily: 'Roboto, Arial, sans-serif',
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  marginLeft: '6px',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_16,
  },
});

const ArrowLeft = ({
 fill, color, width, children, onClick, ...props 
}) => (
  <Wrapper onClick={onClick} color={color}>
    <svg
      width={`${width}px`}
      height={`${width}px`}
      viewBox="0 0 512 512"
      fill={fill}
      {...props}
    >
      <title>{children}</title>
      // TODO check licence for Font Awesome or decide on an icon
      <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z" />
    </svg>
    {children && <Title>{children}</Title>}
  </Wrapper>
);

ArrowLeft.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.number,
};

ArrowLeft.defaultProps = {
  children: undefined,
  color: undefined,
  fill: BLUE,
  onClick: undefined,
  width: 20,
};

export default ArrowLeft;
