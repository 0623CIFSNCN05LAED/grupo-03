import { Route, Switch } from "react-router-dom";
import Preventa from "./Content/Preventa";
import Estadisticas from "./Content/Estadisticas";
import LastProduct from "./Content/LastProduct";
import LastUser from "./Content/LastUser";
import Products from "./Content/Productos";
// import OneProduct from "./Content/OneProduct";
import ProductsSearch from "./ProductsSearch";
import Brands from "./Content/Marcas";


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
        <Route path="/lastProduct">
          <LastProduct />
        </Route>
        <Route path="/lastUser">
          <LastUser />
        </Route>
        <Route path="/brands">
          <Brands />
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
