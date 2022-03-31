import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shiping = 0;
    let quantity = 0;
    for (const eachCart of cart) {
        quantity = quantity + eachCart.quantity;
        total = total + eachCart.price * eachCart.quantity;
        shiping = shiping + eachCart.shipping;
    }
    let tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = parseFloat((total + tax + shiping))
    return (
        <div className='cart'>
            <h3>fixed side bar</h3>
            <p>Selected item: {quantity}</p>
            <p>Total price: {total}</p>
            <p>Total Shiping:; {shiping}</p>
            <p>Tax: {tax}</p>
            <h4>Grand total: {grandTotal}</h4>
        </div>
    );
};

export default Cart;








// const addToLocalStorage = (id) => {
//     let shopingCart = loadCart();
//     //add quantity
//     let quantity = shopingCart[id];
//     if (quantity) {
//         quantity = quantity + 1;
//         shopingCart[id] = quantity;
//     }
//     else {
//         shopingCart[id] = 1;
//     }

//     // set storage
//     localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))
// }
// const loadCart = () => {
//     let shopingCart = {};
//     const getCart = localStorage.getItem('shoping-cart');
//     if (getCart) {
//         shopingCart = JSON.parse(getCart)
//     }
//     return shopingCart;
// }

// const deleteACart = (id)=>{
//     const storeCart = localStorage.getItem('shoping-cart');
//    if (storeCart){
//        const shopingCart = JSON.stringify(storeCart);
//        if(id in shopingCart){
//            delete shopingCart[id];
//            localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))
//        }
//     }
// }

// const removeFromDb = ()=>{
//     localStorage.removeItem('shoping-cart');
// }