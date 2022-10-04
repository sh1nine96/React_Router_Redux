import React from "react";
import { Column, useGlobalFilter, useTable } from "react-table";
import "./Table.css";

type Props = {
  columns: Column<object>[];
  data: any;
};

const TableWithFiltering = ({ columns, data }: Props) => {
  /* Accept state, setGlobalFilter as well, by passing in useGlobalFilter hook as the second argument to useTable
   */
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  /**
   * Extract globalFilter from state
   */

  return (
    <>
      {
        /**
         * Create an controlled input that derives its value from globalFilter
         * Call setGlobalFilter on changes
         */
        <input
          type="search"
          value={state.globalFilter}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setGlobalFilter(event.target.value)
          }
        />
      }
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
    </>
  );
};

export default TableWithFiltering;
