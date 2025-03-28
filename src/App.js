import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./index.css";
import MainContainer from "./components/MainContainer";
import Services from "./components/Services";
import Faq from "./components/Faq";
import WebtrixSevice from "./components/services/WebtrixSevice";
import QuoteOnDemand from "./components/QuoteOnDemand";
import HomeCarousel from "./components/HomeCarousel";
import WebDevelopmentServicePage from "./components/services/WebDevelomentServicePage";
import WebManagementServicePage from "./components/services/WebManagementServicePage"
import DigitalMarketingServicePage from "./components/services/DigitalMarketingService";
import UIUXService from "./components/services/UIUXService";
import MobileAppService from "./components/services/MobileAppService";
import { Provider } from "react-redux";
import appStore from "./assets/store/appStore";
import ContactUs from "./components/ContactUs";
import Reviews from "./components/Reviews";
import Pricing from "./components/pages/Pricing";
import Clientele from "./components/pages/Clientele";
import HireDeveloper from "./components/pages/HireDeveloper";
import Login from "./components/Login";

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
              <HomeCarousel />
              <Reviews/>
              {/* <Footer/> */}
            </>
          ),
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Login />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/services",
          element: <WebtrixSevice />,
        },
        {
          path: "/quote-on-demand",
          element: <QuoteOnDemand />,
        },
        {
          path: "/web-developement-service",
          element: <WebDevelopmentServicePage />,
        },
        {
          path: "/web-management-service",
          element: <WebManagementServicePage />,
        },
        {
          path: "/digital-marketing-service",
          element: <DigitalMarketingServicePage />,
        },
        {
          path: "/UI-UX-service",
          element: <UIUXService />,
        },
        {
          path: "/mobile-app-service",
          element: <MobileAppService />,
        },
        {
          path:"/pricing",
          element:<Pricing/>
        },
        {
          path:"/clientele",
          element:<Clientele/>
        },
        {
          path:"/hiredeveloper",
          element:<HireDeveloper/>
        }
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />;
    </Provider>
  );
}

export default App;
