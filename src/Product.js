import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    
    console.log("this is the basket items>>>>>", basket);

    const addToBasket = () => {
        //DISPATCH SOME ACTION INTO THE DATA LINK LAYER
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                title: title,
                image: image,
                price:price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>
                    <strong>{title}</strong>
                </p>
                <p className="product_price">
                    <strong><small>₹ </small></strong>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
             <img src={image} alt=""/>
            <button onClick={addToBasket}>Add To Cart</button>
        </div>
    )
}

export default Product
