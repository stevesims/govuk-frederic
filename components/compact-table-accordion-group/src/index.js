import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Collapse } from 'react-collapse';

import OpenButton from '@govuk-frederic/open-button';

const Container = styled('div')({
  fontFamily: 'Roboto, Arial, sans-serif',
  fontSize: '14px',
  paddingBottom: '10px',
  paddingTop: '10px',
  position: 'relative',
});

const TitleRow = styled('div')({
  display: 'flex',
  marginBottom: '8px',
});

const Title = styled('header')(
  ({ clickable }) => (clickable ? { cursor: 'pointer' } : undefined),
  {
    paddingLeft: '16px',
  },
);

const CompactTableAccordionGroup = ({
  title,
  expanded,
  onChange,
  open,
  changeOnTitleClick,
}) => (
  <Container>
    <TitleRow>
      <OpenButton open={open} onChange={onChange} />
      <Title
        clickable={changeOnTitleClick}
        onClick={
          changeOnTitleClick ? () => onChange({ open: !open }) : undefined
        }
      >
        {title}
      </Title>
    </TitleRow>
    <Collapse isOpened={open}>{expanded}</Collapse>
  </Container>
);

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
