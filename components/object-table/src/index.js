import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Table from '@govuk-frederic/table';

import { objectHasValueForKeys, keysFromFields, rowsFromObject } from '@govuk-frederic/utils';

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * const fields = [
 *   { key: 'one', heading: 'One' },
 *   { key: 'two', heading: 'Two' },
 *   { key: 'three', heading: 'Three' },
 *   { key: 'four', heading: 'Four' },
 * ];
 * const object = { one: 'test', two: 'test', three: '', four: null };
 * const title = ['Heading'];
 *
 * <ObjectTable fields={fields} object={object} title={title}/>;
 * ```
 *
 * With skipEmptyValues
 * ```jsx
 * const fields = [
 *   { key: 'one', heading: 'One' },
 *   { key: 'two', heading: 'Two' },
 *   { key: 'three', heading: 'Three' },
 *   { key: 'four', heading: 'Four' },
 * ];
 * const object = { one: 'test', two: 'test', three: '', four: null };
 * const title = ['Heading'];
 *
 * <ObjectTable fields={fields} object={object} title={title} skipEmptyValues={false}/>
 * ```
 *
 * With hideWithNoValues
 * ```jsx
 * const fields = [
 *   { key: 'one', heading: 'One' },
 *   { key: 'two', heading: 'Two' },
 * ];
 * const object = { };
 * const title = ['Heading'];
 *
 * <ObjectTable fields={fields} object={object} title={title} hideWithNoValues />;
 * ```
 */
const ObjectTable = ({
  title,
  fields,
  object,
  hideWithNoValues,
  skipEmptyValues,
  defaultTransform,
  ...props
}) => {
  if (!hideWithNoValues || objectHasValueForKeys(object, keysFromFields(fields))) {
    const rows = rowsFromObject(object, fields, skipEmptyValues, defaultTransform);
    if (rows.rows.length) {
      return <Fragment>
        {title}
        <Table rows={rows.rows} names={rows.names} rowIncludesHeading nameByRow {...props} />
      </Fragment>;
    }
  }

  return null;
};

ObjectTable.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    transform: PropTypes.func,
  })),
  object: PropTypes.object,
  hideWithNoValues: PropTypes.bool,
  skipEmptyValues: PropTypes.bool,
  defaultTransform: PropTypes.func,
  title: PropTypes.node,
};

ObjectTable.defaultProps = {
  fields: [],
  object: {},
  hideWithNoValues: false,
  skipEmptyValues: false,
  title: null,
};

export default ObjectTable;
