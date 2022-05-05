import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/carrinho">
        <CartPage />
      </Route>
    </Switch>
  );
};
export default Routes;
