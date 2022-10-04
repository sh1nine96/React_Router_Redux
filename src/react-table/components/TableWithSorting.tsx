import React from "react";
import { Column, useSortBy, useTable } from "react-table";
import "./Table.css";

type Props = {
  columns: Column<object>[];
  data: any;
};

const TableWithSorting = ({ columns, data }: Props) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroups) => (
          <tr {...headerGroups.getHeaderGroupProps()}>
            {headerGroups.headers.map((column) => (
              /**
               * Pass in column.getSortByToggleProps() to getHeaderProps
               */
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {
                    /**
                     * Use column.isSorted and column.isSortedDesc to show &darr; or &uarr; (or nothing) as indicator
                     */
                    column.isSorted ? (
                      column.isSortedDesc ? (
                        <span>&darr;</span>
                      ) : (
                        <span>&uarr;</span>
                      )
                    ) : (
                      <span></span>
                    )
                  }
                </span>
              </th>
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

export default TableWithSorting;
