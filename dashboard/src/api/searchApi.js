// const OMDB_API_KEY = "99a9eb36";
// const OMDB_API_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;

// export async function searchApi(searchText){
//   const response = await fetch(`${OMDB_API_URL}s=${searchText}`);
//     const result = await response.json();

//     if (result.Search) {
//       return result.Search;
//     }

  
//   return [];
// }

const PRODUCTS_URL = "http://localhost:3030/api/products";

export async function searchApi() {
  const response = await fetch(PRODUCTS_URL);
  const result = await response.json();

  if (result) {
    return result;
  }
  return [];
}

// export async function detailProductApi(productID){
//   const response = await fetch(`${PRODUCTS_URL}products/detail/${productID}`)
//   const result = await response.json()
//   if(result.meta.status === 200){
//     return result.meta.data;
//   }
//   return false
// }

// export async function lastProductApi(){
//   const response = await fetch(`${PRODUCTS_URL}products/lastproduct`)
//   const result = await response.json()
//   if(result.meta.status === 200){
//     const id = result.meta.id
//     const resultDetail = await detailProductApi(id)
//     return resultDetail.product
//   }
//   return false
// }