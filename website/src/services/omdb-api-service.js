const fetch = require("node-fetch");

const OMDB_API_KEY = "99a9eb36";
const OMDB_API_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;

module.exports = {
  search: async (query) => {
    const response = await fetch(`${OMDB_API_URL}s=${query}`);
    const result = await response.json();

    if (result.Search) {
      return result.Search[0];
    }
    return null;
  },
  findProduct: async (id_product) => {
    const response = await fetch(`${OMDB_API_URL}i=${id_product}&plot=full`);
    const result = await response.json();

    return result;
  },
};
