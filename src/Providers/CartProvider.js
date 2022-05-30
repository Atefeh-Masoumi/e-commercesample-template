import {  createContext, useContext, useReducer,useEffect } from "react";
import cartReducer from "./CartReducer";

const CartContex = createContext();
const CartContexDispatcher = createContext();

const initialState={
    cart:[],
    total:0,
};
const CartProvider=({children})=>{
    const[cart, dispatch]= useReducer(cartReducer,initialState);
    
    // if there are items in local storage, add them to the cart
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("cart")) || [];
        data.map((i) => dispatch({ type: "ADD_TO_CART", payload: i }));
      }, []);
    return(
        <CartContex.Provider value={cart}>
            <CartContexDispatcher.Provider value={dispatch}>
                {children}
            </CartContexDispatcher.Provider>
        </CartContex.Provider>
    )
}

export default CartProvider;

export const useCart =()=>useContext(CartContex);
export const useCartAction=()=> useContext(CartContexDispatcher);