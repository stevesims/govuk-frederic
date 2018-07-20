import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

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
  marginLeft: '10px',
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <ResultCountTitle count={3}>Title</ResultCountTitle>
 * ```
 *
 * In black with count value 0
 * ```jsx
 * <ResultCountTitle count={0} countColor="black" countBackgroundColor="#dee0e2">Title</ResultCountTitle>
 * ```
 */
const ResultCountTitle = ({ countBackgroundColor, children, count, countColor, ...props }) => {
  return (
    <Wrapper {...props}>
      <ResultCount backgroundColor={countBackgroundColor} color={countColor}>
        {count}
      </ResultCount>
      <Title>{children}</Title>
    </Wrapper>
  );
};

ResultCountTitle.propTypes = {
  children: PropTypes.node,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  countBackgroundColor: PropTypes.string,
  countColor: PropTypes.string,
};

export default ResultCountTitle;
