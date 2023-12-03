const heartIcon = document.querySelectorAll('.fa-heart');

for (let i = 0; i < heartIcon.length; i++) {
  heartIcon[i].addEventListener('click', () => {
    heartIcon[i].classList.toggle('full');
  });
  
}
