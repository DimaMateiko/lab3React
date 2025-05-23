import React from 'react'
import aboutHero from "./../img/about-hero.svg";

import brand1 from "./../img/brand_01.png";
import brand2 from "./../img/brand_02.png";
import brand3 from "./../img/brand_03.png";
import brand4 from "./../img/brand_04.png";
import brand5 from "./../img/brand_05.png";
import brand6 from "./../img/brand_06.png";
import brand7 from "./../img/brand_07.png";
import brand8 from "./../img/brand_08.png";
import brand9 from "./../img/brand_09.png";
import brand10 from "./../img/brand_10.png";
import brand11 from "./../img/brand_11.png";
import brand12 from "./../img/brand_12.png";
import 'font-awesome/css/font-awesome.min.css';
import Navigation from './Navigation';

export default function About() {
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

    <section className="bg-success py-5">
      <div className="container">
        <div className="row align-items-center py-5">
          <div className="col-md-8 text-white">
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-md-4">
            <img src={aboutHero} alt="About Hero" />
          </div>
        </div>
      </div>
    </section>
    
    <section className="container py-5">
      <div className="row text-center pt-5 pb-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Our Services</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3 pb-5">
          <div className="h-100 py-5 services-icon-wap shadow">
            <div className="h1 text-success text-center"><i className="fa fa-truck fa-lg"></i></div>
            <h2 className="h5 mt-4 text-center">Delivery Services</h2>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 pb-5">
          <div className="h-100 py-5 services-icon-wap shadow">
            <div className="h1 text-success text-center"><i className="fa fa-percent"></i></div>
            <h2 className="h5 mt-4 text-center">Shipping & Return</h2>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 pb-5">
          <div className="h-100 py-5 services-icon-wap shadow">
            <div className="h1 text-success text-center"><i className="fa fa-percent"></i></div>
            <h2 className="h5 mt-4 text-center">Promotion</h2>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 pb-5">
          <div className="h-100 py-5 services-icon-wap shadow">
            <div className="h1 text-success text-center"><i className="fa fa-user"></i></div>
            <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
          </div>
        </div>
      </div>
    </section>
    
    <section className="bg-light py-5">
      <div className="container my-4">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Our Brands</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-lg-9 m-auto tempaltemo-carousel">
            <div className="row d-flex flex-row">
              
              <div className="col-1 align-self-center">
                <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                  <i className="text-light fas fa-chevron-left"></i>
                </a>
              </div>
              
              <div className="col">
                <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">
                  
                  <div className="carousel-inner product-links-wap" role="listbox">
                    
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src={brand1} alt="Brand Logo" />
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src={brand2} alt="Brand Logo" />
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src={brand3} alt="Brand Logo" />
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src={brand4} alt="Brand Logo" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src={brand5} alt="Brand Logo" />
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src={brand6} alt="Brand Logo" />
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src={brand7} alt="Brand Logo" />
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src={brand8} alt="Brand Logo" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src={brand9} alt="Brand Logo" />
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src={brand10} alt="Brand Logo" />
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src={brand11} alt="Brand Logo" />
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src={brand12} alt="Brand Logo" />
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
              

             
              <div className="col-1 align-self-center">
                <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                  <i className="text-light fas fa-chevron-right"></i>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    </>
  )
}
