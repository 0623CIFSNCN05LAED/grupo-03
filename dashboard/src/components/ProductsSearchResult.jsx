function ProductsSearchResult({ products }) {

    //1. Esperando hacer una búsqueda; products=null
    if (!products) {
        return "Realizá tu búsqueda";
    }
    //2. Se realizó la búsqueda y no tengo resultados; products=[]
    if (products.length === 0) {
        return "No se encontraron productos";
    }

    //3. Se realizó la búsqueda y tengo resultados; products=[con elementos]

    return (
        <ul className="d-flex flex-wrap">
            {products.map((product) => {
                return (
                    <li key={product.id_product} className="card" style={{ width: "18rem" }}>
                        <img
                            src={product.poster}
                            alt={`poster de ${product.name}`}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h4>{product.name}</h4>
                            <p>Marca: {product.band} </p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );

}

export default ProductsSearchResult