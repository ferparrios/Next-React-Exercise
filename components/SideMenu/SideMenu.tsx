import React, { useState } from "react";
import { SideMenuStyles } from "./SideMenu.presets";
import styles from "../../styles/SideMenu.module.css";

interface SideMenuProps {
  data: any;
  setData: any;
}

export const SideMenu = ({ data, setData }: SideMenuProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e: any) => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setData([...data.filter((item: any) => item.product_type === e.target.value)]);
    } else {
      setData(data);
    }
  };

  let hash: any = {};
  data = data.filter(function (current: any) {
    let exists = !hash[current.product_type];
    hash[current.product_type] = true;
    return exists;
  });

  return (
    <div
      style={SideMenuStyles.container}
      className={styles["side-menu-container"]}
    >
      <h3 style={SideMenuStyles.subtitle}>Filter Results</h3>
      <h3 style={SideMenuStyles.blackText}>Product Type</h3>
      {data.map((item: any) => {
        return (
          <div key={item.id} style={SideMenuStyles.innerPadding}>
            <input
              type="checkbox"
              name={item.product_type}
              id={item.id}
              checked={isChecked}
              onChange={(e) => handleCheck(e)}
              value={item.product_type}
            />
            <label htmlFor="" style={SideMenuStyles.blackText}>
              {item.product_type}
            </label>
          </div>
        );
      })}

      <h3 style={SideMenuStyles.blackText}>Price Range</h3>

      <div>
        <p>Custom range slider:</p>
        <input type="range" min="1" max="100" value="50" id="myRange" />
      </div>
    </div>
  );
};
