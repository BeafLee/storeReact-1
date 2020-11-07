import React, { useState } from 'react';
import { SelectView } from "./components/SelectView";
import { NavbarHearder } from "./components/NavbarHeader";
import { NavOptions } from "./components/NavOptions";

function App() {

  const products = [
    { name: 'Yogurt', model: '120ml', brand: 'Gloria', count: 12, price: 1.20 },
    { name: 'Mermelada', model: '200g', brand: 'Gloria', count: 20, price: 2.10 },
    { name: 'PH', model: 'duo', brand: 'Suave', count: 15, price: 2.20 }
  ]

  const [selected, setSelected] = useState('filas')

  const whichView = selecting => {
    //console.log('The style view was ' + selected);
    //console.log(selecting + ' is now');
    setSelected(selecting);
  }

  return (
    <div>

      <NavbarHearder select={whichView} />

      <NavOptions />

      <div className="container my-3">
        <SelectView which={selected} products={products} />
      </div>

      <div className="card m-5 px-3 py-2">
        Atribuciones
          <ul>
          <li>
            Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
          </li>
          <li>
            Iconos diseñados por <a href="https://www.flaticon.es/autores/bqlqn" title="bqlqn">bqlqn</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default App;
