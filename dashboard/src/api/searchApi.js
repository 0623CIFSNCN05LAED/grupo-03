const OMDB_API_KEY = "99a9eb36";
const OMDB_API_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;

// export async function apiProducts() {
//   const response = await fetch(`${PRODUCTS_URL}s=${productText}`);
//   const result = await response.json();

//   if (result.Search) {
//     return result.Search;
//   }
//   return [];
// }

export async function searchApi(searchText) {
  const response = await fetch(`${OMDB_API_URL}s=${searchText}`);
  const result = await response.json();

  if (result.Search) {
    return result.Search;
  }

  return [];
}
