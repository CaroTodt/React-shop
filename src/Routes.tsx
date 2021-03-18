import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps
} from "react-router-dom";

import ProductsPage from "./ProductsPage";
import Header from "./Header";
import Footer from "./Footer";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";
import ContactUsPage from "./ContactUsPage";
import { Suspense } from "react";

const AdminPage = React.lazy(() => import("./AdminPage"));

const RoutesWrap: React.FunctionComponent = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};
const Routes: React.FunctionComponent<RouteComponentProps> = props => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (

    <div>
      <Header></Header>
      <TransitionGroup>
        <CSSTransition
          key={props.location.key}
          timeout={500}
          classNames="animate"
        >
          <Switch>
            <Redirect exact from="/" to="/products"></Redirect>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/products" component={ProductsPage} />
            <Route exact path="/products/:id" component={ProductPage} />
            {/* <Route exact path="/admin" component={AdminPage} /> */}
            <Route path="/contactus" component={ContactUsPage}></Route>
            <Route path="/admin">
              {loggedIn ? (
                <Suspense fallback={<div className="pagecontainer">Loading...</div>}>
                  <AdminPage />
                </Suspense>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route component={NotFoundPage}></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer></Footer>
    </div>
  );
};
export default RoutesWrap;
