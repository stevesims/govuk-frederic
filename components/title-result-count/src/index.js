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
  marginRight: '10px',
});

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
