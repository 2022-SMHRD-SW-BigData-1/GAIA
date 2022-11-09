import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import LandingPage2 from "views/examples/LandingPage2";
import LandingPage3 from "views/examples/LandingPage3";
import LandingPage4 from "views/examples/LandingPage4";
import RegisterP from "views/examples/회원가입페이지";
import LoginP from "views/examples/로그인페이지";
import LandingPage4_1 from "views/examples/LandingPage4-1";
import Company2 from "views/examples/content/Company2";
import Company3 from "views/examples/content/Company3";
import Company4 from "views/examples/content/Company4";
import CheckOut from "views/examples/CheckOut";
import Manage from "views/examples/Manage";
import Manage2 from "views/examples/Manage2";
import Manage3 from "views/examples/Manage3";
import Payment from "views/examples/Payment";
import Manages1 from "views/examples/회원관리";
import Manages2 from "views/examples/상품관리";
import PassModal from "views/examples/아이디비번찾기모달";
import PassModal2 from "views/examples/결제로그인모달";

function Pro() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Product">
          <Home
            convertPrice={convertPrice}
            products={products}
            setProducts={setProducts}
          />
        </Route>
        <Route
          exact
          path="/product/:id"
          render={() => (
            <Product
              convertPrice={convertPrice}
              cart={cart}
              setCart={setCart}
            />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Basket cart={cart} setCart={setCart} convertPrice={convertPrice} />
          )}
        />

        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/landing-page2"
          render={(props) => <LandingPage2 {...props} />}
        />
        <Route
          path="/landing-page3"
          render={(props) => <LandingPage3 {...props} />}
        />
        <Route
          path="/landing-page4"
          render={(props) => <LandingPage4 {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/register-page"
          render={(props) => <RegisterP {...props} />}
        />
        <Route
          path="/landing-page4_1"
          render={(props) => <LandingPage4_1 {...props} />}
        />
        <Route path="/Manage" render={(props) => <Manage {...props} />} />
        <Route path="/Manage2" render={(props) => <Manage2 {...props} />} />
        <Route path="/Manage3" render={(props) => <Manage3 {...props} />} />
        <Route
          path="/company1"
          render={(props) => <LandingPage3 {...props} />}
        />
        <Route path="/company2" render={(props) => <Company2 {...props} />} />
        <Route path="/company3" render={(props) => <Company3 {...props} />} />
        <Route path="/company4" render={(props) => <Company4 {...props} />} />
        <Route path="/login-page" render={(props) => <LoginP {...props} />} />
        <Route
          path="/CheckOut"
          render={(props) => <CheckOut {...props} />}
        ></Route>
        <Route path="/Payment" render={(props) => <Payment {...props} />} />
        <Route exact path="/Pro" render={(props) => <Pro {...props} />} />
        <Route path="/Manages1" render={(props) => <Manages1 {...props} />} />
        <Route path="/Manages2" render={(props) => <Manages2 {...props} />} />
        <Route
          path="/PassModal2"
          render={(props) => <PassModal2 {...props} />}
        />
        <Route path="/PassModal" render={(props) => <PassModal {...props} />} />

        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  );
}

export default Pro;