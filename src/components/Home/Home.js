import Card from "./Card/Card";
import axios from "axios";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import styles from "./Home.module.css";
import Container from "../UI/Container";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchData = (page) => {
    axios
      .get(
        `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${page}`
      )
      .then(function (response) {
        setProducts([...products, ...response.data.value.products]);
      });
  };

  return (
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchData}
        hasMore={true}
        loader={<div className="loader">Loading ...</div>}
      >
        <div className={styles.container}>
          {products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </InfiniteScroll>
    </Container>
  );
};

export default Home;
