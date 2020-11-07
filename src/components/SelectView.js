import React from 'react';
import { ProductList } from "./listView/ProductList";
import { ProductSquare } from "./SquareView/ProductSquare";

export const SelectView = props => {
  if(props.which === 'cuadros') {
    return(
      <ProductSquare list={props.products}/>
    )
  } else {
    return(
      <ProductList list={props.products}/>
    )
  }
}