import React from "react";

function Product() {
  return (
    <div>
      {/* <!-- start Featured Product --> */}
      <div className="featured_Product pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3 mt-5">
              <h2 className="text-center">Featured Product</h2>
            </div>
            <div className="col-md-12 mb-5">
              <p className="text-center">
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla
                <br />
                pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
            {/* <!-- start cards imges --> */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                    className="card-img-top"
                    alt="Skyscrapers"
                  />
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                      </li>
                      <p className="text-secondary text-right opacity-75">
                        $240.00
                      </p>
                    </ul>
                    <h3 className="card-title">Card title</h3>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div className="card-footer pt-0 border-0">
                    <small className="text-secondary opacity-75">
                      Reviews (24)
                    </small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                    className="card-img-top"
                    alt="Skyscrapers"
                  />
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                      </li>
                      <p className="text-secondary text-right opacity-75">
                        $240.00
                      </p>
                    </ul>
                    <h3 className="card-title">Card title</h3>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div className="card-footer pt-0 border-0">
                    <small className="text-secondary opacity-75">
                      Reviews (24)
                    </small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                    className="card-img-top"
                    alt="Skyscrapers"
                  />
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                      </li>
                      <p className="text-secondary text-right opacity-75">
                        $240.00
                      </p>
                    </ul>
                    <h3 className="card-title">Card title</h3>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div className="card-footer pt-0 border-0">
                    <small className="text-secondary opacity-75">
                      Reviews (24)
                    </small>
                  </div>
                </div>
              </div>
              {/* <!-- End cards imges --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Featured Product --> */}
    </div>
  );
}
export default Product;
