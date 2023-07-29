import React, { useEffect } from "react"
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";

const promise = loadStripe(
  'pk_test_51IqHN0SEvEh1JNN3ZPPubK5AzlOGlxz5VY8fXICmyI5spVxKR3qBZor6odGhnJOqYhEynqeK1VhLKQDvrRAGXJKj00CfnHQqiV'
);

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //WILL ONLY RUN ONCE THE APP COPONENT RUNS

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>> ', authUser);

      if (authUser) {
        //THE USER JUST LOGGED IN / THE USER WAS LOGGEd IN
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //THE USER LOGGED OUT
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

  return (
    <Router>
      <div className="app">

        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/footer">
            <Footer />
          </Route>

          <Route path="/orders">
            {/*HEADER TAB*/}
            <Header />
            <Orders />
            <Footer />
          </Route>

          <Route path="/checkout">
            {/*HEADER TAB*/}
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/payment">
            {/*HEADER TAB*/}
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>

          {/*MAKE SURE YOUR MAIN HOME DEFULT IS ATTHE BOTTOM*/}
          <Route path="/">
            {/*HEADER TAB*/}
            <Header />
            {/*HOME UDERNEATH*/}
            <Home />
            <Footer />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
