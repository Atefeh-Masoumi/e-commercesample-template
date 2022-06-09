
import * as data from "../../data"
import { useCart, useCartAction } from "../../Providers/CartProvider";
import { checkIncart } from "../../utils/checkinCart";
import { toast } from "react-toastify";
import Header from "../../component/Header/Header.jsx";
import Slider from "../../component/Slider/Slider.jsx";

import Footer from "../../component/Footer/FooterPage";

const Homepage = () => {
     const {cart} = useCart();

    const dispatch = useCartAction();
    const addProductHandler =(product)=>{
        toast.success(`${product.name} added to cart`);
        dispatch({type:"ADD_TO_CART",payload:product})

    }
    return (  
        <div className="">
    
        <Header/>
            <main className="container bg ">
                
                <section>
                <div className="container py-5">
                    <div className="row">
                        <h2>Special offer</h2>
                    {data.products.map((product)=>
                    <div className="col-md-12 col-lg-4 mb-4 " key={product.id}>
                        <div className="card  hover-zoom">
                        <div className="d-flex justify-content-between p-3">
                            <p className="lead mb-0">Our Product</p>
                            <div
                            className=" rounded-5  justify-content-center shadow-1-strong "
                            style={{width: "auto", height: "35px",backgroundColor:"var(--myred)"}}>
                            <p className="text-white p-1 mb-0 small"> {product.combo} </p>
                            </div>
                        </div>
                        <img src={product.image} alt={product.name}
                            className=" d-flex justify-content-center align-items-center "  style={{width: "150px", height: "150px"}}/>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                            <p className="small"><a href="/product" className="text-muted">Laptops</a></p>
                            <p className="small text-danger"><s>${product.price}</s></p>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">{product.name}</h5>
                            <h5 className="text-dark mb-0">$ {product.offPrice}</h5>
                            </div>

                            <div className="d-flex justify-content-between mb-2">
                            <p className="text-muted mb-0">Available: <span className="fw-bold">6</span></p>
                            <div className="ms-auto text-warning">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            </div>
                            <button onClick={()=>addProductHandler(product)} className="btn primary">{checkIncart(cart,product) ? "In Cart":"Add to Cart"}</button>
                        </div>
                        </div>
                    </div>
                    
                    
                )}
                </div>
                </div>
                </section>
                <section>
                   <Slider/>
                </section>
            </main>
            
           <Footer/>
        </div>
        
    );
}
 
export default Homepage;
