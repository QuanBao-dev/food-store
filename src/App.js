import "./App.css";

import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Footer from "./components/Footer/Footer";
import ShopProductDetail from "./pages/ShopProductDetail/ShopProductDetail";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="main-content">
        <Switch>
          <Route component={Checkout} path="/shop/checkout" exact />
          <Route component={Cart} path="/shop/cart" exact />
          <Route component={ShopProductDetail} path="/shop/:productId" exact />
          <Route component={Shop} path="/shop" exact />
          <Route component={SignIn} path="/login" exact />
          <Route component={Register} path="/register" exact />
          <Route component={Home} path="/" exact />
        </Switch>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
