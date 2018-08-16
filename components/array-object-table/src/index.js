import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Table from '@govuk-frederic/table';
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
 *
 * With object transform and default transform
 * ```jsx
 * const fields = [
 *   { key: 'one', heading: 'One' },
 *   { key: 'two', heading: 'Two', transform: value => value ? value.toLowerCase() : '' },
 *   { key: 'three', heading: 'Three' },
 *   { key: 'three', heading: 'Four', transform: value => value ? value.toLowerCase() : '*' },
 * ];
 * const array = [
 *   {one: 'One', two: 'Two'},
 * ];
 * const title = ['Heading'];
 * const defaultTransform = value => (value || '-');
 *
 * <ArrayObjectTable
 *  fields={fields}
 *  array={array}
 *  title={title}
 *  skipEmptyRows
 *  hideWithNoValues
 *  defaultTransform={defaultTransform}
 * />
 * ```
 * */
const ArrayObjectTable = ({
  fields,
  array,
  hideWithNoValues,
  skipEmptyRows,
  title,
  defaultTransform,
  ...props
}) => {
  let rows = rowsFromArray(array, fields, skipEmptyRows, defaultTransform);
  if (!rows.length && !hideWithNoValues) {
    rows = rowsFromArray([{}], fields, false, defaultTransform);
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
  })).isRequired,
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  hideWithNoValues: PropTypes.bool,
  skipEmptyRows: PropTypes.bool,
  defaultTransform: PropTypes.func,
  title: PropTypes.node,
};

ArrayObjectTable.defaultProps = {
  hideWithNoValues: false,
  skipEmptyRows: false,
  defaultTransform: value => (value || '-'), /* "||" breaks api-docs formatting! */
  title: null,
};

export default ArrayObjectTable;
