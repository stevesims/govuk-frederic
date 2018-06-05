import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import ResultCount from '../ResultCount';

const Wrapper = glamorous.div(
  {
    display: 'inline-block',
  },
);

const Title = glamorous.div({
  display: 'inline-block',
  fontSize: '15px',
  lineHeight: '1.25',
  marginLeft: '10px',
});

const ResultCountTitle = ({ countBackgroundColor, children, count, countColor, ...props }) => {
  return <Wrapper {...props}>
    <ResultCount backgroundColor={countBackgroundColor} color={countColor}>
      {count}
    </ResultCount>
    <Title>{children}</Title>
  </Wrapper>;
};

ResultCountTitle.propTypes = {
  children: PropTypes.node,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  countBackgroundColor: PropTypes.string,
  countColor: PropTypes.string,
};

export default ResultCountTitle;
