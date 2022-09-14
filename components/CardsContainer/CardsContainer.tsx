import React, { useState, useEffect } from "react";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { ProductList } from "../ProductList/ProductList";
import { SearchBar } from "../SearchBar/SearchBar";
import { cardsContainerStyles } from "./CardsContainer.presets";
import styles from "../../styles/CardContainer.module.css";

interface CardsContainerProps {
  data: any;
  setData: any;
}

export const CardsContainer = ({ data, setData }: CardsContainerProps) => {
  const [list, setList] = useState(false);

  return (
    <div
      style={cardsContainerStyles.container}
      className={styles["card-container"]}
    >
      <SearchBar data={data} setList={setList} setData={setData} />
      {list ? (
        <ProductList data={data} isList={list} />
      ) : (
        <ProductGrid data={data} isList={list} />
      )}
    </div>
  );
};
