import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AdminPage from "./AdminPage";
import ProductsPage from "./ProductsPage";
import Header from "./Header";
import Footer from "./Footer";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";

const Routes: React.FunctionComponent = () => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Redirect exact from="/" to="/products"></Redirect>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/products/:id" component={ProductPage} />
          {/* <Route exact path="/admin" component={AdminPage} /> */}
          <Route path="/admin">
            {loggedIn ? <AdminPage /> : <Redirect to="/login" />}
          </Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
};
export default Routes;
