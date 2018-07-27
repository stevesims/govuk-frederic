import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import ResultCountTitle from '@govuk-frederic/result-count-title';

import { BLACK, GREY_1, GREY_3, LINK_COLOUR, RED, WHITE, YELLOW } from 'govuk-colours';

const OuterWrapper = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  lineHeight: '1',
});

const TotalWrapper = styled('a', {
  shouldForwardProp: prop => ['active', 'empty'].indexOf(prop) === -1,
})(
  {
    color: LINK_COLOUR,
    border: '0',
    flex: '1',
    margin: '0 6px 6px 0',
    outline: 'none',
    padding: '0 8px 0 0',
    textDecoration: 'none',
    ':visited': {
      color: LINK_COLOUR,
    },
  },
  ({ active }) => {
    if (!active) {
      return false;
    }
    return ({
      background: LINK_COLOUR,
      color: WHITE,
      outline: `2px solid ${LINK_COLOUR}`,
    });
  },
  ({ to, href }) => {
    const isLink = to || href;
    if (!isLink) {
      return false;
    }
    return ({
      ':focus': {
        color: BLACK,
        outline: `solid 4px ${YELLOW}`,
      },
      ':hover, :active': {
        color: BLACK,
      },
    });
  },
);

const CountersWrapper = styled('div')({
  alignItems: 'flex-start',
  display: 'flex',
  marginRight: '-6px',
  flex: '1',
  flexWrap: 'wrap',
});

