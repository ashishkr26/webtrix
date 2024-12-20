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
import WebDevelopmentServicePage from "./components/services/WebDevelomentServicePage";
import DigitalMarketingServicePage from "./components/services/DigitalMarketingService";
import UIUXService from "./components/services/UIUXService";

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
        },
        {
          path:"/web-developement-service",
          element:<WebDevelopmentServicePage/>
        },
        {
          path:"/digital-marketing-service",
          element:<DigitalMarketingServicePage/>
        },
        {
          path:"/UI-UX-service",
          element:<UIUXService/>
        },
        
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
