import React, { useMemo } from "react";
import TableWithSorting from "./components/TableWithSorting";
import shows from "./shows";
import columnsConfig from "./columns";

const App = () => {
  const columns = useMemo(() => columnsConfig, []);
  const data = useMemo(() => shows, []);
  return <TableWithSorting columns={columns} data={data} />;
};

export default <App />;
