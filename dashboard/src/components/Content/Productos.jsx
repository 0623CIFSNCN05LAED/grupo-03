import ProductItem from "./ProductItem";
import OneProduct from "./OneProduct";

// const products = [
//   { id_product: 1, name: "Samsung Galaxy S23 Ultra" },
//   { id_product: 2, name: "Samsung Galaxy Z Flip 5" },
//   { id_product: 3, name: "iPhone 13" },
//   { id_product: 4, name: "Motorola Razr 40 Ultra" },
//   { id_product: 5, name: "Samsung Galaxy Z Fold 5" },
//   { id_product: 6, name: "iPhone 14 Pro Max" },
// ];

import { Component } from "react";

class Products extends Component {
  constructor(props) {
    super(props);
    //Especifico de Productos
    this.state = {
      products: [
        { id_product: 1, name: "Samsung Galaxy S23 Ultra" },
        { id_product: 2, name: "Samsung Galaxy Z Flip 5" },
        { id_product: 3, name: "iPhone 13" },
        { id_product: 4, name: "Motorola Razr 40 Ultra" },
        { id_product: 5, name: "Samsung Galaxy Z Fold 5" },
        { id_product: 6, name: "iPhone 14 Pro Max" },
      ]
    };
  }

  componentDidMount() {
    fetch('http://localhost:3030/api/products').then((response) => {
      return response.json();
    })
      .then((json) => {
        const products = json.data;
        console.log('products', products);
        this.setState({
          products: products
        })
      })
  }


  render() {
    return (
      // <div>Hola</div>
      <section className="content">
        <h2 className="mt-3">Productos</h2>
        <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <button
            type="button"
            className="list-group-item list-group-item-action active text-center"
            aria-current="true"
          >
            Listado de Productos
          </button>
          {this.state.products.length === 0 ?
            "Cargando..." :
            this.state.products.map((product) => (
              <ProductItem key={product.id_product} name={product.name} />
            ))}
        </div>
        {/* <div className="col-6">
          <h2 className="mt-3">Producto Seleccionado:</h2>
          <Route path="/products/:name" component={OneProduct} />
        </div> */}
      </section>
    );
  }
}

export default Products;

