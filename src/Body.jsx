import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
