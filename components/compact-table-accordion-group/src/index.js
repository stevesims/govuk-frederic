import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Collapse } from 'react-collapse';
import { NTA_LIGHT } from '@govuk-react/constants';

import OpenButton from '@govuk-frederic/open-button';

const Container = styled('div')({
  fontFamily: NTA_LIGHT,
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

/**
 * 
 * ### Usage
 * 
 * State managed with children
 * ```jsx
 * import manageState from 'manage-state';
 * 
 * const ManagedCompactTableAccordionGroup = manageState(CompactTableAccordionGroup, {
 *   propsToState: ['open'],
 * });
 * 
 * <ManagedCompactTableAccordionGroup title="Title" expanded="expanded">
 *   Children
 * </ManagedCompactTableAccordionGroup>
 * ```
 * 
 * State managed without children
 * ```jsx
 * import manageState from 'manage-state';
 * 
 * const ManagedCompactTableAccordionGroup = manageState(CompactTableAccordionGroup, {
 *   propsToState: ['open'],
 * });
 * 
 * <ManagedCompactTableAccordionGroup title="Title" expanded="expanded"/>
 * ```
 * 
 * Toggle open on title click with 'changeOnTitleClick' prop
 * ```jsx
 * import manageState from 'manage-state';
 * 
 * const ManagedCompactTableAccordionGroup = manageState(CompactTableAccordionGroup, {
 *   propsToState: ['open'],
 * });
 * 
 * <ManagedCompactTableAccordionGroup changeOnTitleClick title="Title" expanded="expanded">
 *   Children
 * </ManagedCompactTableAccordionGroup>
 * ```
 * 
 * Array
 * ```jsx
 * import manageState from 'manage-state';
 * 
 * const arrayExampleItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
 * 
 * const ManagedCompactTableAccordionGroup = manageState(CompactTableAccordionGroup, {
 *   propsToState: ['open'],
 * });
 * 
 * 
 * <ManagedCompactTableAccordionGroup
 *   expanded={
 *   arrayExampleItems.map((item, index) => {
 *     if (index) {
 *       return <div>{item}</div>;
 *     }
 *     return null;
 *   })}
 * >
 *   {arrayExampleItems[0]}
 * </ManagedCompactTableAccordionGroup>
 * ```
 *
 * ### TODO:
 * - Implement Async story example in CodeSandbox
 */
const CompactTableAccordionGroup = ({
  title,
  children,
  expanded,
  onChange,
  open,
  changeOnTitleClick,
  ...props
}) => (
  <Container {...props}>
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
      <div>
        <div>{ children }</div>  
      </div>
    </TitleRow>
    <Collapse isOpened={open}>{expanded}</Collapse>
  </Container>
  );

CompactTableAccordionGroup.propTypes = {
  changeOnTitleClick: PropTypes.bool,
  children: PropTypes.node,
  expanded: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.node,
};

CompactTableAccordionGroup.defaultProps = {
  changeOnTitleClick: false,
  children: undefined,
  open: false,
};

export default CompactTableAccordionGroup;

export { Title };
