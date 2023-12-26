import SmallCard from "./SmallCard";

const myStats = [
  {
    id: 1,
    title: "Cantidad de Productos",
    value: "6",
    color: "cornflowerblue",
    icon: "bi bi-laptop",
  },
  {
    id: 2,
    title: "Marcas",
    value: "12",
    color: "orange",
    icon: "bi bi-tags",
  },
  {
    id: 3,
    title: "Promedio de precios",
    value: "857.999",
    color: "green",
    icon: "bi bi-currency-dollar",
  },
  {
    id: 4,
    title: "Cantidad de Usuarios",
    value: "3",
    color: "cornflowerblue",
    icon: "bi bi-person",
  },
];

export default function Statistics() {
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