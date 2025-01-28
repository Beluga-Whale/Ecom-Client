import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Layout from "./layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
