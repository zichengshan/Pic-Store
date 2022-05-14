import React, {useEffect, useState} from "react";

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const newAllPhotos = allPhotos.map(photo => {
            if (photo.id === id) {
                console.log(photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(newAllPhotos)
    }

    function addToCart(newItem) {
        setCartItems(prev => [...prev, newItem])
    }

    function removeFromCart(id) {
        const newCartItems = cartItems.filter(img => img.id !== id)
        setCartItems(newCartItems)
    }

    function emptyCart() {
        setCartItems([])
    }

    return (
        <Context.Provider value={{
            allPhotos,
            toggleFavorite,
            addToCart,
            removeFromCart,
            emptyCart,
            cartItems
        }}
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}