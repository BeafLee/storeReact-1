import React from "react";

export const ProductList = props => {

  return (
    <table className="table table-striped text-center table-bordered table-haver table-dark">
      <thead>
        <tr>
          <th className="align-middle">Nombre</th>
          <th className="align-middle">Modelo</th>
          <th className="align-middle">Marca</th>
          <th className="align-middle">Cantidad</th>
          <th className="align-middle">
            Precio<br/>
            Unitario<br/>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.list.map(product => (
          <tr>
            <td className="align-middle">{product.name}</td>
            <td className="align-middle">{product.model}</td>
            <td className="align-middle">{product.brand}</td>
            <td className="align-middle">{product.count}</td>
            <td className="align-middle">{(product.price)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}


/* --- Primera prueba ----
  //JSON.stringify(list)

  props.list.map( product => (
    <tr>
      <td>{product.name}</td>
      <td>{product.model}</td>
      <td>{product.brand}</td>
  <td>{product.count}</td>
  <td>{(product.price)}</td>
    </tr>
  ))
  */