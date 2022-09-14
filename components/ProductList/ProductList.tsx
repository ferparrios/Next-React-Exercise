import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductListStyles } from "./ProductList.presets";

interface ProductListProps {
  data: any;
  isList: boolean;
}

export const ProductList = ({ data, isList }: ProductListProps) => {
  return (
    <div style={ProductListStyles.container}>
      {data.map((item: any) => (
        <ProductCard key={item.id} items={item} isList={isList} />
      ))}
    </div>
  );
};
