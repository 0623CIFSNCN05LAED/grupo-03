import ProductsSearchResult from "./ProductsSearchResult";
import SearchWrap from "./Search-wrap";
import { useState } from "react";

function ProductsSearch(){
    // const products =[
    //     {
    //         "id_product": "0b8e2624-d7d5-4214-948c-8502bf9421c0",
    //         "name": "Samsung Galaxy S23 Ultra",
    //         "poster":  "https://m.media-amazon.com/images/M/MV5BMTc5NTEwNTI4NV5BMl5BanBnXkFtZTgwNDE3OTU5NTE@._V1_SX300.jpg",
    //         "description": "Maximizá tu tiempo libre con la plataforma Snapdragon® 8 Gen 2 Mobile para Galaxy, el chip más potente de Snapdragon. Las características mejoradas en todos los ámbitos hacen que todo, desde los juegos hasta la transmisión, esté optimizado y sea perfecto, sin agotar la batería. Dynamic AMOLED 2X ofrece detalles claros y coloridos en la pantalla, ya sea con brillo atenuado bajo o por completo. Y la tecnología de 120 Hz optimiza de manera inteligente la frecuencia de actualización para suavizar la acción y ahorrar en batería. S Pen mantiene vivo el legado de Note. Además, te ayuda a deshacerte de la dependencia de los cuadernos, haciendo que los bocetos y memorandos sean fáciles y ecológicos.",
    //         "brands": [
    //           {
    //             "brand": {
    //               "id_brand": 1,
    //               "brand": "Samsung"
    //             }
    //           }
    //         ],
    //         "detail": "localhost:3030/api/products/0b8e2624-d7d5-4214-948c-8502bf9421c0"
    //       },
    //       {
    //         "id_product": "192c4dc4-0c8d-44e3-9263-fcba55047cf3",
    //         "name": "Samsung Galaxy Z Flip 5",
    //         "poster": "https://m.media-amazon.com/images/M/MV5BNjE3NWRkNTAtYzdmMy00MWUxLWEyZTMtNjc4ZGI4MzdkNWE5XkEyXkFqcGdeQXVyNDk1MDY0MTc@._V1_SX300.jpg", 
    //         "description": "Respaldada por un procesador poderoso, esta batería de 3700 mAh (uso típico) es aún más eficiente y permite prolongar la carga para que puedas mirar películas sin parar o jugar hasta tarde en la noche. ¿Necesitás más? Habilitá el modo de bajo consumo para que la diversión siga fluyendo. El nuevo Snapdragon® 8 Gen 2 Mobile Platform for Galaxy te lleva a un nivel completamente nuevo en potencia.Experimentá gráficos más suaves, IA más rápida y funcionamiento de la batería mejorado. Este plegable lleva un traje duro con marco de armazón: Armor Aluminium. Presentando un diseño con doble riel nuevo, durable para nuestras bisagras plegables. Con Galaxy Z Flip5, un poco de humedad no frenará tu día.",
    //         "brands": [
    //           {
    //             "brand": {
    //               "id_brand": 1,
    //               "brand": "Samsung"
    //             }
    //           }
    //         ],
    //         "detail": "localhost:3030/api/products/192c4dc4-0c8d-44e3-9263-fcba55047cf3"
    //       },
    //       {
    //         "id_product": "1a7b1df5-3b76-4c33-bd5a-fba41b743034",
    //         "name": "iPhone 13",
    //         "poster": "https://m.media-amazon.com/images/M/MV5BMjMyOTIzNzItZTA0Ny00ZWRhLTk2NDMtYmQwYzUwZDllMjlhXkEyXkFqcGdeQXVyNTM0MTIyMjQ@._V1_SX300.jpg",
    //         "description": "El superrápido chip A15 Bionic. Un gran salto en duración de batería. Un diseño resistente. Y una pantalla Super Retina XDR más brillante. Una pantalla OLED más brillante que ahorra energía y se ve increíble incluso a pleno sol. Y un diseño duradero resistente al agua y al polvo. Mejoramos las cámaras como nunca para que tus fotos y videos se vean aún más increíbles. La cámara gran angular capta más luz y la cámara ultra gran angular captura más detalle en las zonas oscuras. Además, incluimos una nueva estabilización óptica de imagen por desplazamiento de sensor. Con el chip A15 Bionic, tienes potencia de sobra para disfrutar los juegos más exigentes y las nuevas funcionalidades, como el modo Cine y los Estilos Fotográficos. El iPhone 13 da un gran salto en duración de batería.",
    //         "brands": [
    //           {
    //             "brand": {
    //               "id_brand": 2,
    //               "brand": "Apple"
    //             }
    //           }
    //         ],
    //         "detail": "localhost:3030/api/products/1a7b1df5-3b76-4c33-bd5a-fba41b743034"
    //       },

    // ]

    // const products = [];

    const [products,setProducts] = useState(null);


    return(
        <>
        <SearchWrap setProducts={setProducts}/>
        <ProductsSearchResult products= {products} />
        </>
    )
}

export default ProductsSearch