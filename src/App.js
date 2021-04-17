import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ProductContextProvider from "./components/Context/ProductContext";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ProductContextProvider>
      <Navbar />
      <Home />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </ProductContextProvider>
  );
}

export default App;
