import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductGridStyles } from "./ProductGrid.presets";

interface ProductGridProps {
  data: any;
  isList: boolean;
}

export const ProductGrid = ({ data, isList }: ProductGridProps) => {
  return (
    <div style={ProductGridStyles.container}>
      {data.map((item: any) => (
        <ProductCard key={item.id} items={item} isList={isList} />
      ))}
    </div>
  );
};
