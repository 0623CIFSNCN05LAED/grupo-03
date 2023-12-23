const searchinput = document.getElementById('search');
const products = document.querySelectorAll('.product-card');
console.log(products);

for (let i = 0; i < products.length; i++) {
    const prod = products[i].document.getElementsByClassName('.prod-name');
    console.log(prod);
    
}

/*
for (let i = 0; i < products.length; i++) {
    const prod = products[i].document.getElementsByClassName('.prod-name');
    console.log(prod);
    
}*/



/*
searchinput.addEventListener("input", e => {
    const value = e.target.value
    console.log(value);
    console.log(products);
})*/