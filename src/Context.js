import React from "react";

const Context = React.createContext()

function ContextProvider(props) {
    return (
        <Context.Providerc value="">
            {props.children}
        </Context.Providerc>
    )
}

export {ContextProvider, Context}