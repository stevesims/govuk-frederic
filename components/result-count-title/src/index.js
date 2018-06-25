import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import ResultCount from '@govuk-frederic/result-count';

const Wrapper = styled('div')({
  display: 'inline-block',
});

const Title = styled('div')({
  display: 'inline-block',
  fontFamily: 'Roboto, Arial, sans-serif',
  fontSize: '15px',
  lineHeight: '1.25',
  marginLeft: '10px',
});

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
