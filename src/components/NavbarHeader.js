import React from 'react';
import nueveCuadrosImg from "../img/9cuadrados.png";
import filasImg from "../img/lista.png";

export const NavbarHearder = props => {

  const ViewForm = e => {
    //console.log(e.target.id + ' have been selected');
    //console.log(e.target.previousSibling);
    //console.log(document.getElementById(e.target.id).parentElement);
    if (e.target.id === "vistaCuadros") {
      e.target.className = 'btn btn-outline-warning active btn-light';
      e.target.previousSibling.className = 'btn btn-outline-warning btn-light'
      //console.log('Cuadros have benn selected');
      props.select('cuadros');
    } else {
      e.target.className = 'btn btn-outline-warning active btn-light';
      e.target.nextSibling.className = 'btn btn-outline-warning btn-light'
      //console.log('Lista have benn selected');
      props.select('filas');
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand">Inventario</span>

      <div className="btn-group btn-group-toggle">
        <img
          className="btn btn-outline-warning active btn-light"
          onClick={ViewForm}
          src={filasImg}
          id="vistaFilas"
          alt="Lista en filas"
          checked
        />
        <img
          className="btn btn-outline-warning btn-light"
          src={nueveCuadrosImg}
          onClick={ViewForm}
          id="vistaCuadros"
          alt="Lista en cuadros"
        />
      </div>


      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggleMenu" aria-controls="toggleMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="toggleMenu">
        
      </div>
    </nav >
  )
}