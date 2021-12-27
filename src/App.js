import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import "@material-tailwind/react/tailwind.css";
// Layouts
import LayoutDefault from "./layouts/LayoutDefault";
import LayoutToMain from "./layouts/LayoutToMain";
import AuthLayout from "./layouts/AuthLayout";

// Views
import Posts from "./components/sections/Posts";
import Home from "./views/Home";
import Blog3 from "./views/Blog3";
import AboutUs from "./views/AboutUs";
import GeoTest from "./views/GeoTest";
import ContactUs from "./views/ContactUs";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import TermsOfService from "./views/TermsOfService";
import PrivacyPolicy from "./views/PrivacyPolicy";
import UserInfo from "./views/UserInfo";
import UserProfileView from "./views/UserProfileView";
import BetPage from "./views/BetPage";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute
            exact
            path="/about"
            component={AboutUs}
            layout={LayoutToMain}
           />
           <AppRoute
             exact
             path="/geotest"
             component={GeoTest}
             layout={LayoutToMain}
           />
          <AppRoute
            exact
            path="/contact"
            component={ContactUs}
            layout={LayoutToMain}
          />
          <AppRoute
            exact
            path="/login"
            component={Login}
            layout={LayoutToMain}
          />
          <AppRoute
            exact
            path="/register"
            component={SignUp}
            layout={LayoutToMain}
          />
          <AppRoute
            exact
            path="/tos"
            component={TermsOfService}
            layout={LayoutToMain}
          />
          <AppRoute
            exact
            path="/blog"
            component={Blog3}
            layout={LayoutToMain}
          />
          <AppRoute
            exact
            path="/privacy"
            component={PrivacyPolicy}
            layout={LayoutToMain}
          />
          {/* auth routes */}
          <AppRoute
            exact
            path="/user"
            component={UserProfileView}
            layout={AuthLayout}
          />
          <AppRoute
            exact
            path="/user/data"
            component={UserInfo}
            layout={AuthLayout}
          />
          <AppRoute
            exact
            path="/blog/:id"
            component={Posts}
            layout={AuthLayout}
          />
        </Switch>
      )}
    />
  );
};

export default App;
