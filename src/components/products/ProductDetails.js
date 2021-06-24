import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({ categories, product, onSave, onChange }) => {
  return (
    <form>
      <h2>{product.id ? "güncelle" : "ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="hata"
      />
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((cate) => ({
          value: cate.id,
          text: cate.categoryName,
        }))}
        onChange={onChange}
        error="hata"
      />
      <TextInput
        name="unitPrice"
        label="Unit Prace"
        value={product.unitPrice}
        onChange={onChange}
        error="hata"
      />{" "}
      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error="hata"
      />{" "}
      <TextInput
        name="unitsInStock"
        label="Unit In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error="hata"
      />
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};
export default ProductDetail;
