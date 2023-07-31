const cartProductsLoader = async() => {
    const loadedProductsJson = await fetch('products.json');
    const loadedProducts = loadedProductsJson.json();
    return loadedProducts;
}

export default cartProductsLoader;