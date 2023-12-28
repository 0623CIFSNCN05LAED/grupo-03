const heartIcon = document.querySelectorAll('.fa-heart');
const favoritesStorage = localStorage.getItem("favorites");
let favoriteProducts = [];
if (favoritesStorage) {
  favoriteProducts = JSON.parse(favoritesStorage);
}

for (let i = 0; i < heartIcon.length; i++) {
  heartIcon[i].addEventListener('click', () => {
    heartIcon[i].classList.toggle('full');
    /*if (heartIcon[i].classList.contains('full')) {
      favoriteProducts.push(products[i].id_product) 
      localStorage.setItem("favorites", JSON.stringify(favoriteProducts))
    }*/
  })
  
}
