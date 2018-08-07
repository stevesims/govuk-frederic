import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { FONT_SIZE, LINE_HEIGHT, MEDIA_QUERIES, NTA_LIGHT } from '@govuk-react/constants';
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
  fontFamily: NTA_LIGHT,
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  marginLeft: '6px',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_16,
  },
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <ArrowLeft />
 * ```
 * 
 * Dark background
 * ```jsx
 * import { GREY_1 } from 'govuk-colours';
 *
 * const darkBackground = {
 *   backgroundColor: GREY_1,
 *   minHeight: '320px',
 *   minWidth: '320px',
 *   padding: '20px',
 * };
 *
 * <div style={darkBackground}>
 *  <ArrowLeft width={28} fill="white" />
 * </div>
 * ```
 * 
 * Light background
 * ```jsx
 * import { WHITE } from 'govuk-colours';
 *
 * const lightBackground = {
 *  backgroundColor: WHITE,
 *  minHeight: '320px',
 *  minWidth: '320px',
 *  padding: '20px',
 * };
 *
 * <div style={lightBackground}>
 *  <ArrowLeft width={28} fill="black" />
 * </div>
 * ```
 * 
 * Dark background & title
 * ```jsx
 * import { GREY_1 } from 'govuk-colours';
 *
 * const darkBackground = {
 *  backgroundColor: GREY_1,
 *  minHeight: '320px',
 *  minWidth: '320px',
 *  padding: '20px',
 * };
 *
 * <div style={darkBackground}>
 *  <ArrowLeft width={28} fill="white" color="white">
 *    Back to previous page
 *  </ArrowLeft>
 * </div>
 * ```
 * 
 * Light background & title
 * ```jsx
 * import { WHITE } from 'govuk-colours';
 *
 * const lightBackground = {
 *   backgroundColor: WHITE,
 *   minHeight: '320px',
 *   minWidth: '320px',
 *   padding: '20px',
 * };
 *
 * <div style={lightBackground}>
 *  <ArrowLeft width={28} fill="black">
 *    Back to previous page
 *  </ArrowLeft>
 * </div>
 * ```
 * 
 * Wrapped with anchor with title text
 * ```jsx
 * import { WHITE } from 'govuk-colours';
 *
 * const lightBackground = {
 *  backgroundColor: WHITE,
 *  minHeight: '320px',
 *  minWidth: '320px',
 *  padding: '20px',
 * };
 *
 * <div style={lightBackground}>
 *  <a href="http://example.com" style={{ color: '#005CA7' }}>
 *    <ArrowLeft width={28} fill="black">
 *      Back to previous page
 *    </ArrowLeft>
 *  </a>
 * </div>
 * ```
 * 
 * Wrapped with anchor with title text on dark background
 * ```jsx
 * import { GREY_1 } from 'govuk-colours';
 *
 * const darkBackground = {
 *  backgroundColor: GREY_1,
 *  minHeight: '320px',
 *  minWidth: '320px',
 *  padding: '20px',
 * };
 *
 * <div style={darkBackground}>
 *  <a href="http://example.com" style={{ color: 'white' }}>
 *    <ArrowLeft width={28} fill="white">
 *      Back to previous page
 *    </ArrowLeft>
 *  </a>
 * </div>
 * ```
 * 
 * Passing down onClick with title text
 * ```jsx
 * import { GREY_1 } from 'govuk-colours';
 *
 * const darkBackground = {
 *  backgroundColor: GREY_1,
 *  minHeight: '320px',
 *  minWidth: '320px',
 *  padding: '20px',
 * };
 *
 * <div style={darkBackground}>
 *  <ArrowLeft width={28} fill="white" onClick={action('clicked arrow button')}>
 *    Back to previous page
 *  </ArrowLeft>
 * </div>
 * ```
 */
const ArrowLeft = ({
  fill, width, children, onClick, ...props
}) => (
  <Wrapper onClick={onClick} {...props}>
    <svg
      width={`${width}px`}
      height={`${width}px`}
      viewBox="0 0 512 512"
      fill={fill}
    >
      <title>{children}</title>
      { /** TODO check licence for Font Awesome or decide on an icon */ }
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
