import * as actionTypes from "./actionTypes";

export function getProductSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function creacteProductSuccess(product) {
  return { type: actionTypes.CREACTE_PRODUCT_SUCCESS, payload: product };
}
export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function saveProductApi(product) {
  return fetch("http://localhost:3000/products/" + product.id || "", {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(creacteProductSuccess(savedProduct));
      })
      .catch((err) => {
        throw err;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    const err = await response.text();
    throw new Error(err);
  }
}

export function handleError(err) {
  console.log("Apide bir hata oluştu");
  throw err;
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductSuccess(result)));
  };
}
