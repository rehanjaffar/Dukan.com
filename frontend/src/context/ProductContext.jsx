import { createContext } from "react";
import { productData } from "../assets/products";


export const ProductContext = createContext()

const ProductContextProvider = (props)=>{

    const value = {
        productData
    }
 return (
    <ProductContext.Provider value={value}>
        {props.children}
    </ProductContext.Provider>
 )
}

export default ProductContextProvider