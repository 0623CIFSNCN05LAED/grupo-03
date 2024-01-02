import { useRef } from "react";
import { searchApi } from "../api/searchApi";

function SearchWrap({ setProducts }) {
  const iconStyle = {
    fontSize: "1.5rem",
    color: "cornflowerblue",
  };

  const searchInput = useRef();

  async function search(){
    const searchText = searchInput.current.value;
    //Si queremos que a partir de 5 letras busque
    if(searchText > 5){
      const foundProducts = await searchApi(searchText);
      setProducts(foundProducts);
    }

  }

  return (
    <aside className="search-wrap">
      <div className="search">
        <label htmlFor="search">
          <i className="bi bi-search" style={iconStyle}></i>
          <input  ref={searchInput} type="text" id="search" />
          {/* Si queremos que mientras escribamos busque....comentamos el boton y habilitamos la linea de abajo */}
          {/* <input ref={searchInput} type="text" id="search" onInput={search} /> */}
          <button onClick={search}>Buscar</button>
        </label>
      </div>

     
    </aside>
   
  );
}

export default SearchWrap;
