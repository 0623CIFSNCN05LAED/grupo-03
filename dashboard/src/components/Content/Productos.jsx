import { useEffect, useState } from "react";

function Products() {

  const [products, setProducts] = useState({ count: 0, countByBrand: 0, products: [] });

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
    .then(response => response.json())
    .then(result => {
      setProducts({
        count: result.meta.count,
        countByCategory: result.meta.countByBrand,
        products: result.products
    });

  });
  },[])

  return (
    <section className="content">
      <h3 className="mt-3">Productos</h3>
      <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        {products.products ?
          products.products.map((product) => (
            <div key={product.id}>
              <h5> {product.name}</h5> 
            </div>
          )) : (
            <p>Cargando productos...</p>
          )}
      </div>
    </section>
  );

}
export default Products;