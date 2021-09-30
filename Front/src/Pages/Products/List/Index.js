import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../../../Components/TableList";
import api from "../../../Services/api";

import * as S from "./styles";

function List() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    setLoading(true);
    const { data } = await api.get("/Produto");

    if (data) setProductList(data);

    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleRemove = async (id) => {
    try {
      setLoading(true);
      await api.delete(`/Produto/${id}`);
      await loadProducts();
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 15 ~ submit ~ error", error);
    }
  };

  return (
    <S.ListContainer>
      {loading && "Procurando Informações um instante..."}

      {!loading &&
        !!productList.length &&
        productList.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            imageUri={product.imageUri}
            price={product.price}
            id={product.id}
            handleRemove={handleRemove}
          />
        ))}

      {!loading && !productList.length && "Nenhum produto"}
    </S.ListContainer>
  );
}

export default List;
