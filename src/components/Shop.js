import React from "react";
import { Link } from "react-router-dom";
import shop1 from "./../img/shop_01.jpg";
import shop2 from "./../img/shop_02.jpg";
import shop3 from "./../img/shop_03.jpg";
import shop4 from "./../img/shop_04.jpg";
import shop5 from "./../img/shop_05.jpg";
import shop6 from "./../img/shop_06.jpg";
import shop7 from "./../img/shop_07.jpg";
import shop8 from "./../img/shop_08.jpg";
import shop9 from "./../img/shop_09.jpg";

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

import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Shop() {
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

      <div className="container py-5 goida2">
        <div className="row justify-content-center">
          <div className="col-lg-9 content-element">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6 pb-4">
                <div className="d-flex"></div>
              </div>
            </div>

            <div className="row row-shop-picture goida justify-content-center g-3">
              <div className="col-sm-6 col-md-4 col-lg-3 shop-picture d-flex justify-content-center">
                <div className="card product-wap rounded-0">
                  <Link to="/first">
                    <div className="card rounded-0">
                      <img className="card-img rounded-0 img-fluid" src={shop1} alt="Product" />
                      <div className="card-img-overlay product-overlay d-flex align-items-center justify-content-center"></div>
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <a href="./ShopPages/second_page.html" className="h5 text-decoration-none">
                      Women glasses
                    </a>
                    <p className="mb-0">$20.00</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 shop-picture">
                <div className="card product-wap rounded-0">
                  <Link to="/second">
                    <div className="card rounded-0">
                      <img className="card-img rounded-0 img-fluid" src={shop2} alt="Product" />
                      <div className="card-img-overlay product-overlay d-flex align-items-center justify-content-center"></div>
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <a href="./ShopPages/productOfTheMonth_page.html" className="h5 text-decoration-none">
                      Women dress
                    </a>
                    <p className="mb-0">$35.00</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 shop-picture">
                <div className="card product-wap rounded-0">
                  <Link to="/third">
                    <div className="card rounded-0">
                      <img className="card-img rounded-0 img-fluid" src={shop3} alt="Product" />
                      <div className="card-img-overlay product-overlay d-flex align-items-center justify-content-center"></div>
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <a href="./ShopPages/third_page.html" className="h5 text-decoration-none">
                      Women top & skirt
                    </a>
                    <p className="mb-0">$30.00</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 shop-picture">
                <div className="card product-wap rounded-0">
                  <Link to="/fourth">
                    <div className="card rounded-0">
                      <img className="card-img rounded-0 img-fluid" src={shop4} alt="Product" />
                      <div className="card-img-overlay product-overlay d-flex align-items-center justify-content-center"></div>
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <a href="./ShopPages/forth_page.html" className="h5 text-decoration-none">
                      Men shirt
                    </a>
                    <p className="mb-0">$15.00</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 shop-picture">
                <div className="card product-wap rounded-0">
                  <a href="./ShopPages/fifth_page.html">
                    <div className="card rounded-0">
                      <img className="card-img rounded-0 img-fluid" src={shop5} />
                      <div className="card-img-overlay product-overlay d-flex align-items-center justify-content-center"></div>
                    </div>
                  </a>
                  <div className="card-body text-center">
                    <a href="./ShopPages/fifth_page.html" className="h5 text-decoration-none">
                      Men jacket
                    </a>
                    <p className="mb-0">$50.00</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 shop-picture">
                <div className="card product-wap rounded-0">
                  <a href="./ShopPages/sixth_page.html">
                    <div className="card rounded-0">
                      <img className="card-img rounded-0 img-fluid" src={shop6} />
                      <div className="card-img-overlay product-overlay d-flex align-items-center justify-content-center"></div>
                    </div>
                  </a>
                  <div className="card-body text-center">
                    <a href="./ShopPages/sixth_page.html" className="h5 text-decoration-none">
                      Women dress
                    </a>
                    <p className="mb-0">$40.00</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 shop-picture">
                <div className="card product-wap rounded-0">
                  <a href="./ShopPages/seventh_page.html">
                    <div className="card rounded-0">
                      <img className="card-img rounded-0 img-fluid" src={shop7} />
                      <div className="card-img-overlay product-overlay d-flex align-items-center justify-content-center"></div>
                    </div>
                  </a>
                  <div className="card-body text-center">
                    <a href="./ShopPages/seventh_page.html" className="h5 text-decoration-none">
                      Men jacket
                    </a>
                    <p className="mb-0">$25.00</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 shop-picture">
                <div className="card product-wap rounded-0">
                  <a href="./ShopPages/eighth_page.html">
                    <div className="card rounded-0">
                      <img className="card-img rounded-0 img-fluid" src={shop8} />
                      <div className="card-img-overlay product-overlay d-flex align-items-center justify-content-center"></div>
                    </div>
                  </a>
                  <div className="card-body text-center">
                    <a href="./ShopPages/eighth_page.html" className="h5 text-decoration-none">
                      Women sport costume
                    </a>
                    <p className="mb-0">$25.00</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 shop-picture">
                <div className="card product-wap rounded-0">
                  <a href="./ShopPages/ninth_page.html">
                    <div className="card rounded-0">
                      <img className="card-img rounded-0 img-fluid" src={shop9} />
                      <div className="card-img-overlay product-overlay d-flex align-items-center justify-content-center"></div>
                    </div>
                  </a>
                  <div className="card-body text-center">
                    <a href="./ShopPages/ninth_page.html" className="h5 text-decoration-none">
                      Women sweatshirt
                    </a>
                    <p className="mb-0">$15.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-light py-5 goida3">
        <div className="container my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Our Brands</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-lg-9 m-auto tempaltemo-carousel">
              <div className="row d-flex flex-row">
                <div className="col-1 align-self-center">
                  <a className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                    <i className="text-light fas fa-chevron-left"></i>
                  </a>
                </div>

                <div className="col">
                  <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                    <div className="carousel-inner product-links-wap" role="listbox">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img className="img-fluid brand-img" src={brand1} alt="Brand Logo" />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img className="img-fluid brand-img" src={brand2} alt="Brand Logo" />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img className="img-fluid brand-img" src={brand3} alt="Brand Logo" />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img className="img-fluid brand-img" src={brand4} alt="Brand Logo" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <a href="https://www.thrashermagazine.com/">
                              <img className="img-fluid brand-img" src={brand5} alt="Brand Logo" />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="https://www.reebok.com/">
                              <img className="img-fluid brand-img" src={brand6} alt="Brand Logo" />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="https://www.ralphlauren.com/">
                              <img className="img-fluid brand-img" src={brand7} alt="Brand Logo" />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="https://www.lacoste.com/nl/">
                              <img className="img-fluid brand-img" src={brand8} alt="Brand Logo" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <a href="https://www.gucci.com/nl/en_gb/">
                              <img className="img-fluid brand-img" src={brand9} alt="Brand Logo" />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="https://www.prada.com/nl/en.html">
                              <img className="img-fluid brand-img" src={brand10} alt="Brand Logo" />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="https://www.louisvuitton.com/dispatch?noDRP=true">
                              <img className="img-fluid brand-img" src={brand11} alt="Brand Logo" />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="https://eu.puma.com/nl/nl/home">
                              <img className="img-fluid brand-img" src={brand12} alt="Brand Logo" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-1 align-self-center">
                  <a className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                    <i className="text-light fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
