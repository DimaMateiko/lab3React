import React, { useState } from 'react'
import banner1 from "./../img/banner_img_01.jpg";
import banner2 from "./../img/banner_img_02.jpg";
import banner3 from "./../img/banner_img_03.jpg";
import shop2 from "./../img/shop_02.jpg";
import featureProd1 from "./../img/feature_prod_01.jpg"
import featureProd2 from "./../img/feature_prod_02.jpg"
import featureProd3 from "./../img/feature_prod_03.jpg"
import Slider from './Slider';
import LoginForm from './LoginForm';

export default function Main() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
   
    
    <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="w-100 pt-1 mb-5 text-right">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form action="" method="get" className="modal-content modal-body border-0 p-0">
          <div className="input-group mb-2">
            <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
            <button type="submit" className="input-group-text bg-success text-light">
              <i className="fa fa-fw fa-search text-white"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="text-center my-4">
        <button className="btn btn-outline-success" onClick={() => setShowLogin(prev => !prev)}>
          Show Login Form
        </button>
      </div>

      {/* Условное отображение формы */}
      {showLogin && <LoginForm />}
    
    <Slider/>
    
    
    <section className="container py-5">
      <div className="row text-center pt-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Product of The Month</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 p-5 mt-3 text-center">
          <img src={shop2} className="rounded-circle img-fluid border" />
          <h2 className="h5 text-center mt-3 mb-3">Women dress</h2>
          <p className="text-center"><a className="btn btn-success" href="./ShopPages/productOfTheMonth_page.html">Go to the product</a></p>
        </div>
      </div>
    </section>
    
    <section className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Featured Product</h1>
            <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <a href="./ShopPages/flashlight_page.html">
                <img src={featureProd1} className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                  <li className="text-muted text-right">$240.00</li>
                </ul>
                <a href="./ShopPages/flashlight_page.html" className="h2 text-decoration-none text-dark">Flashlight</a>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <a href="./ShopPages/watch_page.html">
                <img src={featureProd2} className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                  <li className="text-muted text-right">$480.00</li>
                </ul>
                <a href="./ShopPages/watch_page.html" className="h2 text-decoration-none text-dark">Watch</a>
                <p className="card-text">Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <a href="./ShopPages/polaroid_page.html">
                <img src={featureProd3} className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                  <li className="text-muted text-right">$360.00</li>
                </ul>
                <a href="./ShopPages/polaroid_page.html" className="h2 text-decoration-none text-dark">Polaroid</a>
                <p className="card-text">Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    </>
  )
}

