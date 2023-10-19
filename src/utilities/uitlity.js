const getStoredProduct = () => {
    const storedProduct = localStorage.getItem('addedCart');
    if (storedProduct) {
        return JSON.parse(storedProduct);
    }
    return []; 
}
const saveProduct = id => {
    const storedAllProduct = getStoredProduct();
    storedAllProduct.push(id);
    localStorage.setItem('addedCart', JSON.stringify(storedAllProduct));

}

export {getStoredProduct , saveProduct };