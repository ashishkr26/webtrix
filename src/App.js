import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./index.css";
import MainContainer from "./components/MainContainer";
import Services from "./components/Services";
import Faq from "./components/Faq";
import ChatBot from "./components/ChatBot";
import WebtrixSevice from "./components/services/WebtrixSevice";
import QuoteOnDemand from "./components/QuoteOnDemand";
import HomeCarousel from "./components/HomeCarousel";

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
              <ChatBot/>
              <HomeCarousel/>
              <Services />
              <Faq />
            </>
          ),
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path:"/our-services",
          element:<WebtrixSevice/>
        },
        {
          path:"/quote-on-demand",
          element:<QuoteOnDemand/>
        }
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
