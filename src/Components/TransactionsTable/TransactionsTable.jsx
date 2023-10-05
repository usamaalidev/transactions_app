import { useSelector } from "react-redux";
import Filter from "../Filter/Filter.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Report from "../report/Report.jsx";
export default function TransactionsTable() {
  const { transactions } = useSelector(
    (reducers) => reducers.transactionReducer
  );

  const [paginationArr, setPaginationArr] = useState([]);
  const { page = 1 } = useParams();
  const subIndex = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const paginationArr = transactions.reduce((acc, element, index) => {
      const subArrayIndex = Math.trunc(index / subIndex);
      if (!acc[subArrayIndex]) {
        acc[subArrayIndex] = [];
      }
      acc[subArrayIndex].push(element);
      return acc;
    }, []);

    setPaginationArr(paginationArr);
    navigate("/1");
  }, [transactions]);

  return (
    <>
      <div className="ms-40">
        <h2 className="uppercase text-base font-semibold mb-5 text-gray-500 mt-20">
          Transactions List
        </h2>
        <Filter />
        <table className="table-auto rounded-xl w-full bg-white mb-10 shadow-md">
          <thead>
            <tr className="border-b border-slate-300">
              <th className="p-4 text-center">ID Invoice</th>
              <th className="p-4 text-center">Recipient</th>
              <th className="p-4 text-center">Receiver</th>
              <th className="p-4 text-center">Amount</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Date</th>
              <th className="p-4 text-center">report</th>
            </tr>
          </thead>
          <tbody>
            {transactions
              .slice((page - 1) * subIndex, subIndex * page)
              .sort((a, b) => {
                return new Date(a.occuredAt) - new Date(b.occuredAt);
              })
              .map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-slate-300 last:border-0"
                >
                  <td className="p-4 text-center font-semibold">
                    #{transaction.id.split("").slice(0, 6)}.....
                  </td>

                  <td className="p-4 text-center ">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-[40px]"
                        src={transaction.sender.avatarImg}
                        alt={`Profile image for ${transaction.sender.name}`}
                      />
                      <Link to={`/transactions/${transaction.sender._id}`}>
                        {transaction.sender.name}
                      </Link>
                    </div>
                  </td>

                  <td className="p-4 text-center ">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-[40px]"
                        src={transaction.receiver.avatarImg}
                        alt={`Profile image for ${transaction.receiver.name}`}
                      />
                      <Link to={`/transactions/${transaction.receiver._id}`}>
                        {transaction.receiver.name}
                      </Link>
                    </div>
                  </td>

                  <td className="p-4 text-center">
                    {transaction.amount}
                    <span className="font-semibold">$</span>
                  </td>

                  <td className="p-4 text-center">
                    <span
                      className={`inline-block w-full rounded-full border-2 border-slate-300 px-4 py-2 capitalize text-${transaction.status} border-${transaction.status}`}
                    >
                      {transaction.status}
                    </span>
                  </td>

                  <td className="p-4 text-center">{`${new Date(
                    transaction.occuredAt
                  ).toDateString()}, ${new Date(
                    transaction.occuredAt
                  ).toLocaleTimeString()}`}</td>

                  <td className="px-6 py-4 text-center cursor-pointer">
                    <PDFDownloadLink
                      document={<Report data={transaction} />}
                      fileName={`${transaction.id}`}
                    >
                      <i className="fa-solid fa-download"></i>
                    </PDFDownloadLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <ul className="pagination ms-auto w-fit flex gap-3 mb-10">
          {paginationArr.map((arrOfTransactions, index) => {
            return (
              <Link
                className="border-2 hover:text-violet-900 hover:font-bold border-transparent hover:bg-transparent hover:border-violet-900 bg-violet-900 text-white py-1 px-3 rounded-md"
                to={`/${index + 1}`}
                key={index}
                data={arrOfTransactions}
              >
                {index + 1}
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
