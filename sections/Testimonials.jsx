import Link from "next/link";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="d-flex flex-column-fluid bg-light-primary p-40">
      <div className="container">
        <div className="text-center">
          <span className="label label-primary label-inline font-weight-bolder mb-8">
            TESTIMONIALS
          </span>
        </div>
        <div className="row justify-content-center my-2">
          <div className="card-stretch text-center">
            <div
              id="stats-widget-slider-2"
              className="carousel slide"
              data-ride="carousel"
              data-interval="8000"
            >
              <div className="d-flex align-items-center justify-content-center flex-wrap">
                <div className="pt-4">
                  <a
                    href="#stats-widget-slider-2"
                    className="btn btn-icon btn-light btn-sm mr-1"
                    role="button"
                    data-slide="prev"
                  >
                    <span className="svg-icon svg-icon-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <polygon points="0 0 24 0 24 24 0 24" />
                          <path
                            d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            transform="translate(12.000003, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-12.000003, -11.999999)"
                          />
                        </g>
                      </svg>
                    </span>
                  </a>
                  <a
                    href="#stats-widget-slider-2"
                    className="btn btn-icon btn-light btn-sm"
                    role="button"
                    data-slide="next"
                  >
                    <span className="svg-icon svg-icon-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <polygon points="0 0 24 0 24 24 0 24" />
                          <path
                            d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"
                          />
                        </g>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="carousel-inner mt-6">
                <div className="carousel-item active">
                  <blockquote className="blockquote text-center mb-10">
                    <h2 className="mt-6 font-weight-bold text-dark-75">
                      Jesse Scotland saves
                    </h2>
                    <h2 className="mb-6 font-weight-boldest display-4 text-dark">
                      4.2 hours every day
                    </h2>
                    <div className="text-center mt-15">
                      <div className="">
                        <Image
                          alt="Relcanonical"
                          className="rounded-circle"
                          src="/assets/media/customers/jesse_scotland.png"
                          width="60"
                          height="60"
                        />
                        <i className="symbol-badge bg-primary"></i>
                      </div>
                      <div className="mt-4">
                        <span className="font-weight-boldest text-primary font-size-h4">
                          Jesse Scotland
                        </span>
                      </div>
                      <div className="text-dark-75 font-weight-bolder font-size-sm mt-2">
                        Head of Marketing
                      </div>
                    </div>
                  </blockquote>
                </div>
                <div className="carousel-item">
                  <blockquote className="blockquote text-center mb-10">
                    <h2 className="mt-6 font-weight-bold text-dark-75">
                      Leela Burns saves
                    </h2>
                    <h2 className="mb-6 font-weight-boldest display-4 text-dark">
                      £10,500 per month
                    </h2>
                    <div className="text-center mt-15">
                      <div className="">
                        <Image
                          alt="Relcanonical"
                          className="rounded-circle"
                          src="/assets/media/customers/leela_burns.png"
                          width="60"
                          height="60"
                        />
                        <i className="symbol-badge bg-primary"></i>
                      </div>
                      <div className="mt-4">
                        <span className="font-weight-boldest text-primary font-size-h4">
                          Leela Burns
                        </span>
                      </div>
                      <div className="text-dark-75 font-weight-bolder font-size-sm mt-2">
                        Senior Marketing Director
                      </div>
                    </div>
                  </blockquote>
                </div>
                <div className="carousel-item">
                  <blockquote className="blockquote text-center mb-10">
                    <h2 className="mt-6 font-weight-bold text-dark-75">
                      Maria Ferrari saves
                    </h2>
                    <h2 className="mb-6 font-weight-boldest display-4 text-dark">
                      7.5 hours every day
                    </h2>
                    <div className="text-center mt-15">
                      <div className="">
                        <Image
                          alt="Relcanonical"
                          className="rounded-circle"
                          src="/assets/media/customers/maria_ferrari.png"
                          width="60"
                          height="60"
                        />
                        <i className="symbol-badge bg-primary"></i>
                      </div>
                      <div className="mt-4">
                        <span className="font-weight-boldest text-primary font-size-h4">
                          Maria Ferrari
                        </span>
                      </div>
                      <div className="text-dark-75 font-weight-bolder font-size-sm mt-2">
                        Director of eCommerce
                      </div>
                    </div>
                  </blockquote>
                </div>
                <div className="carousel-item">
                  <blockquote className="blockquote text-center mb-10">
                    <h2 className="mt-6 font-weight-bold text-dark-75">
                      Romeo De Santos saves
                    </h2>
                    <h2 className="mb-6 font-weight-boldest display-4 text-dark">
                      £15,450 per month
                    </h2>
                    <div className="text-center mt-15">
                      <div className="">
                        <Image
                          alt="Relcanonical"
                          className="rounded-circle"
                          src="/assets/media/customers/romeo_de_santos.png"
                          width="60"
                          height="60"
                        />
                        <i className="symbol-badge bg-primary"></i>
                      </div>
                      <div className="mt-4">
                        <span className="font-weight-boldest text-primary font-size-h4">
                          Romeo De Santos
                        </span>
                      </div>
                      <div className="text-dark-75 font-weight-bolder font-size-sm mt-2">
                        Vice President, Marketing
                      </div>
                    </div>
                  </blockquote>
                </div>
                <div className="carousel-item">
                  <blockquote className="blockquote text-center mb-10">
                    <h2 className="mt-6 font-weight-bold text-dark-75">
                      Tyra Wallace saves
                    </h2>
                    <h2 className="mb-6 font-weight-boldest display-4 text-dark">
                      4.2 hours every day
                    </h2>
                    <div className="text-center mt-15">
                      <div className="">
                        <Image
                          alt="Relcanonical"
                          className="rounded-circle"
                          src="/assets/media/customers/tyra_wallace.png"
                          width="60"
                          height="60"
                        />
                        <i className="symbol-badge bg-primary"></i>
                      </div>
                      <div className="mt-4">
                        <span className="font-weight-boldest text-primary font-size-h4">
                          Tyra Wallace
                        </span>
                      </div>
                      <div className="text-dark-75 font-weight-bolder font-size-sm mt-2">
                        International Marketing Manager
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
