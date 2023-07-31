import { getStoredItem } from "../../utilities/db";

const cartProductsLoader = async() => {
    const loadedProductsJson = await fetch('products.json');
    const loadedProducts = await loadedProductsJson.json();

    const storedProducts = getStoredItem();
    let storedCart = [];
    for(const id in storedProducts){
        const addedProducts = loadedProducts.find(pd => pd.id === id);
        if(addedProducts){
            addedProducts.quantity = storedProducts[id];
            storedCart.push(addedProducts);
        }
    }

    // if we have to send two values than
    // return [loadedProducts , storedCart];
    // return {loadedProducts, cart: storedCart};


    return storedCart;
}

export default cartProductsLoader;