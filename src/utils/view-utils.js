module.exports = {
    getFinalPrice: (celular) => {
        const price = celular.precio - celular.precio * (celular.descuento / 100);
        return price.toLocaleString("es-AR", {
            minimumFractionDigits: 2,
        });
    },
};