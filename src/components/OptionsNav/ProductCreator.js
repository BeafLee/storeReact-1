import React from 'react';

export const ProductCreator = props => {

  const notRefesh = e => {
    e.preventDefault();
    console.log('Good')
  }


  return (
    <form action="" className="form-inline">
      <div className="input-group">
        <input type="text" id="newName" placeholder="Nombre" className="form-control" />
        <input type="text" id="newModel" placeholder="Modelo" className="form-control" />
        <input type="text" id="newBrand" placeholder="Marca" className="form-control" />
      </div>

      <div className="input-group">
        <input type="number" id="newCount" placeholder="Cantidad" className="form-control" />
        <input type="number" id="newPrice" placeholder="Precio" className="form-control" step="2"/>

        <div className="input-group-append">
          <button className="btn btn-outline-info" onClick={notRefesh}>Añadir</button>
        </div>
      </div>
    </form>
  )
}