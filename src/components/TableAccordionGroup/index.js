import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Collapse } from 'react-collapse';
import { FONT_SIZE, LINE_HEIGHT } from '@govuk-react/constants';

import OpenButton from '../OpenButton';

const Container = glamorous.div({
  display: 'flex',
  fontFamily: 'Roboto, Arial, sans-serif',
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: '1.75',
  paddingBottom: '10px',
  paddingTop: '10px',
  position: 'relative',
});

const Title = glamorous.header(({ clickable }) => (clickable ? { cursor: 'pointer' } : undefined), {
  paddingLeft: '16px',
});

const Items = glamorous.div({});
const FirstItem = glamorous.div({});

const TableAccordianGroup = ({ title, children, expanded, onChange, open, changeOnTitleClick }) => {
  return (
    <Container>
      <OpenButton open={open} onChange={onChange} />
      <Title clickable={changeOnTitleClick} onClick={changeOnTitleClick && (() => onChange({ open: !open }))}>
        {title}
      </Title>
      <Items>
        <FirstItem>{children}</FirstItem>
        <Collapse isOpened={open}>{expanded}</Collapse>
      </Items>
    </Container>
  );
};

TableAccordianGroup.propTypes = {
  changeOnTitleClick: PropTypes.bool,
  children: PropTypes.node.isRequired,
  expanded: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.node,
};

TableAccordianGroup.defaultProps = {
  changeOnTitleClick: false,
  open: false,
};

export default TableAccordianGroup;

export { Title };
