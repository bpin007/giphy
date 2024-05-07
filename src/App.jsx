import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/app-layout";
import Home from "./pages/home";
import Category from "./pages/category";
import Search from "./pages/search";
import SingleGif from "./pages/single-gif";
import Favorites from "./pages/favorites";
import GifProvider from "./context/gif-context";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:category",
          element: <Category />,
        },
        {
          path: "/search/:query",
          element: <Search />,
        },
        {
          path: "/:type/:slug",
          element: <SingleGif />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);
  return (
    <>
      <GifProvider>
        <RouterProvider router={router} />
      </GifProvider>
    </>
  );
}

export default App;
