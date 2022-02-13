import Link from "next/link";
import Image from "next/image";

const Solutions = () => {
  return (
    <div className="d-flex flex-column-fluid bg-white p-40">
      <div className="container">
        <div className="text-center">
          <span className="label label-light-primary label-inline font-weight-bolder mb-8">
            SOLUTIONS
          </span>
        </div>
        <blockquote className="blockquote text-center mb-10">
          <h2 className="mb-0 display-2 text-dark font-weight-boldest">
            From online marketplaces <br />
            to stores, you are all welcome.
          </h2>
          <div className="my-6 font-weight-bold font-size-h4 text-dark-50">
            Yes! We pride Relcanonical as the first enterprise marketing
            framework in the world <br />
            that is not only affordable but also easier to manage and faster to
            scale.
          </div>
          <Link href={"mailto:sales@relcanonical.com?subject=Request Account"}>
            <a className="btn btn-primary font-weight-boldest btn-lg font-size-md pull-left btn-shadow mr-2 px-12 py-5">
              REQUEST ACCOUNT
            </a>
          </Link>
          <Link href={"mailto:sales@relcanonical.com?subject=Contact Support"}>
            <a className="btn btn-bg-white btn-white font-weight-boldest btn-lg font-size-md pull-right btn-shadow px-12 py-5">
              CONTACT SUPPORT
            </a>
          </Link>
          <div className="container d-flex flex-column flex-md-row justify-content-md-center pt-4">
            <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
              <li className="breadcrumb-item font-weight-bolder text-muted">
                <div className="text-muted">Content Management</div>
              </li>
              <li className="breadcrumb-item font-weight-bolder text-muted">
                <div className="text-muted">Unlimited Conversions</div>
              </li>
              <li className="breadcrumb-item font-weight-bolder text-muted">
                <div className="text-muted">Dynamic Optimization</div>
              </li>
            </ul>
          </div>
        </blockquote>
        <div className="flex-row-fluid ml-lg-8">
          <div className="row">
            <div className="col-xl-4">
              <div className="card card-custom gutter-b">
                <div className="card-body text-center px-15 py-20">
                  <div className="symbol symbol-circle symbol-lg-60">
                    <svg
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                    >
                      <mask
                        id="mask__bauhaus"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="80"
                        height="80"
                      >
                        <rect
                          width="80"
                          height="80"
                          rx="160"
                          fill="white"
                        ></rect>
                      </mask>
                      <g mask="url(#mask__bauhaus)">
                        <rect width="80" height="80" fill="#005bc5"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="80"
                          fill="#00b4fc"
                          transform="translate(4 4) rotate(94 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#17f9ff"
                          r="16"
                          transform="translate(-9 -9)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#001449"
                          transform="translate(-8 8) rotate(188 40 40)"
                        ></line>
                      </g>
                    </svg>
                  </div>
                  <div className="mt-4">
                    <span className="font-weight-bolder text-primary font-size-h4">
                      Location-Based
                    </span>
                  </div>
                  <div className="text-muted font-weight-bold mb-3 mt-2">
                    Relcanonical is created for location-based businesses that
                    plan to scale to the global market.
                  </div>
                  <div className="">
                    <span className="label label-light-danger label-inline font-weight-bolder">
                      LOCATIONS
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card card-custom gutter-b">
                <div className="card-body text-center px-15 py-20">
                  <div className="symbol symbol-circle symbol-lg-60">
                    <svg
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                    >
                      <mask
                        id="mask__bauhaus"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="80"
                        height="80"
                      >
                        <rect
                          width="80"
                          height="80"
                          rx="160"
                          fill="white"
                        ></rect>
                      </mask>
                      <g mask="url(#mask__bauhaus)">
                        <rect width="80" height="80" fill="#005bc5"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="80"
                          fill="#00b4fc"
                          transform="translate(10 10) rotate(34 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#17f9ff"
                          r="16"
                          transform="translate(3 3)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#001449"
                          transform="translate(-8 -8) rotate(68 40 40)"
                        ></line>
                      </g>
                    </svg>
                  </div>
                  <div className="mt-4">
                    <span className="font-weight-bolder text-primary font-size-h4">
                      Topical-Based
                    </span>
                  </div>
                  <div className="text-muted font-weight-bold mb-3 mt-2">
                    Relcanonical is built for topical-based businesses that want
                    to scale across specific topics.
                  </div>

                  <div className="">
                    <span className="label label-light-success label-inline font-weight-bolder">
                      TOPICS
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card card-custom gutter-b">
                <div className="card-body text-center px-15 py-20">
                  <div className="symbol symbol-circle symbol-lg-60">
                    <svg
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                    >
                      <mask
                        id="mask__bauhaus"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="80"
                        height="80"
                      >
                        <rect
                          width="80"
                          height="80"
                          rx="160"
                          fill="white"
                        ></rect>
                      </mask>
                      <g mask="url(#mask__bauhaus)">
                        <rect width="80" height="80" fill="#005bc5"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="80"
                          fill="#00b4fc"
                          transform="translate(14 -14) rotate(354 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#17f9ff"
                          r="16"
                          transform="translate(6 6)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#001449"
                          transform="translate(-8 8) rotate(348 40 40)"
                        ></line>
                      </g>
                    </svg>
                  </div>
                  <div className="mt-4">
                    <span className="font-weight-bolder text-primary font-size-h4">
                      Segment-Based
                    </span>
                  </div>
                  <div className="text-muted font-weight-bold mb-3 mt-2">
                    Relcanonical is used by segmented-based businesses that plan
                    to scale to targeted segments.
                  </div>
                  <div className="">
                    <span className="label label-light-warning label-inline font-weight-bolder">
                      SEGMENTS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
