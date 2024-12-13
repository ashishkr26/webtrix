import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./index.css";
import MainContainer from "./components/MainContainer";
import Services from "./components/Services";
import Faq from "./components/Faq";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: (
            <>
              <MainContainer />
              <Services />
              <Faq />
            </>
          ),
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
