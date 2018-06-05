import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Collapse } from 'react-collapse';

import OpenButton from '../OpenButton';

const Container = glamorous.div({
  paddingBottom: '10px',
  paddingTop: '10px',
  position: 'relative',
});

const TitleRow = glamorous.div({
  display: 'flex',
  marginBottom: '8px',
});

const Title = glamorous.header(({ clickable }) => (
  clickable ? { cursor: 'pointer' } : undefined
), {
  paddingLeft: '16px',
});

const CompactTableAccordionGroup = ({title, expanded, onChange, open, changeOnTitleClick }) => {
  return <Container>
    <TitleRow>
      <OpenButton open={open} onChange={onChange} />
      <Title
        clickable={changeOnTitleClick}
        onClick={changeOnTitleClick ? () => onChange({open: !open}) : undefined}
      >
        {title}
      </Title>
    </TitleRow>
    <Collapse isOpened={open}>{expanded}</Collapse>
  </Container>;
};

CompactTableAccordionGroup.propTypes = {
  changeOnTitleClick: PropTypes.bool,
  expanded: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.node,
};

CompactTableAccordionGroup.defaultProps = {
  changeOnTitleClick: false,
  open: false,
};

export default CompactTableAccordionGroup;

export { Title };
