import React from 'react';
import PropTypes from 'prop-types';

import styled from 'react-emotion';
import { NTA_LIGHT } from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

const TableContainer = styled('table', {
  // use `forwardProps` here as by default emotion doesn't allow setting `name` prop on a `table`
  forwardProps: ['name'],
})(
  {
    display: 'table',
    fontFamily: NTA_LIGHT,
    width: '100%',
  },
  ({ flexibleColumns }) => ({ tableLayout: flexibleColumns ? 'auto' : 'fixed' }),
);

const cellStyles = {
  ':first-child': {
    padding: '15px 4px 15px 0',
  },
  ':last-child': {
    padding: '15px 0 15px 4px',
  },
  borderBottom: '1px solid #bfc1c3',
  display: 'table-cell',
  fontSize: '14px',
  padding: '15px 4px',
  verticalAlign: 'top',
};

const TableData = styled('td', {
  // use `forwardProps` here as by default emotion doesn't allow setting `name` prop on a `td`
  forwardProps: ['name'],
})(cellStyles);

const TableHeading = styled('th')(
  cellStyles,
  ({ rowHeading, columnCount }) => (
    {
      fontWeight: 'bold',
      textAlign: 'left',
      width: rowHeading && columnCount < 4 ? '25%' : undefined,
    }
  ),
);

const getName = (names, row, column, nameByRow) => {
  if (nameByRow) {
    return Array.isArray(names[row]) ? names[row][column] : names[row];
  }
  return Array.isArray(names[column]) ? names[column][row] : names[column];
};

const calculateIndex = (titles, nameByRow, index) => {
  if (nameByRow) {
    // Only if there are headings at the top, we need to increment the row
    return (titles && titles.length) ? (index + 1) : index;
  }
  return (index + 1);
};

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * const arrayExampleHeadings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
 * const arrayExampleContent = [
 *  ['Content 1-1', 'Content 1-2', 'Content 1-3', 'Content 1-4'],
 *  ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
 *  ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
 * ];
 * const columnTableNames = ['one', 'two', 'three', ['i', 'am', 'named', 'individually']];
 *
 * <Table titles={arrayExampleHeadings} rows={arrayExampleContent} names={columnTableNames} />
 * ```
 *
 * rowIncludesHeading
 * ```jsx
 * const arrayExampleHeadings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
 * const arrayExampleContent = [
 *  ['Content 1-1', 'Content 1-2', 'Content 1-3', 'Content 1-4'],
 *  ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
 *  ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
 * ];
 * const rowTableNamesWithTitles = [
 *  'heading',
 *  'one',
 *  ['i', 'am', 'named', 'individually'],
 *  'three'
 * ];
 *
 * <Table
 *  titles={arrayExampleHeadings}
 *  rows={arrayExampleContent}
 *  rowIncludesHeading
 *  nameByRow
 *  names={rowTableNamesWithTitles}
 * />
 * ```
 *
 * rowIncludesHeading, no titles
 * ```jsx
 * const arrayExampleHeadings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
 * const arrayExampleContent = [
 *  ['Content 1-1', 'Content 1-2', 'Content 1-3', 'Content 1-4'],
 *  ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
 *  ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
 * ];
 * const rowTableNames = ['one', ['i', 'am', 'named', 'individually'], 'three'];
 *
 * <Table rows={arrayExampleContent} rowIncludesHeading nameByRow names={rowTableNames} />
 * ```
 *
 * rowIncludesHeading, no titles, small single row
 * ```jsx
 * const arrayExampleHeadings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
 * const arrayExampleContent = [
 *  ['Content 1-1', 'Content 1-2', 'Content 1-3', 'Content 1-4'],
 *  ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
 *  ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
 * ];
 * const rowTableNames = ['one', ['i', 'am', 'named', 'individually'], 'three'];
 *
 * <Table rows={[['title', 'value']]} rowIncludesHeading nameByRow names={rowTableNames} />
 * ```
 *
 * rowIncludesHeading, with titles, with flexible columns
 * ```jsx
 * const arrayExampleHeadings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
 * const arrayExampleContent = [
 *  ['Content 1-1', 'Content 1-2', 'Content 1-3', 'Content 1-4'],
 *  ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
 *  ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
 * ];
 * const rowTableNamesWithTitles = [
 *  'heading',
 *  'one',
 *  ['i', 'am', 'named', 'individually'],
 *  'three'
 * ];
 *
 * <Table
 *  titles={arrayExampleHeadings}
 *  rows={arrayExampleContent}
 *  flexibleColumns
 *  rowIncludesHeading
 *  nameByRow names={rowTableNamesWithTitles}
 * />
 * ```
 */
const Table = ({
 name, names, nameByRow, rowIncludesHeading, titles, rows, ...props 
}) => (
  <TableContainer name={name} {...props}>
    {titles &&
      titles.length && (
      <thead>
        <tr>
          {titles.map((title, index) => (
            // disable false-positive rule -
            // this is an access into an array of strings, not object access
            // eslint-disable-next-line security/detect-object-injection
            <TableHeading
              key={title.key || index}
              name={getName(names, 0, index, nameByRow)}>
              {title}
            </TableHeading>
          ))}
        </tr>
      </thead>
    )}
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          {row.map((item, itemIndex) =>
              (rowIncludesHeading && itemIndex === 0 ? (
                <TableHeading
                  rowHeading
                  columnCount={row.length}
                  key={item.key || itemIndex}
                  name={getName(
                    names,
                    calculateIndex(titles, nameByRow, index), itemIndex, nameByRow,
                  )}>
                  {item}
                </TableHeading>
              ) : (
                // disable false-positive rule -
                // this is an access into an array of strings, not object access
                // eslint-disable-next-line security/detect-object-injection
                <TableData
                  key={item.key || itemIndex}
                  name={getName(
                    names,
                    calculateIndex(titles, nameByRow, index), itemIndex, nameByRow,
                  )}>
                  {item}
                </TableData>
              )))}
        </tr>
      ))}
    </tbody>
  </TableContainer>
);

Table.propTypes = {
  flexibleColumns: PropTypes.bool,
  name: PropTypes.string,
  names: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ])),
  nameByRow: PropTypes.bool,
  rowIncludesHeading: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string,
    PropTypes.node,
  ]))).isRequired,
  titles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
};

Table.defaultProps = {
  flexibleColumns: false,
  nameByRow: false,
  names: [],
  rowIncludesHeading: false,
  titles: null,
};

export default withWhiteSpace({ marginBottom: 3 })(Table);
