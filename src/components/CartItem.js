import React from "react"

function CartItem({item}) {
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line"></i>
            <img src={item.url} width="130px" alt="pic"/>
            <p>$0.00</p>
        </div>
    )
}

export default CartItem