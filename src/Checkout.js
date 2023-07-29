import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <div >
                    <img className="checkout_ad"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/banner_1_newStore.jpg" alt=""
                    />
                </div>
                <div>
                    <h3 className="checkout_title_email">Welcome, {user?.email}</h3>
                    <h1 className="checkout_title">YOUR SHOPPING BASKET LIST</h1>

                    {/*checkout_product*/}
                    {basket.map(item => (
                        <CheckoutProduct
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div >
    )
}

export default Checkout
