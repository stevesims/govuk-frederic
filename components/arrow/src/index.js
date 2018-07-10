import React from 'react';
import PropTypes from 'prop-types';

// center of gravity of the triangle should be in the center of the svg
// for triangle pointing downwards, as it is right angled and isoceles:
// - center of gravity is at 1/3 of the triangles height down from longest side
// - situating this in the center of the bounding box can be acheived by
//   adding white space = 1/3 height of triangle above the triangle (*)
// - set viewbox/triangle width is 6
// - height of triangle is 3
// - height of viewport = height of triangle * 4/3 = 4 (see * above)

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Arrow />
 * ```
 */
const Arrow = ({ fill, width, ...rest }) => (
  <svg width={`${width}px`} height={`${width}px`} viewBox="0 0 6 4" {...rest}>
    <polygon fill={fill} points="3 4 6 1 0 1" />
  </svg>
);

Arrow.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
};

Arrow.defaultProps = {
  fill: '#0C60A2',
  width: 20,
};

export default Arrow;
