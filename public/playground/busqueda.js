import React, { Component } from "react";
import ReactDom from "react-dom";

import 'typeface-roboto'

import Button from '@material-ui/core/Button';

/* jshint ignore:start */

let info = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
let categorias = info
  .map(v => v.category)
  .filter((val, ind, arr) => arr.indexOf(val) === ind);

const Buscar = ({ valor, func, funcS, valorS }) => (
  <div>
    <input type="text" placeholder="Buscar..." value={valor} onChange={func} />
    <br />
    <label htmlFor="stock">Solo mostrar productos en stock</label>
    <input type="checkbox" id="stock" onChange={funcS} value={valorS} />
  </div>
);

const Categoria = ({ nombre }) => (
  <tr>
    <th colSpan="2">{nombre}</th>
  </tr>
);

const Producto = ({ precio, nombre, stock }) => (
  <tr
    style={{
      color: stock ? "black" : "red"
    }}
  >
    <td>{precio}</td>
    <td>{nombre}</td>
  </tr>
);

class Tablas extends Component {
  render() {
    var categoria = null;
    return (
      <table>
        <thead>
          <tr>
            <th>Precio</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {this.props.categorias.map((i, v) => {
            categoria = 1;
            return this.props.productos.map(itm => {
              if (categoria < 2) {
                categoria++;
                return <Categoria nombre={i} key={v} />;
              } else {
                return (
                  itm.category === i && (
                    <Producto
                      nombre={itm.name}
                      precio={itm.price}
                      key={itm.name}
                      stock={itm.stocked}
                    />
                  )
                );
              }
            });
          })}
        </tbody>
      </table>
    );
  }
}
const filtrar = (busqueda, stock) => {
  if (stock) {
    if(!busqueda)
      return info.filter(i => i.stocked);
    return info
      .filter(v => v.stocked)
      .map(i => (i.name.toLowerCase().indexOf(busqueda) >= 0 ? i : ""));
  } else {
    console.log('Estado ',stock);
    if(!busqueda){
    return info;
    }
    return info.map(i => (i.name.toLowerCase().indexOf(busqueda) >= 0 ? i : ""));
  }
};



class App extends Component {
  state = { categorias, info, busqueda: "", stock: true };
  modificarProductos = e => {
    let busqueda = e.target.value;
    var miInfo =
      busqueda.length != '' ? filtrar(busqueda, this.state.stock) : filtrar(null,this.state.stock);

    this.setState(() => ({ busqueda, info: miInfo }));
  };
  modificarStock = e => {
    this.setState(prev => ({ stock: !prev.stock }));
    var miInfo =
      this.state.busqueda.length != '' ? filtrar(this.state.busqueda, this.state.stock) : filtrar(null,this.state.stock);
    this.setState(()=> ({info: miInfo }));
    console.log(this.state.stock);
  };
  render() {
    return (
      <div>
        <Buscar
          func={this.modificarProductos}
          valor={this.state.busqueda}
          valorS={this.state.stock}
          funcS={this.modificarStock}
        />
        <Tablas
          productos={this.state.info}
          categorias={this.state.categorias}
        />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("render"));

/* jshint ignore:end */
