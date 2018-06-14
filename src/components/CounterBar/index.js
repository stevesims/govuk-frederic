import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { ResultCountTitle } from '..';

import { BLACK, GREY_1, GREY_3, LINK_COLOUR, RED, WHITE, YELLOW } from 'govuk-colours';

const Container = glamorous.div({
  display: 'flex',
  lineHeight: '1',
});

const CountWrapper = glamorous.button(
  {
    ':focus': {
      outline: `solid 4px ${YELLOW}`,
    },
    alignItems: 'center',
    border: '0',
    display: 'inline-flex',
    flex: '1',
    marginRight: '8px',
    outline: 'none',
    padding: '0',
    position: 'relative',
  },
  ({ active }) => ({
    background: active ? LINK_COLOUR : WHITE,
    color: active ? WHITE : undefined,
    outline: active ? `2px solid ${LINK_COLOUR}` : undefined,
  }),
);

const Counter = glamorous.button(
  {
    ':focus': {
      outline: `solid 4px ${YELLOW}`,
    },
    ':last-child': {
      marginRight: '0',
    },
    alignItems: 'center',
    border: '0',
    color: WHITE,
    display: 'inline-flex',
    flex: '1',
    marginRight: '8px',
    outline: 'none',
    padding: '0',
    position: 'relative',
  },
  ({ active }) => ({
    background: active ? LINK_COLOUR : GREY_1,
    outline: active ? `2px solid ${LINK_COLOUR}` : undefined,
  }),
  ({ empty }) => (
    empty ? { opacity: 0 } : undefined
  )
);

const CounterBar = ({
  activeTitle,
  listTitle,
  counters,
  onSelect,
  ...props
}) => {
  const totalScore = counters
    .reduce((a, b) => (a + (Number(b.score) || 0)), 0);
  return (
    <Container {...props}>
      <CountWrapper
        active={activeTitle}
        disabled={!totalScore}
        onClick={() => onSelect()}
      >
        <ResultCountTitle
          count={totalScore}
          countColor={totalScore > 0 ? WHITE : BLACK}
          countBackgroundColor={totalScore > 0 ? RED : GREY_3}
        >
          {listTitle}
        </ResultCountTitle>
      </CountWrapper>
      {counters.map(counter => (
        <Counter
          active={counter.active}
          disabled={!counter.score}
          key={counter.id}
          name={counter.id}
          onClick={() => onSelect(counter.id)}
          empty={!counter.name || counter.name.length === 0}
        >
          <ResultCountTitle
            countColor={counter.score > 0 ? WHITE : BLACK}
            countBackgroundColor={counter.score > 0 ? RED : GREY_3}
            count={counter.score || 0}
          >
            {counter.name}
          </ResultCountTitle>
        </Counter>
      ))
      }
    </Container>
  );
};

CounterBar.propTypes = {
  activeTitle: PropTypes.bool,
  counters: PropTypes.arrayOf(PropTypes.shape({
    active: PropTypes.bool,
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number,
  })),
  listTitle: PropTypes.any,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

CounterBar.defaultProps = {
  onSelect: () => {},
};

export default CounterBar;
export { CountWrapper, Counter };
