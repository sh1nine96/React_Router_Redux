import React from "react";
import { Column, useTable } from "react-table";

/* import Table CSS */
import "./Table.css";

type Props = {
  columns: Column<object>[];
  data: any;
};

/**
 * Define and export TableBasic component that accepts columns of type Column<object>[] and data
 */
const TableBasic = ({ columns, data }: Props) => {
  /**
   * Use the state and functions returned from useTable to build the UI
   *
   * Get getTableProps, getTableBodyProps, headerGroups, rows, prepareRow by calling useTable and pasing columns, data as argument
   */

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  /**
   * Render the UI for the table
   *
   * table: Pass props obtained using getTableProps()
   *
   * head row: Render a row within thead for every headerGroup in headerGroups, passing headerGroup.getHeaderGroupProps() to the row
   *
   * heading cells : Render a heading cell for every header in headerGroup.headers, passing header.getHeaderProps() to the heading cell - the text within the cell is obtained by calling header.render()
   */
  /**
   * table body: Pass props obtained using getTableBodyProps()
   *
   * Iterate through rows and render an array of rows. Make sure to prepareRow passing it row
   *
   * table row: Pass props obtained using row.getRowProps()
   *
   * table cells: Iterate through row.cells and render data cells - pass cell.getCellProps() to a cell - the text within the cell is obtained by calling cell.render( 'Cell' )
   */
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroups) => (
          <tr {...headerGroups.getHeaderGroupProps()}>
            {headerGroups.headers.map((header) => (
              <th {...header.getHeaderProps()}>{header.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableBasic;
