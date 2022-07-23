import catpc1 from "../../asset/cat-pc-1.jpg";
import catpc2 from "../../asset/pc-cat-2.jpg";
import catpc3 from "../../asset/pc-cat-3.jpg";
import catmob1 from "../../asset/cat-mob-1.jpg";
import catmob2 from "../../asset/cat-mob-2.jpg";
import catmob3 from "../../asset/cat-mob-3.jpg";
import Accessories1 from "../../asset/Accessories-cat-1.jpg";
import Accessories2 from "../../asset/Accessories-cat-2.jpg";
import Accessories3 from "../../asset/Accessories-cat-3.jpg";
import * as data from "../../data";
import { useCart, useCartAction } from "../../Providers/CartProvider";
import { checkIncart } from "../../utils/checkinCart";
import { toast } from "react-toastify";
import Header from "../../component/Header/Header.jsx";
import Slider from "../../component/Slider/Slider.jsx";

import Footer from "../../component/Footer/FooterPage";
import "./homepage.css";
const Homepage = () => {
  //cart contex
  const { cart } = useCart();

  const dispatch = useCartAction();
  const addProductHandler = (product) => {
    toast.success(`${product.name} added to cart`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <>
      {/* header slider */}

      <Header />
      {/* Categories section */}
      <section className="mt-100">
        <h2 className="text-center">Categories</h2>
        <div className="container mt-100 ">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="card mb-30">
                <a className="card-img-tiles" href="/products" data-abc="true">
                  <div className="inner">
                    <div className="main-img">
                      <img src={catpc1} alt="Category" />
                    </div>
                    <div className="thumblist">
                      <img src={catpc2} alt="Category" />
                      <img src={catpc3} alt="Category" />
                    </div>
                  </div>
                </a>
                <div className="card-body text-center">
                  <h4 className="card-title">Laptops</h4>
                  <p className="text-muted">Starting from $499</p>
                  <a
                    className="btn btn-outline-primary btn-sm"
                    href="/products"
                    data-abc="true"
                  >
                    View Products
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-30">
                <a className="card-img-tiles" href="/products" data-abc="true">
                  <div className="inner">
                    <div className="main-img">
                      <img src={catmob1} alt="Category" />
                    </div>
                    <div className="thumblist">
                      <img src={catmob2} alt="Category" />
                      <img src={catmob3} alt="Category" />
                    </div>
                  </div>
                </a>
                <div className="card-body text-center">
                  <h4 className="card-title">Mobiles</h4>
                  <p className="text-muted">Starting from $50</p>
                  <a
                    className="btn btn-outline-primary btn-sm"
                    href="/products"
                    data-abc="true"
                  >
                    View Products
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-30">
                <a className="card-img-tiles" href="/products" data-abc="true">
                  <div className="inner">
                    <div className="main-img">
                      <img src={Accessories1} alt="Category" />
                    </div>
                    <div className="thumblist">
                      <img src={Accessories2} alt="Category" />
                      <img src={Accessories3} alt="Category" />
                    </div>
                  </div>
                </a>
                <div className="card-body text-center">
                  <h4 className="card-title">Accessories</h4>
                  <p className="text-muted">Starting from $9</p>
                  <a
                    className="btn btn-outline-primary btn-sm"
                    href="/products"
                    data-abc="true"
                  >
                    View Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trending section */}
      </section>
      <main className="container bgcolor ">
        <div className="row row-hompage">
          <h2 className="text-center p-4 textstyle animatedtext">
            Trending Now!
          </h2>
          {data.products.map((product) => (
            <div className="card-container p-2" key={product.id}>
              <div className="card1">
                <div className="front">
                  <div className="card-img">
                    <img src={product.image} alt={product.name} />
                  </div>
                </div>
                <div className="back">
                  <h1 className="product-title">
                    BUY NOW!<span className="mt-5">{product.name}</span>
                  </h1>
                  <div className="d-flex justify-content-center hover-zoom">
                    <button
                      onClick={() => addProductHandler(product)}
                      className="m-2 rounded border-success  hover-shadow"
                    >
                      {checkIncart(cart, product) ? "In Cart" : "Add to Cart"}
                    </button>
                    <button className="m-2 rounded border-2 border-primary hover-shadow-soft">
                      <a href="/productdetail">View Detail</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* New Product dection Section  */}
      <section className="bg-white mt-100">
        <h3 className="text-center font-weight-bold mb-6 ">
          
          Look at New amazing Product
        </h3>
        <Slider />
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
