import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCart } from '../../Hook/useCart';
import useProducts from '../../useProducts/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const Navigate = useNavigate();
    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id)
    }
    return (
        <div className='shop-container'>
            <div className="product-item-container">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={() => Navigate('/shiping')}>Proceed Shiping</button>

                </Cart>
            </div>
        </div>
    );
};

export default Orders;