import "./productpage.css";
import { useState } from 'react';
import * as data from "../../data";
import searchicon from '../../asset/searchproductpage.svg'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter } from 'mdb-react-ui-kit';

const ProductPage = () => {
  //search modal
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  //search function
  const[filter,setFilter] = useState([]);
    const handleSearch=(e)=>{
      const searchWord = e.target.value;
      const newFilter = data.products.filter((value)=>{
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      })
      setFilter(newFilter);

    }
      
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex ">
          <div className="col-md-6 mb-4 d-flex mt-50 col-sm-6">
            <span className="m-2 font-weight-bold">Sort By: </span>
            <select className="md-form">
              <option value="0" defaultValue className="">
                All Product
              </option>
              <option value="1">Best selling</option>
              <option value="2">Newest</option>
              <option value="3">Highest Price</option>
              <option value="4">Lowest Price</option>
            </select>
          </div>
          {/* search  */}
          <div className="search ">
            <div>
            <div className='d-flex '>
                     <input name='searchbar' type="text" placeholder='Search...'  className="searchinput" onChange={handleSearch} onClick={toggleShow}/>
                  
                    <img src={searchicon} className="searchproduct" />
                  </div>
            </div>
          </div>
        </div>

        {filter.length !== 0 && (
          <div className='d-flex row' >
            {filter.map(( value, key)=>{
              return <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>Modal title</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>

                  

                  <MDBCard style={{ maxWidth: '22rem' }}>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={value.image} fluid alt={value.name} />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{value.name}</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <MDBBtn href='productdetail'>Detailpage</MDBBtn>
              </MDBCardBody>
            </MDBCard>



                  </MDBModalBody>
        
                  <MDBModalFooter>
                    <MDBBtn color='secondary' onClick={toggleShow}>
                      Close
                    </MDBBtn>
                    <MDBBtn>Save changes</MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
              
              
              
              
              
            })}
            
          </div>
        )}

        {/* product list */}
        <section>
          <div className="container py-5">
            <div className="row justify-content-center mb-3">
              <div className="col-md-12 col-xl-10">
                {data.products.map((product) => (
                  <div className="card shadow-0 border rounded-3 mb-3" key={product.id}>
                    <div className="card-body" >
                      <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0 p-3">
                          <div className="bg-image hovereffect ripple rounded ripple-surface ">
                            <img
                              src={product.image}
                              alt={product.alt}
                              className="w-100 img1 position-absolute w-100 h-100"
                            />
                            <img
                              src={product.imageback}
                              alt={product.alt}
                              className=" w-100 h-100"
                            />
                            <a href="#!">
                              <div className="hover-overlay">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(253, 253, 253, 0.15)",
                                  }}
                                ></div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                          <h5>{product.name}</h5>
                          <div className="d-flex flex-column">
                            <span>Key Features</span>
                            <div className="d-flex flex-column">
                              <li>{product.description[0]}</li>
                              <li>{product.description[1]}</li>
                              <li>{product.description[2]}</li>
                            </div>
                          </div>
                          <div className="mt-1 mb-0 text-muted small">
                            <span>Unique design</span>
                            <span className="text-primary"> • </span>
                            <span>Free and easy returns</span>
                            <span className="text-primary"> • </span>
                            <span>
                              2 Year Warranty
                              <br />
                            </span>
                          </div>

                          <p className="text-truncate mb-4 mb-md-0">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable.
                          </p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                          <div className="d-flex flex-row align-items-center mb-1">
                            <h4 className="mb-1 me-1">${product.offPrice}</h4>
                            <span className="text-danger">
                              <s>${product.price}</s>
                            </span>
                          </div>
                          <h6 className="text-success">
                            {product.shippingInfo}
                          </h6>
                          <div className="d-flex flex-column mt-4">
                            <button
                              className="btn btn-primary btn-sm"
                              type="button"
                            >
                              <a href="/productdetail">Details</a>
                            </button>
                            <button
                              className="btn btn-outline-primary btn-sm mt-2"
                              type="button"
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ProductPage;
