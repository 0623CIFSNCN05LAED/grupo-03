import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

export default function Brands() {
  const [brands, setBrands] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/products");
      const result = await response.json();
      setBrands(result.meta.countByBrands);
    };
    fetchData();
  }, []);
  console.log(brands);

  const myStats = [];

  Object.entries(brands).forEach(([brand, index]) => {
    myStats.push({
      key: index + 1,
      title: brand,
      value: brands[brand],
      color: "cornflowerblue",
      icon: "bi bi-tag",
    });
  });

  return (
    <section className="content">
      <h2 className="mt-3">Marcas</h2>
      <div className="info-boxes">
        {myStats.map((stat) => (
          <SmallCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>
    </section>
  );
}