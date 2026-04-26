import Home from "@/pages/home";
import Messages from "@/pages/messages";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/messages", element: <Messages /> },
]);

export default router;
