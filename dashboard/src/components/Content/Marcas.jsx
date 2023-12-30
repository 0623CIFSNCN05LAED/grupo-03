import { useEffect, useState } from "react";

function Brands() {

  const [brands, setBrands] = useState({ count: 0, countByBrand: 0, products: [] });

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
    .then(response => response.json())
    .then(result => {
      setProducts({
        count: result.meta.count,
        countByCategory: result.meta.countByBrand,
        brands: result.brands
    });

  });
  },[])

  return (
    <section className="content">
      <h3 className="mt-3">Marcas</h3>
      <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        {brands.brands ?
          brands.brands.map((brand) => (
            <div key={brand.id}>
              <h5> {brand.brand}</h5> 
            </div>
          )) : (
            <p>Cargando marcas...</p>
          )}
      </div>
    </section>
  );

}
export default Brands;