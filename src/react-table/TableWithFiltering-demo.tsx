import React, { useMemo } from "react";
import TableWithFiltering from "./components/TableWithFiltering";
import columnsConfig from "./columns";
import shows from "./shows";

const App = () => {
  const column = useMemo(() => columnsConfig, []);
  const data = useMemo(() => shows, []);
  return <TableWithFiltering columns={column} data={data} />;
};
export default <App />;
