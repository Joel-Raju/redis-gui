import React from 'react';
import { useTable } from 'react-table';
import styles from './ResultViewer.css';

import data from './data.json';

const columns = [
  { Header: 'Key', accessor: 'key' },
  { Header: 'Value', accessor: 'value' },
  { Header: 'Type', accessor: 'type' }
];

const ResultViewer = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  const renderResultTable = () => (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return <div className={styles.wrapper}>{renderResultTable()}</div>;
};

export default ResultViewer;
