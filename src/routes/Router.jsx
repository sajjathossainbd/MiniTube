import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import VideoPage from "../pages/VideoPage";

const router = createBrowserRouter([
  {
    path: "/",
    component: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/videos/:videoId",
        element: <VideoPage />,
      },
    ],
  },
]);

export default router;
