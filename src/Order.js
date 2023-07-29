import React from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM DD YYYY, hh:mm:ss")}</p>

            <p className="order_id">
                <h3><small>Order Id : {order.id}</small></h3>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (

                    <h3 className="order_total">Payment Order Total: { value}</h3>
                )}
                decimalScale={3}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹ "}
            />
        </div>
    )
}

export default Order
