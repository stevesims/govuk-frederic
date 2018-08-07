import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'govuk-frederic';

import { rowsFromArray, titlesFromFields } from '@govuk-frederic/utils';

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * const fields = [
 *   { key: 'one', heading: 'One' },
 *   { key: 'two', heading: 'Two' },
 * ];
 * const array = [
 *   { one: 'test', two: 'test' },
 *   { one: 'test' },
 *   {},
 * ];
 * const title = ['Heading'];
 * 
 * <ArrayObjectTable fields={fields} array={array} title={title}/>;
 * ```
 * 
 * With skipEmptyRows
 * ```jsx
 * const fields = [
 *   { key: 'one', heading: 'One' },
 *   { key: 'two', heading: 'Two' },
 * ];
 * const array = [
 *   {},
 *   {},
 * ];
 * const title = ['Heading'];
 * 
 * <ArrayObjectTable fields={fields} array={array} title={title} skipEmptyRows/>
 * ```
 * 
 * With skipEmptyRows and hideWithNoValues
 * ```jsx
 * const fields = [
 *   { key: 'one', heading: 'One' },
 *   { key: 'two', heading: 'Two' },
 * ];
 * const array = [
 *   {},
 *   {},
 * ];
 * const title = ['Heading'];
 * 
 * <ArrayObjectTable fields={fields} array={array} title={title} skipEmptyRows hideWithNoValues/>;
 * ```
 * */
const ArrayObjectTable = ({ fields, array, hideWithNoValues, skipEmptyRows, title, ...props }) => {
  let rows = rowsFromArray(array, fields, skipEmptyRows);
  if (!rows.length && !hideWithNoValues) {
    rows = rowsFromArray([{}], fields, false);
  }
  return rows.length ?
    <Fragment>
      {title}
      <Table rows={rows} titles={titlesFromFields(fields)} {...props}/>
    </Fragment>
    :
    null;
};

ArrayObjectTable.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    transform: PropTypes.func,
  })),
  array: PropTypes.arrayOf(PropTypes.object),
  hideWithNoValues: PropTypes.bool,
  skipEmptyRows: PropTypes.bool,
  title: PropTypes.node,
};

ArrayObjectTable.defaultProps = {
  fields: [],
  array: [],
  hideWithNoValues: false,
  skipEmptyRows: false,
  title: null,
};

export default ArrayObjectTable;
