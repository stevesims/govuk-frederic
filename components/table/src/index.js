import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { NTA_LIGHT } from '@govuk-react/constants';

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

const TableHeading = styled('th', {
  forwardProps: ['name'],
})(({ rowHeading, columnCount }) => ({
  ':first-child': {
    padding: '15px 8px 15px 0',
    width: rowHeading && columnCount < 4 ? '25%' : undefined,
  },
  ':last-child': {
    padding: '15px 0 15px 8px',
  },
  borderBottom: '1px solid #bfc1c3',
  display: 'table-cell',
  fontSize: '14px',
  fontWeight: 'bold',
  textAlign: 'left',
  verticalAlign: 'baseline',
}));

const TableData = styled('td', {
  // use `forwardProps` here as by default emotion doesn't allow setting `name` prop on a `td`
  forwardProps: ['name'],
})({
  ':first-child': {
    padding: '15px 8px 15px 0',
  },
  ':last-child': {
    padding: '15px 0 15px 8px',
  },
  borderBottom: '1px solid #bfc1c3',
  display: 'table-cell',
  fontSize: '14px',
  verticalAlign: 'baseline',
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Table titles={arrayExampleHeadings} rows={arrayExampleContent} names={exampleNames} />
 * ```
 * 
 * rowIncludesHeading
 * ```jsx
 * <Table titles={arrayExampleHeadings} rows={arrayExampleContent} rowIncludesHeading />
 * ```
 * 
 * rowIncludesHeading, no titles
 * ```jsx
 * <Table rows={arrayExampleContent} rowIncludesHeading names={exampleNames} />
 * ```
 * 
 * rowIncludesHeading, no titles, small single row
 * ```jsx
 * <Table rows={[['title', 'value']]} rowIncludesHeading />
 * ```
 * 
 * rowIncludesHeading, with flexible columns
 * ```jsx
 * <Table titles={arrayExampleHeadings} rows={arrayExampleContent} flexibleColumns rowIncludesHeading />
 * ```
 */
const Table = ({ name, names = [], rowIncludesHeading, titles, rows, flexibleColumns }) => (
  <TableContainer name={name} flexibleColumns={flexibleColumns}>
    {titles &&
      titles.length && (
      <thead>
        <tr>
          {titles.map((title, index) => (
            // disable false-positive rule - this is an access into an array of strings, not object access
            // eslint-disable-next-line security/detect-object-injection
            <TableHeading key={title.key || index} name={names[index]}>
              {title}
            </TableHeading>
          ))}
        </tr>
      </thead>
    )}
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          {row.map(
            (item, itemIndex) =>
              rowIncludesHeading && itemIndex === 0 ? (
                <TableHeading rowHeading columnCount={row.length} key={item.key || itemIndex}>
                  {item}
                </TableHeading>
              ) : (
                // disable false-positive rule - this is an access into an array of strings, not object access
                // eslint-disable-next-line security/detect-object-injection
                <TableData key={item.key || itemIndex} name={names[itemIndex]}>
                  {item}
                </TableData>
              ),
          )}
        </tr>
      ))}
    </tbody>
  </TableContainer>
);

Table.propTypes = {
  flexibleColumns: PropTypes.bool,
  name: PropTypes.string,
  names: PropTypes.arrayOf(PropTypes.string),
  rowIncludesHeading: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))).isRequired,
  titles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
};

export default Table;
