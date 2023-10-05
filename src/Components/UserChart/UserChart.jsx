import { useParams } from "react-router-dom";
import UserBarChart from "../BarChart/BarChart.jsx";
import * as transactionsByUser from "../../getUserTransactions.json";

export default function UserChart() {
  const { data } = transactionsByUser;
  const { id } = useParams();
  const result = data.find((user) => user.id == id);
  return (
    <>
      <div className="mt-32 ms-52">
        <div className="flex gap-3 items-center">
          <img src={result.avatar} className="w-[100px]" />
          <div>
            <h2 className="text-2xl font-semibold">{result.name}</h2>
            <h3>Total Amount: {result.total_amount} $</h3>
          </div>
        </div>
        <UserBarChart id={id} result={result} />
      </div>
    </>
  );
}
