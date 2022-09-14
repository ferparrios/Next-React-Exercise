import React, { SetStateAction, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { SearchBarStyles } from "./SearchBar.presets";
import styles from "../../styles/SearchBar.module.css";

interface SearchBarProps {
  data: any;
  setList: any;
  setData: any;
}

export const SearchBar = ({ data, setList, setData }: SearchBarProps) => {
  const handleSelect = (e: any) => {
    if (e.target.value === "A to Z") {
      const newData = [...data.sort((a: any, b: any) => a.title.localeCompare(b.title))];
      setData(newData);
      return newData;
    }
  };

  return (
    <>
      <div style={SearchBarStyles.container}>
        <div className={styles["menu-icon-container"]}>
          <Icon icon="dashicons:menu-alt3" color="black" width="30" />
        </div>

        <div>
          <h4 style={SearchBarStyles.subtitle}>
            Available Deals: {data.length}
          </h4>
        </div>

        <div style={SearchBarStyles.innerContainer}>
          <div onClick={() => setList(false)}>
            <Icon icon="ph:squares-four-fill" color="black" width="30" />
          </div>

          <div onClick={() => setList(true)}>
            <Icon icon="ci:list-checklist" color="black" width="30" />
          </div>

          <div>
            <label style={SearchBarStyles.subtitle}>Sort Results: </label>
            <select
              name="Sort results"
              id=""
              style={SearchBarStyles.selectInput}
              onChange={handleSelect}
            >
              <option value="">All</option>
              <option value="A to Z">A to Z</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
