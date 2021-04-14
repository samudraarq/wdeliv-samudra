import Card from "./Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Container from "../UI/Container";

const Home = () => {
  const currentPage = 1;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${currentPage}`
      )
      .then(function (response) {
        setProducts(response.data.value.products);
      });
  }, []);

  return (
    <Container>
      <div className={styles.container}>
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
