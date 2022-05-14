import React, {useContext} from "react"
import {Context} from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
    const {cartItems} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart