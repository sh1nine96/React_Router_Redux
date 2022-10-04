import { useMemo } from "react";
import columns from "./columns";
import TableBasic from "./components/TableBasic";
import shows from "./shows";

const App = () => {
  const columnsConfig = useMemo(() => columns, []);
  const data = useMemo(() => shows, []);
  return <TableBasic columns={columnsConfig} data={data} />;
};

export default <App />;
