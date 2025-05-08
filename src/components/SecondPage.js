import React from "react";

import productSingle10 from "./../img/shop_02.jpg";

export default function SecondPage() {
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

      <section className="bg-light">
        <div className="container pb-5">
          <div className="row d-flex align-items-start">
            <div className="col-lg-5 mt-5 p-0">
              <div className="card mb-0 border-0">
                <img className="card-img img-fluid" src={productSingle10} alt="Card image cap" id="product-detail" />
              </div>
            </div>

            <div className="col-lg-7 mt-5">
              <div className="card border-0">
                <div className="card-body">
                  <h1 className="h2">Active Wear</h1>
                  <p className="h3 py-2">$25.00</p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Brand:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted">
                        <strong>Easy Wear</strong>
                      </p>
                    </li>
                  </ul>
                  <h6>Description:</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Available Color :</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted">
                        <strong>White / Black</strong>
                      </p>
                    </li>
                  </ul>
                  <h6>Specification:</h6>
                  <ul className="list-unstyled pb-3">
                    <li>Lorem ipsum dolor sit</li>
                    <li>Amet, consectetur</li>
                    <li>Adipiscing elit,set</li>
                    <li>Duis aute irure</li>
                    <li>Ut enim ad minim</li>
                    <li>Dolore magna aliqua</li>
                    <li>Excepteur sint</li>
                  </ul>
                  <form action="" method="GET">
                    <input type="hidden" name="product-title" value="Activewear" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
