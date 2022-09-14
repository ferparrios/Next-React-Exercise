import React from "react";
import { LayoutStyles } from "./Layout.presets";

export interface LayoutProps {
  children: any;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={LayoutStyles.container}>
      <div style={LayoutStyles.innerContainer}>
        <h1 style={LayoutStyles.titleContainer}>
          Welcome to the Mum&aposs Deals Page!
        </h1>
      </div>
      <div style={LayoutStyles.childrenContainer}>{children}</div>
    </div>
  );
};
