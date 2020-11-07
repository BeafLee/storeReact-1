import React from "react";
import { ProductCreator } from "./OptionsNav/ProductCreator";
import { ProductSearch } from "./OptionsNav/ProductSearch";
import { ProductFilter } from "./OptionsNav/ProductFilter";

export const OptionSelected = props => {


  return (
    <div>
      {
        props.navTab[0].active && (
          <ProductCreator />
        )
      } 
      {
        props.navTab[1].active && (
          <ProductSearch />
        )
      }
      {
        props.navTab[2].active && (
          <ProductFilter />
        )
      }
    </div>
  )
}