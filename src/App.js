import React, { useEffect, useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Router,
  Redirect
} from "react-router-dom";
import { FormattedMessage, IntlProvider } from "react-intl";
import { createBrowserHistory } from "history";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// Global Style
import "./App.scss";
import "moment/locale/ne";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import PostalRates from "./pages/PostalRates/PostalRates";
import Activities from "./pages/Activities/Activities";
import Notice from "./pages/Notice/Notice";
import PressRelease from "./pages/PressRelease/PressRelease";
import News from "./pages/News/News";
import Tender from "./pages/Tender/Tender";
import Circular from "./pages/Circular/Circular";
import ActRegulation from "./pages/ActRegulation/ActRegulation";
import PolicyProgram from "./pages/PolicyProgram/PolicyProgram";
import AboutUs from "./pages/AboutUs/AboutUs";
import UnderneathOrg from "./pages/UnderneathOrg/UnderneathOrg";
import StaffDetails from "./pages/StaffDetails/StaffDetails";
import CitizenCharter from "./pages/CitizenCharter/CitizenCharter";
import MailService from "./pages/Services/MailService";
import Savings from "./pages/Services/SavingsBank";
import ParcelService from "./pages/Services/ParcelService";
import Publication from "./pages/Publication/Publication";
import Gallery from "./pages/Gallery/Gallery";
import ScrollToTop from "./utils/ScrollToTop";
import keys from "./keys";
import messages from "./i18n/index";
import AdminRedirection from "./components/AdminRedirection/AdminRedirection";
// Appollo client helps to
const client = new ApolloClient({
  uri: "https://salyan.postalservice.gov.np/admin/graphql"
});

const history = createBrowserHistory();
const App = () => {
  const [engLang, setEngLang] = useState(true);
  const [toggleEye, setToggleEye] = useState(false);
  useEffect(() => {
    console.log(toggleEye);
    toggleEye
      ? (document.getElementById("body-baby").className = "eye-theme")
      : (document.getElementById("body-baby").className = "");
  }, [toggleEye]);

  return (
    <ApolloProvider client={client}>
      <IntlProvider
        locale={engLang ? "en" : "ne"}
        messages={messages[engLang ? "en" : "ne"]}
      >
        <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
          <Header
            history={history}
            setEngLangUI={setEngLang}
            engLangUI={engLang}
            toggleEye={toggleEye}
            setToggleEye={setToggleEye}
          />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              {/**  Basic Routes */}
              <Route exact path="/home" component={Home} />

              <Route
                exact
                path="/department/aboutus"
                component={() => <AboutUs engLang={engLang} />}
              />
              <Route
                exact
                path="/department/underneath-org"
                component={() => <UnderneathOrg engLang={engLang} />}
              />
              <Route exact path="/department/staffs" component={StaffDetails} />
              <Route
                exact
                path="/department/citizen-charter"
                component={CitizenCharter}
              />

              <Route exact path="/act-regulations" component={ActRegulation} />
              <Route exact path="/policy-program" component={PolicyProgram} />

              <Route exact path="/media/notice" component={Notice} />
              <Route
                exact
                path="/media/press-release"
                component={PressRelease}
              />
              <Route exact path="/media/news" component={News} />
              <Route exact path="/media/tender" component={Tender} />
              <Route exact path="/media/circular" component={Circular} />

              <Route exact path="/activities" component={Activities} />
              <Route exact path="/postal-rates" component={PostalRates} />
              <Route exact path="/contact-us" component={ContactUs} />

              {/**  Service Routes */}

              <Route
                exact
                path="/services/mail-service"
                component={MailService}
              />
              <Route exact path="/services/savings-bank" component={Savings} />
              <Route
                exact
                path="/services/parcel-service"
                component={ParcelService}
              />

              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/publications" component={Publication} />
              <Route
                exact
                path={`/${keys.adminPanel}`}
                component={AdminRedirection}
              />

              <Route component={Home} />
            </Switch>
          </ScrollToTop>

          <Footer />
        </Router>
      </IntlProvider>
    </ApolloProvider>
  );
};

export default App;
