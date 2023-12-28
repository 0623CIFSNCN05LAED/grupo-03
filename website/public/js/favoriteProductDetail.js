const heartIcon = document.querySelector('.fa-heart');
const favoritesStorage = localStorage.getItem("favorites");
let favoriteProducts = [];
if (favoritesStorage) {
  favoriteProducts = JSON.parse(favoritesStorage);
}


heartIcon.addEventListener('click', () => {
  heartIcon.classList.toggle('full');
  if (heartIcon.classList.contains('full')) {
    const prodName = document.querySelector('.product-name').innerText;
    const prodId = document.querySelector('.idProd').innerText;
    const prod = []
    prod.push(prodId)
    prod.push(prodName)
    favoriteProducts.push(prod) 
    localStorage.setItem("favorites", JSON.stringify(favoriteProducts))
  }
})
  