const CounterWrapper = styled(TotalWrapper, {
  shouldForwardProp: prop => ['active', 'empty'].indexOf(prop) === -1,
})(
  {
    color: WHITE,
  },
  ({ active }) => ({
    background: active ? LINK_COLOUR : GREY_1,
  }),
  ({ to, href }) => {
    const isLink = to || href;
    if (!isLink) {
      return false;
    }
    return ({
      ':visited': {
        color: WHITE,
      },
      ':focus, :hover, :active': {
        color: BLACK,
      },
    });
  },
  ({ empty }) => (empty ? { opacity: 0 } : undefined),
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={15}>All counters</CounterBar.Total>
 *   <CounterBar.Counters>
 *     <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
 *     <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
 *     <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
 *     <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
 *     <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
 *   </CounterBar.Counters>
 * </CounterBar>
 * ```
 * Active counter
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={15}>All counters</CounterBar.Total>
 *   <CounterBar.Counters>
 *     <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
 *     <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
 *     <CounterBar.Counter score={3} active>Counter 3</CounterBar.Counter>
 *     <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
 *     <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
 *   </CounterBar.Counters>
 * </CounterBar>
 * ```
 * Active total
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={15} active>All counters</CounterBar.Total>
 *   <CounterBar.Counters>
 *     <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
 *     <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
 *     <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
 *     <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
 *     <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
 *   </CounterBar.Counters>
 * </CounterBar>
 * ```
 * Empty counters
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={7}>All counters</CounterBar.Total>
 *   <CounterBar.Counters>
 *     <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
 *     <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
 *     <CounterBar.Counter />
 *     <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
 *     <CounterBar.Counter />
 *   </CounterBar.Counters>
 * </CounterBar>
 * ```
 * CounterBar with padded counters container
 * ```jsx
 * <div style={{padding: '4px'}}>
 *   <CounterBar>
 *     <CounterBar.Total score={15}>All counters</CounterBar.Total>
 *     <CounterBar.Counters>
 *       <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
 *       <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
 *       <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
 *       <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
 *       <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
 *     </CounterBar.Counters>
 *   </CounterBar>
 * </div>
 * ```
 * Zero/no scores
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={9}>All counters</CounterBar.Total>
 *   <CounterBar.Counters>
 *     <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
 *     <CounterBar.Counter score={0}>Counter 2</CounterBar.Counter>
 *     <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
 *     <CounterBar.Counter>Counter 4</CounterBar.Counter>
 *     <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
 *   </CounterBar.Counters>
 * </CounterBar>
 * ```
 * Custom colours on total
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={15} scoreColor="yellow" scoreBackgroundColor="pink">All counters</CounterBar.Total>
 *   <CounterBar.Counters>
 *     <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
 *     <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
 *     <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
 *     <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
 *     <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
 *   </CounterBar.Counters>
 * </CounterBar>
 * ```
 * Custom colours on counters
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={15}>All counters</CounterBar.Total>
 *   <CounterBar.Counters>
 *     <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
 *     <CounterBar.Counter score={2} scoreColor="orange" scoreBackgroundColor="blue">Counter 2</CounterBar.Counter>
 *     <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
 *     <CounterBar.Counter score={4} scoreColor="yellow" scoreBackgroundColor="purple">Counter 4</CounterBar.Counter>
 *     <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
 *   </CounterBar.Counters>
 * </CounterBar>
 * ```
 * Use any HTML element string for the total
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={15} component="aside">All counters</CounterBar.Total>
 *   <CounterBar.Counters>
 *     <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
 *     <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
 *     <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
 *     <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
 *     <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
 *   </CounterBar.Counters>
 * </CounterBar>
 * ```
 * Use a Link component for the total
 * ```jsx
 * import { HashRouter, Link } from 'react-router-dom';
 *
 * <HashRouter>
 *   <CounterBar>
 *     <CounterBar.Total score={15} component={Link} to="/courses?sort=name'/">All counters</CounterBar.Total>
 *     <CounterBar.Counters>
 *       <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
 *       <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
 *       <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
 *       <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
 *       <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
 *     </CounterBar.Counters>
 *   </CounterBar>
 * </HashRouter>
 * ```
 * Use any HTML element string for a counter
 * ```jsx
 * <CounterBar>
 *   <CounterBar.Total score={15}>All counters</CounterBar.Total>
 *   <CounterBar.Counters>
 *     <CounterBar.Counter score={1} component="nav">Counter 1</CounterBar.Counter>
 *     <CounterBar.Counter score={2} component="aside">Counter 2</CounterBar.Counter>
 *     <CounterBar.Counter score={3} component="div">Counter 3</CounterBar.Counter>
 *     <CounterBar.Counter score={4} component="section">Counter 4</CounterBar.Counter>
 *     <CounterBar.Counter score={5} component="span">Counter 5</CounterBar.Counter>
 *   </CounterBar.Counters>
 * </CounterBar>
 * ```
 * Use a Link component for a counter
 * ```jsx
 * import { HashRouter, Link } from 'react-router-dom';
 *
 * <HashRouter>
 *   <CounterBar>
 *     <CounterBar.Total score={15}>All counters</CounterBar.Total>
 *     <CounterBar.Counters>
 *       <CounterBar.Counter score={1} component={Link} to="/courses/1/">Counter 1</CounterBar.Counter>
 *       <CounterBar.Counter score={2}>Counter 2</CounterBar.Counter>
 *       <CounterBar.Counter score={3}>Counter 3</CounterBar.Counter>
 *       <CounterBar.Counter score={4}>Counter 4</CounterBar.Counter>
 *       <CounterBar.Counter score={5}>Counter 5</CounterBar.Counter>
 *     </CounterBar.Counters>
 *   </CounterBar>
 * </HashRouter>
 * ```
 */
const CounterBar = props => <OuterWrapper {...props}/>;

CounterBar.propTypes = {
  children: PropTypes.node.isRequired,
};

CounterBar.Item = ({
  children,
  component,
  score,
  scoreColor,
  scoreDisabledColor,
  scoreBackgroundColor,
  scoreDisabledBackgroundColor,
  wrapper,
  ...props
}) => {
  const Wrapper = wrapper.withComponent(component);
  return (
    <Wrapper disabled={!score} empty={!children || children.length === 0} {...props}>
      <ResultCountTitle
        count={score}
        countColor={score > 0 ? scoreColor : scoreDisabledColor}
        countBackgroundColor={score > 0 ? scoreBackgroundColor : scoreDisabledBackgroundColor}
        >
        {children}
      </ResultCountTitle>
    </Wrapper>
  );
};
CounterBar.Item.displayName = 'Item';

CounterBar.Total = props => (<CounterBar.Item wrapper={TotalWrapper} {...props} />);
CounterBar.Total.displayName = 'Total';
CounterBar.Counter = props => (<CounterBar.Item wrapper={CounterWrapper} {...props} />);
CounterBar.Counter.displayName = 'Counter';

const sharedPropTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  empty: PropTypes.bool,
  score: PropTypes.number,
  scoreColor: PropTypes.string,
  scoreDisabledColor: PropTypes.string,
  scoreBackgroundColor: PropTypes.string,
  scoreDisabledBackgroundColor: PropTypes.string,
  wrapper: PropTypes.func,
};

CounterBar.Item.propTypes = sharedPropTypes;
CounterBar.Total.propTypes = sharedPropTypes;
CounterBar.Counter.propTypes = sharedPropTypes;

const sharedDefaultProps = {
  component: 'a',
  score: 0,
  scoreColor: WHITE,
  scoreDisabledColor: BLACK,
  scoreBackgroundColor: RED,
  scoreDisabledBackgroundColor: GREY_3,
};

CounterBar.Item.defaultProps = sharedDefaultProps;
CounterBar.Total.defaultProps = sharedDefaultProps;
CounterBar.Counter.defaultProps = sharedDefaultProps;

CounterBar.Counters = CountersWrapper;
CounterBar.Counters.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CounterBar;
