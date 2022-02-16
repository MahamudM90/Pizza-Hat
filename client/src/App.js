import Layout from "components/Layout/Layout";
import BasketButton from "components/Basket/BasketButton/BasketButton";
import Home from "./pages/Home";
import Pizzas from "./pages/Pizzas";
import Dashboard from "./pages/Dashboard";
import ShoppingBasket from "pages/ShoppingBasket";
import LoadingScreen from "components/LoadingScreen/LoadingScreen";
import { ToastContainer, Flip } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// product fetching
import { useEffect, useState } from "react";
import commerce from "utils/commerce";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const htmlTag = document.documentElement;

  // on loading, remove scroll from html
  loading
    ? (htmlTag.style.overflowY = "hidden")
    : (htmlTag.style.overflowY = "auto");

  useEffect(() => {
    const fetchProducts = async () => {
      // assign local storage for products and expiry to variables
      const storedProducts = localStorage.getItem("pizzas");
      const expiryDate = localStorage.getItem("expiry");

      // get current time
      const now = new Date();
      const current = now.getTime();

      // if local storage exists and the current date is less than the expiry date set products from local storage
      if (storedProducts !== null && current < expiryDate) {
        setProducts(JSON.parse(storedProducts));
      }

      // if local storage does not exist or if the date has expired set products from API
      if (storedProducts === null || current > expiryDate) {
        setLoading(true);
        // get pizzas from commerce js
        const pizzas = await commerce.products.list().then((res) => res.data);

        // set expiry time to 1 hour (3600000 milliseconds)
        const expiryTime = current + 3600000;
        // const expiryTime = current + 30000;

        // set state
        setProducts(pizzas);

        // save pizzas and expiry time to local storage
        localStorage.setItem("pizzas", JSON.stringify(pizzas));
        localStorage.setItem("expiry", expiryTime);

        // set loading to false once done
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <HelmetProvider>
      <Layout>
        <Switch>
          <Route path="/shopping-basket">
            <ShoppingBasket />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/pizzas">
            <Pizzas pizzas={products} />
          </Route>
          <Route path="/">
            <Home pizzas={products} />
          </Route>
        </Switch>
        <ToastContainer
          autoClose="2000"
          position="bottom-right"
          hideProgressBar
          transition={Flip}
          role="Alert"
        />
        <BasketButton />
        <LoadingScreen loading={loading} />
      </Layout>
    </HelmetProvider>
  );
};

export default App;

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setUser } from "./store/slices/user";
// import { auth } from "./firebase/config/firebase.config";

// const dispatch = useDispatch();
// need to add hidden class on to loading while user doesn't exist

// useEffect(() => {
//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in.
//       dispatch(
//         setUser({
//           name: user.displayName,
//           email: user.email,
//         })
//       );
//     } else {
//       // No user is signed in.
//     }
//   });
// }, [dispatch]);
