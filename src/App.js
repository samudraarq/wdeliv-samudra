import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ProductContextProvider from "./components/Context/ProductContext";

function App() {
  return (
    <ProductContextProvider>
      <Navbar />
      <Home />
    </ProductContextProvider>
  );
}

export default App;
