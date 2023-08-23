import { getStoredItem } from "../../utilities/db";

const cartProductsLoader = async() => {
    const storedProducts = getStoredItem();
    const ids = Object.keys(storedProducts);

    console.log(ids)
    const loadedProductsJson = await fetch('http://localhost:3000/productsById', {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(ids)
    });
    const loadedProducts = await loadedProductsJson.json();

    let storedCart = [];
    for(const id in storedProducts){
        const addedProducts = loadedProducts.find(pd => pd._id === id);
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