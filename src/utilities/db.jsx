const addToCart = (id) => {
    let shoppingCart = {};

    const storedCard = localStorage.getItem('shopping-cart');
    if(storedCard){
        shoppingCart = JSON.parse(storedCard);
    }

    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

const getStoredItem = () =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        return shoppingCart;
    } 
}

const removeItems = (id) => {
    const savedCart = JSON.parse(localStorage.getItem('shopping-cart'));
    console.log(savedCart);
    if(savedCart){
        delete savedCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(savedCart));
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToCart,
    getStoredItem,
    removeItems,
    deleteShoppingCart
}