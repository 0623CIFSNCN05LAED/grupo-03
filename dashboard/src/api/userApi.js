const USERS_URL = "http://localhost:3030/api/users";

export async function userApi() {
  const response = await fetch(USERS_URL);
  const result = await response.json();

  if (result) {
    return result;
  }
  return [];
}


export async function lastUserApi(){
  const response = await fetch(`${USERS_URL}users?options=last`)
  const result = await response.json()
  if(result.meta.status === 200){
    const id = result.meta.id
    const resultDetail = await detailUserApi(id)
    return resultDetail.user
  }
  return false
}