import React, {useContext, useState} from "react"
import {Context} from "../Context";

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [trashIconClassname, setTrashIconClassname] = useState("ri-delete-bin-line")

    function handleChangeEnter() {
        setTrashIconClassname("ri-delete-bin-fill")
    }

    function handleChangeLeave() {
        setTrashIconClassname("ri-delete-bin-line")
    }

    return (
        <div className="cart-item">
            <i className={trashIconClassname} onMouseEnter={handleChangeEnter} onMouseLeave={handleChangeLeave} onClick={() => removeFromCart(item.id)}></i>
            <img src={item.url} width="130px" alt="pic"/>
            <p>$1.99</p>
        </div>
    )
}

export default CartItem