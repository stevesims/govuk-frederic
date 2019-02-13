import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ResultCount from '@govuk-frederic/result-count';
import { NTA_LIGHT } from '@govuk-react/constants';

const Wrapper = styled('div')({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

const Title = styled('div')({
  display: 'inline-block',
  fontFamily: NTA_LIGHT,
  fontSize: '15px',
  lineHeight: '1.25',
  marginRight: '10px',
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <TitleResultCount count={3}>
 *  Title Title Title
 * </TitleResultCount>
 * ```
 *
 * Counter title with value 0 and override text and background colour.
 * ```jsx
 * <TitleResultCount count={0} countColor="black" countBackgroundColor="#dee0e2">
 *  Title Title Title
 * </TitleResultCount>
 * ```
 */
const TitleResultCount = ({ countBackgroundColor, children, countColor, count, ...props }) => {
  return <Wrapper {...props}>
    <Title>{children}</Title>
    <ResultCount backgroundColor={countBackgroundColor} color={countColor}>
      {count}
    </ResultCount>
  </Wrapper>;
};

TitleResultCount.propTypes = {
  children: PropTypes.node,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  countBackgroundColor: PropTypes.string,
  countColor: PropTypes.string,
};

export default TitleResultCount;
