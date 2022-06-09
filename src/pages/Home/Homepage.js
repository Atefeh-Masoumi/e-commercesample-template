
import * as data from "../../data"
import { useCart, useCartAction } from "../../Providers/CartProvider";
import { checkIncart } from "../../utils/checkinCart";
import { toast } from "react-toastify";
import Header from "../../component/Header/Header.jsx";
import Slider from "../../component/Slider/Slider.jsx";

import Footer from "../../component/Footer/FooterPage";
import'./homepage.css';
const Homepage = () => {
     const {cart} = useCart();

    const dispatch = useCartAction();
    const addProductHandler =(product)=>{
        toast.success(`${product.name} added to cart`);
        dispatch({type:"ADD_TO_CART",payload:product})

    }
    return (  
        <>
    
        <Header/>
        <section className="">
            <h2 className="text-center">Categories</h2>
        <div className="container mt-100 ">
                            		

                            	
                               
            <div className="row">
               <div className="col-md-4 col-sm-6">
                 <div className="card mb-30">
                     <a className="card-img-tiles" href="#" data-abc="true">
                     <div className="inner">
                       <div className="main-img"><img src="https://i.imgur.com/O0GMYuw.jpg" alt="Category"/></div>
                       <div className="thumblist"><img src="https://i.imgur.com/ILEU18M.jpg" alt="Category"/>
                       <img src="https://i.imgur.com/2kePJmX.jpg" alt="Category"/></div>
                     </div></a>
                   <div className="card-body text-center">
                     <h4 className="card-title">Laptops</h4>
                     <p className="text-muted">Starting from $499</p><a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">View Products</a>
                   </div>
                 </div>
               </div>
               <div className="col-md-4 col-sm-6">
                 <div className="card mb-30"><a className="card-img-tiles" href="#" data-abc="true">
                     <div className="inner">
                       <div className="main-img"><img src="https://i.imgur.com/uRgdVY1.jpg" alt="Category"/></div>
                       <div className="thumblist"><img src="https://i.imgur.com/VwSKS7A.jpg" alt="Category"/>
                       <img src="https://i.imgur.com/gTvZ2H5.jpg" alt="Category"/></div>
                     </div></a>
                   <div className="card-body text-center">
                     <h4 className="card-title">Mobiles</h4>
                     <p className="text-muted">Starting from $50</p><a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">View Products</a>
                   </div>
                 </div>
               </div>
               <div className="col-md-4 col-sm-6">
                 <div className="card mb-30"><a className="card-img-tiles" href="#" data-abc="true">
                     <div className="inner">
                       <div className="main-img"><img src="https://i.imgur.com/0jO40CF.jpg" alt="Category"/></div>
                       <div className="thumblist"><img src="https://i.imgur.com/dWYAg41.jpg" alt="Category"/><img src="https://i.imgur.com/5oQEZSC.jpg" alt="Category"/></div>
                     </div></a>
                   <div className="card-body text-center">
                     <h4 className="card-title">Accessories</h4>
                     <p className="text-muted">Starting from $9</p><a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">View Products</a>
                   </div>
                 </div>
               </div>
             </div>
             </div>
        </section>
            <main className="container bg">
            <div className="row">
                        <h2>Trending Now</h2>
                    {data.products.map((product)=>
                <div className="card-container">
                <div className="card1">
                    <div className="front">
                    <div className="logo"><img src={product.image} alt={product.name} style={{width: "300px", height: "300px"}}/></div>
                    </div>
                    <div className="back">
                    <h1 className="product-title">BUY NOW!<span>{product.name}</span></h1>
                    <div className="d-flex justify-content-center">
                        <button onClick={()=>addProductHandler(product)} className="btn primary">{checkIncart(cart,product) ? "In Cart":"Add to Cart"}</button>
                        
                    </div>
                    </div>
                    </div>
                </div>)}
                </div>
                <section className="">
                <div className="container py-5">
                    <div className="row">
                        <h2>Trending Now</h2>
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
                            className=" d-flex justify-content-center align-items-center "  />
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
                
            </main>
            <section className="bg-white">
                   <h3 className="text-center font-weight-bold"> Our Special Offer</h3>
                   <Slider/>
            </section>
           <Footer/>
        </>
        
    );
}
 
export default Homepage;
