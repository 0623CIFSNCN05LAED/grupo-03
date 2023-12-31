import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

export default function Statistics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/products");
      const result = await response.json();
      setProducts(result.meta);
    };
    fetchData();
  }, []);

  const countProducts = products.count;

  const countBrands = () => {
    if (products && products.countByBrand) {
      const brands = Object.values(products.countByBrand);
      return brands.length;
    }
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3030/api/users");
      const result = await response.json();
      setUsers(result.meta);
    };
    fetchData();
  }, []);

  const countUsers = users.count;

  const myStats = [
    {
      id: 1,
      title: "Cantidad de Productos",
      value: countProducts,
      color: "cornflowerblue",
      icon: "bi bi-laptop",
    },
    {
      id: 2,
      title: "Marcas de Productos",
      value: countBrands(),
      color: "orange",
      icon: "bi bi-tags",
    },
    {
      id: 3,
      title: "Total de Usuarios",
      value: countUsers,
      color: "green",
      icon: "bi bi-people-fill",
    },
  ];

  return (
    <section className="content">
      <h2 className="mt-3">Estadísticas</h2>
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