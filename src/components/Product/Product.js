import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { ProductContext } from "../Context/ProductContext";

import styles from "./Product.module.css";

import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import Container from "../UI/Container";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [currentProduct, setCurrentProduct] = useState({});

  const { id } = useParams();
  const { toggleBookmarked, addToCart, products } = useContext(ProductContext);

  useEffect(() => {
    const fetchProduct = () => {
      axios
        .get(
          `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/${id}`
        )
        .then(function (response) {
          setProduct(response.data.value);
        });
    };
    fetchProduct();

    setCurrentProduct(products.filter((product) => product.id === id));
  }, [id, products]);

  const onClickCart = (id) => {
    addToCart(id);
    toast.info(`${product.name} ${product.vintageYear} is added to cart`, {
      className: styles.toast,
    });
  };

  const onClickBookmarked = (id) => {
    toggleBookmarked(id);
    if (product.bookmarked === false) {
      toast.info(`${product.name} ${product.vintageYear} is bookmarked`, {
        className: styles.toast,
      });
    }
  };

  const renderContent = product && (
    <div className={styles.productContainer}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div>
        <h2 className={styles.name}>{product.name}</h2>
        <p>
          <span className={styles.varieties}>{product.grapeVarieties}</span>{" "}
          {product.vintageYear}
        </p>
        <div className={styles.priceContainer}>
          S$ {product.price}
          <div className={styles.cta}>
            <button
              type="button"
              className={styles.btn}
              disabled={currentProduct.newQty === 0}
              onClick={() => onClickCart(product.id)}
            >
              ADD TO CART
            </button>
            <span
              className={styles.bookmark}
              onClick={() => onClickBookmarked(product.id)}
            >
              {currentProduct.bookmarked === true ? (
                <TurnedInIcon style={{ color: "#d7be69", fontSize: 28 }} />
              ) : (
                <TurnedInNotIcon style={{ color: "#d7be69", fontSize: 28 }} />
              )}
            </span>
          </div>
        </div>
        <div className={styles.properties}>
          <div>
            <h4>Region</h4>
            <p>
              {product.country}, {product.region}
            </p>
          </div>
          <div>
            <h4>Producer</h4>
            <p>{product.producer}</p>
          </div>
          <div>
            <h4>Bottle</h4>
            <p>{product.bottleSize}ml</p>
          </div>
          <div>
            <h4>Alcohol</h4>
            <p>{product.alcohol}%</p>
          </div>
        </div>
        <h4 className={styles.descTitle}>Description</h4>
        <p className={styles.desc}>{product.description}</p>
        <h4 className={styles.descTitle}>Testing Notes</h4>
        <p className={styles.desc}>{product.tastingNotes}</p>
      </div>
    </div>
  );

  return (
    <Container>
      <div className={styles.container}>{renderContent}</div>
    </Container>
  );
};

export default Product;
