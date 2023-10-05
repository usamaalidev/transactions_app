import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import * as transactionsData from "../../transactionsPerDay.json";

const { days } = transactionsData;

export default function SummaryChart() {
  return (
    <>
      <div className="mt-36 mx-auto w-fit ">
        <h2 className="text-xl font-semibold mb-3">Total Summary</h2>
        <AreaChart
          width={900}
          height={400}
          data={days}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
    </>
  );
}
