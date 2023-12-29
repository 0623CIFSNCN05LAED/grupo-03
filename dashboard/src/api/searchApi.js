const PRODUCTS_URL = "http://localhost:3030/api/products";

export async function searchApi() {
  const response = await fetch(PRODUCTS_URL);
  const result = await response.json();

  if (result) {
    return result;
  }
  return [];
}


export async function lastProductApi(){
  const response = await fetch(`${PRODUCTS_URL}products/lastproduct`)
  const result = await response.json()
  if(result.meta.status === 200){
    const id = result.meta.id
    const resultDetail = await detailProductApi(id)
    return resultDetail.product
  }
  return false
}