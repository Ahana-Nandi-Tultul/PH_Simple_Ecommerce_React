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

export {
    addToCart,
    getStoredItem
}