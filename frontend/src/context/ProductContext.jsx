import { createContext, useEffect, useState } from "react";
import { productData } from "../assets/products";
import axios from 'axios'
import { toast } from "react-toastify";


export const ProductContext = createContext()


const ProductContextProvider = (props)=>{
    const [productsData,setProductsData] = useState(productData)


const getProducts = async()=>{
    try {
        const {data} = await axios.get('http://localhost:5000/product/show');


        if(data.success){
            setProductsData(data.products)
            
        } else {
            toast.error(data.message)
            
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message)
        
    }
}


useEffect(()=>{
getProducts()
},[])
    const value = {
        productsData
    }
 return (
    <ProductContext.Provider value={value}>
        {props.children}
    </ProductContext.Provider>
 )
}

export default ProductContextProvider