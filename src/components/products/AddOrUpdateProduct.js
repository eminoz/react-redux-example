import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import ProductDetail from "./ProductDetails";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct, getProducts } from "../../redux/actions/productActions";
function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  history,
  saveProduct,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  //Bu normal setStatedeki gibi producti set eder

  useEffect(() => {
    //Bu eğer kulllanıcı bu sayfaya link ile geldiyse demek
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }

  return (
    <ProductDetail
      categories={categories}
      product={product}
      onSave={handleSave}
      onChange={handleChange}
    />
  );
}
export function getProductById(products, productId) {
  let product = products.find((product) => product.id == productId) || null;
  return product;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
