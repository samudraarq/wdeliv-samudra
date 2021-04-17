import { createContext, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartSize, setCartSize] = useState(0);

  const fetchData = (page) => {
    axios
      .get(
        `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${page}`
      )
      .then(function (response) {
        const resProducts = response.data.value.products;
        const addedProperties = resProducts.map((product) => {
          return { ...product, bookmarked: false, newQty: product.qty };
        });
        setProducts([...products, ...addedProperties]);
      });
  };

  const toggleBookmarked = (id) => {
    const newProducts = products.map((product) =>
      product.id === id
        ? { ...product, bookmarked: !product.bookmarked }
        : product
    );
    setProducts(newProducts);
  };

  const addToCart = (id) => {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, newQty: product.newQty - 1 } : product
    );
    setProducts(newProducts);
    setCartSize(cartSize + 1);
  };

  return (
    <ProductContext.Provider
      value={{ fetchData, products, cartSize, toggleBookmarked, addToCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
