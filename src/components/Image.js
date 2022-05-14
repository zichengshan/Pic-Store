import React, {useState, useContext} from "react";
import PropTypes from "prop-types"
import {Context} from "../Context";

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart, removeFromCart, cartItems} = useContext(Context)
    const heartIcon = hovered &&
        (img.isFavorite ?
                <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i> :
                <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        )

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid" alt="pic"/>
            {heartIcon}
            {cartIcon()}
        </div>
    )
}

Image.prototype = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image