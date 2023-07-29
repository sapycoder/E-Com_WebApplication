import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {

    const history = useHistory();

    const [{ basket }, dispatch] = useStateValue();
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>SUBTOTAL ( {basket?.length} items ) :
                            <strong> {value} </strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />
                            This Order Contains A Gift
                        </small>
                    </>
                )}
                decimalScale={3}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹ "}
            />
            {/*history.push does not turn into a link keeps the button as button */}
            <button onClick= {e => history.push('/payment')}> Proceed To CheckOut</button>  
        </div>
    )
}

export default Subtotal
