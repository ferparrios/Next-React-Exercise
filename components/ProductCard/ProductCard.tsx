import React from "react";
import { ProductCardStyles } from "./ProductCard.presets";

interface ProductCardProps {
  items: any;
  isList: boolean;
}

export const ProductCard = ({ items, isList }: ProductCardProps) => {
  const isListWidth = () => {
    if (isList) {
      return "100%";
    }
    return "300px";
  };

  const isListBorderBottom = () => {
    if (isList) {
      return "1px solid gray";
    }
    return "none";
  };

  const isListFlexDirection = () => {
    if (isList) {
      return "row";
    }
    return "column";
  };

  const isListHeight = () => {
    if (isList) {
      return "300px"
    }
    return "400px"
  }

  const isListPaddingProducts = () => {
    if (isList) {
      return "20px"
    }
    return "0"
  }

  return (
    <div
      style={{
        ...ProductCardStyles.container,
        width: isListWidth(),
        borderBottom: isListBorderBottom(),
        flexDirection: isListFlexDirection(),
        height: isListHeight()
      }}
    >
      <div style={ProductCardStyles.imageContainer}>
        <img
          src={items.image.src}
          alt={items.title}
          style={ProductCardStyles.imageStyles}
        />
      </div>
      <div
        style={{...ProductCardStyles.productCardDescriptionContainer, padding: isListPaddingProducts()}}
      >
        <div style={ProductCardStyles.titleContainer}>
          <h4 style={ProductCardStyles.titleText}>{items.title}</h4>
        </div>

        <p style={ProductCardStyles.typeText}>Type: {items.product_type}</p>
        <p style={ProductCardStyles.qtyText}>
          Quantity Sold: {items.quantitySold}
        </p>
      </div>
    </div>
  );
};
