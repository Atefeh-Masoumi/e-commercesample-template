import'./productpage.css';
import * as data from "../../data"
const ProductPage = () => {
  return (
   <div className='container'>
     <div className='row'>
          <div className="col-md-6 mb-4 d-flex ">
          <span className="m-2 font-weight-bold">Sort By: </span>
          <select className="md-form">
            <option value="0"  selected>All Product</option>
            <option value="1">Best selling</option>
            <option value="2">Newest</option>
            <option value="3">Highest Price</option>
            <option value="4">Lowest Price</option>
          </select>
          </div>
{/* product list */}
              
        
<section>
  <div class="container py-5">
    <div class="row justify-content-center mb-3">
      <div class="col-md-12 col-xl-10">
        {data.products.map((product)=>
        <div class="card shadow-0 border rounded-3 mb-3">
          <div class="card-body" key={product.id}>
            <div class="row">
              <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div class="bg-image hovereffect ripple rounded ripple-surface">
                  <img src={product.image} alt={product.alt}
                    class="w-100 img1 position-absolute " />
                    <img src={product.imageback} alt={product.alt}
                    class="w-100 " />
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <h5>{product.name}</h5>
                <div class="d-flex flex-row">
                  <div class="text-danger mb-1 me-2">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <span>310</span>
                </div>
                <div class="mt-1 mb-0 text-muted small">
                  <span>100% original</span>
                  <span class="text-primary"> • </span>
                  <span>Light weight</span>
                  <span class="text-primary"> • </span>
                  <span>Best finish<br /></span>
                </div>
                <div class="mb-2 text-muted small">
                  <span>Unique design</span>
                  <span class="text-primary"> • </span>
                  <span>For men</span>
                  <span class="text-primary"> • </span>
                  <span>Casual<br /></span>
                </div>
                <p class="text-truncate mb-4 mb-md-0">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </p>
              </div>
              <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div class="d-flex flex-row align-items-center mb-1">
                  <h4 class="mb-1 me-1">${product.offPrice}</h4>
                  <span class="text-danger"><s>${product.price}</s></span>
                </div>
                <h6 class="text-success">Free shipping</h6>
                <div class="d-flex flex-column mt-4">
                  <button class="btn btn-primary btn-sm" type="button">Details</button>
                  <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
    
    
  </div>
</section>
          
      </div>
    </div> 
  )
}
export default ProductPage;
