import'./productpage.css';

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

          
      </div>
    </div> 
  )
}
export default ProductPage;
