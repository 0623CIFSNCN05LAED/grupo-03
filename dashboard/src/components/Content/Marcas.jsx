import { useEffect, useState } from "react";

export default function Brands() {
  const [brands, setBrands] = useState({count: 0, countByBrand: 0,products: 0, brands:[]});

  useEffect(() => {
    fetch("http://localhost:3030/api/products/brands")
    .then(response => response.json())
    .then(result => {
      setBrands({
        count: result.meta.count,
        countByCategory: result.meta.countByBrand,
        brands: result.brands
    });

  });
  },[])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:3030/api/products/brands");
  //     const result = await response.json();
  //     setBrands(result.data);
  //   };
  //   fetchData();
  // }, []);


  return (
    <div className="card">
      <h4 className="title">Marcas</h4>

      <section className="content">
        <div> Hola
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
        </div>
      </section>
    </div>

  )

}