import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Collapse } from 'react-collapse';
import { FONT_SIZE, NTA_LIGHT } from '@govuk-react/constants';

import OpenButton from '@govuk-frederic/open-button';

const Container = styled('div')({
  display: 'flex',
  fontFamily: NTA_LIGHT,
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: '1.75',
  paddingBottom: '10px',
  paddingTop: '10px',
  position: 'relative',
});

const Title = styled('header')(({ clickable }) => (clickable ? { cursor: 'pointer' } : undefined), {
  paddingLeft: '16px',
});

/**
 * 
 * ### Usage
 * 
 * State managed with children
 * ```jsx
 * import manageState from 'manage-state';
 * 
 * const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
 *   propsToState: ['open'],
 * });
 * 
 * <ManagedTableAccordionGroup title="Title" expanded="expanded">
 *   Children
 * </ManagedTableAccordionGroup>
 * ```
 * 
 * State managed without children
 * ```jsx
 * import manageState from 'manage-state';
 * 
 * const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
 *   propsToState: ['open'],
 * });
 * 
 * <ManagedTableAccordionGroup title="Title" expanded="expanded"/>
 * ```
 * 
 * Toggle open on title click with 'changeOnTitleClick' prop
 * ```jsx
 * import manageState from 'manage-state';
 * 
 * const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
 *   propsToState: ['open'],
 * });
 * 
 * <ManagedTableAccordionGroup changeOnTitleClick title="Title" expanded="expanded">
 *   Children
 * </ManagedTableAccordionGroup>
 * ```
 * 
 * Array
 * ```jsx
 * import manageState from 'manage-state';
 * 
 * const arrayExampleItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
 * 
 * const ManagedTableAccordionGroup = manageState(TableAccordionGroup, {
 *   propsToState: ['open'],
 * });
 * 
 * 
 * <ManagedTableAccordionGroup
 *   expanded={
 *   arrayExampleItems.map((item, index) => {
 *     if (index) {
 *       return <div>{item}</div>;
 *     }
 *     return null;
 *   })}
 * >
 *   {arrayExampleItems[0]}
 * </ManagedTableAccordionGroup>
 * ```
 *
 * ### TODO:
 * - Implement Async story example in CodeSandbox
 */
const TableAccordionGroup = ({ title, children, expanded, onChange, open, changeOnTitleClick, ...props }) => {
  return (
    <Container {...props}>
      <OpenButton open={open} onChange={onChange} />
      <Title clickable={changeOnTitleClick} onClick={changeOnTitleClick ? () => onChange({ open: !open }) : undefined }>
        {title}
      </Title>
      <div>
        <div>{children}</div>
        <Collapse isOpened={open}>{expanded}</Collapse>
      </div>
    </Container>
  );
};

TableAccordionGroup.propTypes = {
  changeOnTitleClick: PropTypes.bool,
  children: PropTypes.node,
  expanded: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.node,
};

TableAccordionGroup.defaultProps = {
  changeOnTitleClick: false,
  children: undefined,
  open: false,
};

export default TableAccordionGroup;

export { Title };
