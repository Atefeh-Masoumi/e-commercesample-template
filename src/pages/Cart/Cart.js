import { Link } from "react-router-dom";
import cartempty from '../../asset/empty cart.png'
import { useCart,useCartAction } from "../../Providers/CartProvider";
import'./cart.css';

const CartPage = () => {
    
    //global state using contex
    const {cart,total} = useCart();
    const dispatch = useCartAction();

    //when there is nothing in the cart we will show this message
    if (!cart.length)
    return (
      <>
      
        <div  className="d-flex justify-content-center"> 
        <Link to='/product' className="d-flex justify-content-center align-items-center flex-column">
            <img src={cartempty} alt="cart is empty" className="d-flex justify-content-center align-content-center w-10 h-10" />
          <h2 className="text-center hover-zoom" >Visit Product page and Come back soon!</h2>
          <button className="border-0 d-flex justify-content-center mt-3 btngoshop">Lets go Shopping </button> 
          </Link>
        </div>
      </>
      
    );

    // hadndlers for add and remove
    const incrementHandler=(cartItem)=>{
        dispatch({type:"ADD_TO_CART",payload:cartItem})
    }
    const decHandler =(cartItem)=>{
        dispatch({type:"REMOVE_PRODUCT", payload:cartItem})
    }
    return (
       <>
          
           <main className="container">
                <section className="cartCenter">
                  <section className="cartItemListcart">
                   {cart.map((item)=> {
                       return(
                       <div className="cartItem" key={item.id}>
                           <div className="itemImage d-flex">
                            <img src={item.image} alt={item.name}></img>
                                <div className="d-flex flex-column m-3">
                                
                                    <div className="row text-muted">{item.name}</div>
                                    
                                
                                </div>
                           </div>
                          
                           <div className="font-weight-bold">$ {item.offPrice* item.quantity}</div>
                          
                           <div className="btnGroup">
                           <button onClick={()=>decHandler(item)}> - </button>
                           <button>{item.quantity}</button>
                           <button onClick={()=>incrementHandler(item)}> + </button>
                           </div>
                           <div className="font-weight-bold" style={{color:"#3f9a59"}}>{item.description}</div>
                       </div>)
                   })}
                 </section>
                 {/* card panel */}
                 <section>

                 </section>
                  <CartSummary cart={cart} total={total}/>
               </section>
           </main>
       </>
     );
}
 
export default CartPage;

const CartSummary = ({total,cart})=>{
    // this function calculate the total price of the cart without discount
   const originalTotalPrice = cart.length ? cart.reduce((acc,curr)=>acc + curr.quantity * curr.price,0):0;
  
    return(
        <section className="cartSummary">

            <h2 style={{marginBottom:"20px"}}>Cart Summary</h2> 
            {/* original price of products */}
            <div className="summaryitem">
                <p>Original Total Price:</p>
                <p>{originalTotalPrice}$</p>
            </div>
            {/* total discount of products */}
            <div className="summaryitem">
                <p>cart discount:</p>
                <p>{originalTotalPrice - total}$</p>
            </div>
             {/* total price of products with discount counted */}
            <div className="summaryitem net">
                <p>cart net price:</p>
                <p>{total}$</p>
            </div>
            {/* link to check out page if user is logged in */}
            <Link to="/signup?redirect=/checkout">
            <button className="btncheckout primary text-black" style={{marginTop:"20px",width:"100%",backgroundColor:"#3f9a59"}}>Go to CheckOut</button>
            </Link>
                
        </section>
    );
};