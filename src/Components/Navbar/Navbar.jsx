import avatar from "../../assets/images/avatars/11.png";
export default function Navbar() {
  return (
    <>
      <nav className="bg-indigo-900 fixed z-40 w-full text-white shadow-lg">
        <div className="container w-11/12 mx-auto py-4 flex items-center">
          <h1 className="logo text-2xl">
            <i className="fa-solid fa-comments-dollar"></i> Transactions
          </h1>

          <button className="ms-5">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>

          <ul className="ms-auto flex gap-3">
            <li>
              <a href="">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-bell"></i>{" "}
              </a>
            </li>
          </ul>

          <div className="profile flex items-center gap-4 ms-10">
            <h3>Usama Ali</h3>
            <img src={avatar} className="w-[45px]" alt="Usama Ali profile" />
          </div>
        </div>
      </nav>
    </>
  );
}
