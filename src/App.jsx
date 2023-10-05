import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import UserChart from "./Components/UserChart/UserChart.jsx";
import Report from "./Components/report/Report.jsx";

function App() {
  const routes = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/:page", element: <Dashboard /> },
        { path: "transactions/:id", element: <UserChart /> },
        { path: "/report", element: <Report /> },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
