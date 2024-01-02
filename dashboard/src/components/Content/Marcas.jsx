import { useEffect, useState } from "react";

export default function Brands() {
  const [brands, setBrands] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/products/brands");
      const result = await response.json();
      setBrands(result.data.countByBrand);
    };
    fetchData();
  }, []);

  return (
    <div className="card">
      <h4 className="title">Marcas</h4>

      <section className="content">
        <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          {brands ? (
            Object.keys(brands).map((brandId) => (
              <div key={brandId}>
                <h5>{`${brandId} ${brands[brandId]}`}</h5>
              </div>
            ))
          ) : (
            <p>Cargando marcas...</p>
          )}
        </div>
      </section>
    </div>
  );
}