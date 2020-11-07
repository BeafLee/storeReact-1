import React, { useState } from "react";
import { OptionSelected } from "./OptionSelected";

export const NavOptions = props => {

  const cleanTab = [
    { nameTab: 'tabAdd', active: true, color: 'info' },
    { nameTab: 'tabSearch', active: false, color: 'success' },
    { nameTab: 'tabFilter', active: false, color: 'primary' }
  ]

  const [navTab, setNavTab] = useState(cleanTab)

  const tab = (e) => {
    //setNavTab(cleanTab);
    //console.log(navTab, e.target);
    if (e.target.id === 'tabAdd') {
      setNavTab([
        { nameTab: 'tabAdd', active: true, color: 'info' },
        { nameTab: 'tabSearch', active: false, color: 'success' },
        { nameTab: 'tabFilter', active: false, color: 'primary' }
      ])
    } if (e.target.id === 'tabSearch') {
      setNavTab([
        { nameTab: 'tabAdd', active: false, color: 'info' },
        { nameTab: 'tabSearch', active: true, color: 'success' },
        { nameTab: 'tabFilter', active: false, color: 'primary' }
      ])
    } if (e.target.id === 'tabFilter') {
      setNavTab([
        { nameTab: 'tabAdd', active: false, color: 'info' },
        { nameTab: 'tabSearch', active: false, color: 'success' },
        { nameTab: 'tabFilter', active: true, color: 'primary' }
      ])
    }
  }

  const active = (a, color) => {
    if ( a ) {
      return ('nav-link border-'+ color + ' btn-outline-' + color + ' active');
    } else {
      return ('nav-link border-'+ color + ' btn-outline-' + color)
    }
  }

  return (
    <div className="card text-white m-2">
      <div className="card-header bg-secondary">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <span className={active(navTab[0].active, 'info')} onClick={tab} id="tabAdd">Agregar</span>
          </li>
          <li className="nav-item">
            <span className={active(navTab[1].active, 'success')} onClick={tab} id="tabSearch">
              Buscar
            </span>
          </li>
          <li className="nav-item">
            <span className={active(navTab[2].active, 'primary')} onClick={tab} id="tabFilter">Filtrar</span>
          </li>
        </ul>
      </div>

      <div className="card-body bg-dark">
        <OptionSelected navTab={navTab}/>
      </div>
    </div>
  )
}