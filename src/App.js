import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import ProductContextProvider from "./components/Context/ProductContext";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/:id">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </ProductContextProvider>
  );
}

export default App;
