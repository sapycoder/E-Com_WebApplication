import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import axios from './axios';      //IMPORTING FROM LOCAL FILE
import { db } from './firebase';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true); 
        
    const [clientSecret, setclientSecret] = useState(true);

    //INPORTANT SNIIPET OF CODE FOR PAYMENT
    useEffect(() => {
        //GENERATE SPECIAL STRIPE TO CHARGE A CUSTOMER
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stipes expects the total in currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setclientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>> ', clientSecret)

    const handleSubmit = async (event) => {
        //does some card related stuff all TO TELL STRIPE HOW MUCH AMT TO CHARGE..
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = PAYMENT CONFIRMATION

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.image)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')   //.replace  cause we do not want to come to payment page now
        })
    }

    const handleChange = event => {
        //Listn for changes in Card Element 
        //And display error id user enter wrong card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>
                    <Link to='/checkout'>
                        My Products And Payments ( {basket?.length} items )
                    </Link>
                </h1>
                {/*PAYMENT SECTON -- DELIVERY ADDRESS */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h2>Delivery Address</h2>
                    </div>
                    <div className="payment_address">
                        <strong><p>{user?.email}</p></strong>
                        <p>GG-42, Hindalco Colony</p>
                        <p>Renukoot, Sonebhdra ( U.P )</p>
                    </div>
                </div>


                {/*PAYMENT SECTON -- REVIEW ITEMS */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h2>Review Basket Items And Delivery</h2>
                    </div>

                    <div className="payment_items">
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

                {/*PAYMENT SECTON -- PAYMENT METHOD */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h2>Payment Method</h2>
                    </div>
                    <div className="payment_details">
                        {/* Stripe magic would go*/}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (

                                            <h3>Payment Order Total: { value }</h3>
                                    )}
                                    decimalScale={3}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹ "}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span> {processing ? <p>Processing...</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Errors Message if Any */}
                            {error && <div>{error}</div>}
                            
                        </form>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Payment
