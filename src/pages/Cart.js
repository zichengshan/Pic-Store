import React, {useContext, useState} from "react"
import {Context} from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")
    const totalCost = cartItems.length*1.99
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(function() {
            setButtonText("Place Order!")
            emptyCart()
        }, 3000);
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
            </div>
        </main>
    )
}

export default Cart