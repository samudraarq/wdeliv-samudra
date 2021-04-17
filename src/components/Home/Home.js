import Card from "./Card/Card";

import InfiniteScroll from "react-infinite-scroller";

import styles from "./Home.module.css";
import Container from "../UI/Container";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const Home = () => {
  const { fetchData, products } = useContext(ProductContext);

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
