import React, {useContext} from "react"
import {Context} from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
    const {cartItems} = useContext(Context)
    const totalCost = cartItems.length*1.99
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart