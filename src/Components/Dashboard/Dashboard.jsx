import SummaryChart from "../SummaryChart/SummaryChart.jsx";
import TransactionsTable from "../TransactionsTable/TransactionsTable.jsx";

export default function Dashboard() {
  return (
    <>
      <div className="container w-11/12 mx-auto">
        <SummaryChart />
        <TransactionsTable />
      </div>
    </>
  );
}
