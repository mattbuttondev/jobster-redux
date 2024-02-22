import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, Error, Register } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <Stats /> },
      { path: "all-jobs", element: <AllJobs /> },
      { path: "add-job", element: <AddJob /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  { path: "landing", element: <Landing /> },
  { path: "register", element: <Register /> },
  { path: "*", element: <Error /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;
