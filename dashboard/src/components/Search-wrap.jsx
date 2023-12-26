/* eslint-disable react/prop-types */
import { useRef } from "react";
import { apiProducts } from "../api/apiProducts";

function SearchWrap({ setProducts }) {
  const iconStyle = {
    fontSize: "1.5rem",
    color: "cornflowerblue",
  };

  const searchInput = useRef();

  async function search() {
    const searchText = searchInput.current.value;
    if (searchText.length > 5) {
      const foundProducts = await apiProducts(searchText);
      setMovies(foundProducts);
    }
  }

  return (
    <aside className="search-wrap">
      <div className="search">
        <label htmlFor="search">
          <i className="bi bi-search" style={iconStyle}></i>
          <input ref={searchInput} type="text" id="search" onInput={search} />
          {/* <button onClick={search}>Buscar</button> */}
        </label>
      </div>

      <div className="user-actions">
        <button>
          <a href="#">
            <i className="bi bi-person-add" style={iconStyle}></i>
          </a>
        </button>
        <button>
          <a href="#">
            <i className="bi bi-person" style={iconStyle}></i>
          </a>
        </button>
        <button>
          <a href="#">
            <i className="bi bi-box-arrow-right" style={iconStyle}></i>
          </a>
        </button>
      </div>
    </aside>
   
  );
}

export default SearchWrap;
