module.exports = {
    getFinalPrice: (product) => {
        const price = product.precio - product.precio * (product.descuento / 100);
        return price.toLocaleString("es-AR", {
            minimumFractionDigits: 2,
        });
    },
};