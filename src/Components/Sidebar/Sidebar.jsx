import { NavLink, useParams } from "react-router-dom";

export default function Sidebar() {
  const { page = 1, id = "654223199109142856" } = useParams();
  return (
    <>
      <aside className="shadow-xl w-40 h-screen fixed top-[77px] bg-white z-30">
        <ul className="w-full">
          <li className="w-full">
            <NavLink
              to={`/${page}`}
              className="flex flex-col gap-2 text-center uppercase font-bold hover:bg-indigo-900 hover:text-white w-full py-10"
            >
              <i className="fa-solid fa-gauge-high text-3xl"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to={`/transactions/${id}`}
              className="flex flex-col gap-2 text-center uppercase font-bold hover:bg-indigo-900 hover:text-white w-full py-10"
            >
              <i className="fa-solid fa-repeat text-3xl"></i>
              <span>Transactions</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}
