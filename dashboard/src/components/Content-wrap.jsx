import { Route, Switch } from "react-router-dom";
import Preventa from "./Content/Preventa";
import Estadisticas from "./Content/Estadisticas";
import UltimoProducto from "./Content/UltimoProducto";
import LastUser from "./Content/LastUser";
import Marcas from "./Content/Marcas";
import Products from "./Content/Productos";
// import OneProduct from "./Content/OneProduct";
import ProductsSearch from "./ProductsSearch";


export default function ContentWrap() {
  return (
    <main className="content-wrap"
      style={{ maxHeight: "calc(100vh - 6rem)" }
      }
    >
      <Switch>
        <Route path="/buscar">
          <ProductsSearch />
        </Route>
        <Route path="/phones">
          <Preventa />
        </Route>
        <Route path="/estadisticas">
          <Estadisticas />
        </Route>
        <Route path="/ultimo-producto">
          <UltimoProducto />
        </Route>
        <Route path="/last">
          <LastUser />
        </Route>
        <Route path="/marcas">
          <Marcas />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        {/* <Route path="/products/:productId">
          <OneProduct />
        </Route> */}
        <Route path="*">
          <p>404 - página no encontrada</p>
        </Route>
      </Switch>
    </main>
  );
}
