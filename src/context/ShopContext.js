import React, { createContext } from "react";
import  productsData  from "../companents/Assets/data";



export const ShopContext = createContext(null)

const ShopContextProvide = (props) => {

    const contextValue = {productsData};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvide;