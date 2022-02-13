import Link from "next/link";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="d-flex flex-column-fluid bg-white p-40">
      <div className="container">
        <div className="text-center">
          <span className="label label-light-success label-inline font-weight-bolder mb-8">
            BENEFITS
          </span>
        </div>
        <blockquote className="blockquote text-center mb-10">
          <h2 className="mb-0 display-2 text-dark font-weight-boldest">
            We are more than 25X faster & <br />
            cheaper than hiring an agency.
          </h2>
          <div className="my-6 font-weight-bold font-size-h4 text-dark-50">
            Relcanonical is more than 99X faster to scale than any WordPress
            plugins <br />
            and more than 50X easier to manage than any landing page builder.
          </div>
        </blockquote>
        <div className="flex-row-fluid ml-lg-8">
          <div className="row">
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#012677"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="10"
                          fill="#005bc5"
                          transform="translate(4 -4) rotate(52 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#00b4fc"
                          r="16"
                          transform="translate(6 6)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#17f9ff"
                          transform="translate(-4 4) rotate(104 40 40)"
                        ></line>
                      </g>
                    </svg>
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Custom Domain
                  </div>
                  <div className="">
                    <span className="label label-light-warning label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#00b4fc"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="10"
                          fill="#17f9ff"
                          transform="translate(16 -16) rotate(136 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#001449"
                          r="16"
                          transform="translate(-15 15)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#012677"
                          transform="translate(12 12) rotate(272 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    File Management
                  </div>
                  <div className="">
                    <span className="label label-light-primary label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#012677"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="10"
                          fill="#005bc5"
                          transform="translate(18 18) rotate(132 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#00b4fc"
                          r="16"
                          transform="translate(0 0)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#17f9ff"
                          transform="translate(-4 -4) rotate(264 40 40)"
                        ></line>
                      </g>
                    </svg>
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Folder Management
                  </div>
                  <div className="">
                    <span className="label label-light-danger label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#00b4fc"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="10"
                          fill="#17f9ff"
                          transform="translate(6 6) rotate(156 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#001449"
                          r="16"
                          transform="translate(9 -9)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#012677"
                          transform="translate(12 -12) rotate(312 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Template Classes
                  </div>
                  <div className="">
                    <span className="label label-light-success label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                          transform="translate(8 8) rotate(54 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#17f9ff"
                          r="16"
                          transform="translate(-12 -12)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#001449"
                          transform="translate(-8 -8) rotate(108 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Lead Generation
                  </div>
                  <div className="">
                    <span className="label label-light-danger label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#012677"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="10"
                          fill="#005bc5"
                          transform="translate(-20 20) rotate(242 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#00b4fc"
                          r="16"
                          transform="translate(0 0)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#17f9ff"
                          transform="translate(-4 -4) rotate(124 40 40)"
                        ></line>
                      </g>
                    </svg>
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Contact Management
                  </div>
                  <div className="">
                    <span className="label label-light-info label-inline font-weight-bolder mt-2">
                      BETA
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#00b4fc"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="10"
                          fill="#17f9ff"
                          transform="translate(10 10) rotate(196 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#001449"
                          r="16"
                          transform="translate(0 0)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#012677"
                          transform="translate(12 -12) rotate(32 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Language Translation
                  </div>
                  <div className="">
                    <span className="label label-light-success label-inline font-weight-bolder mt-2">
                      BETA
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#001449"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="10"
                          fill="#012677"
                          transform="translate(0 0) rotate(150 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#005bc5"
                          r="16"
                          transform="translate(0 0)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#00b4fc"
                          transform="translate(0 0) rotate(300 40 40)"
                        ></line>
                      </g>
                    </svg>
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Built-In Globalization
                  </div>
                  <div className="">
                    <span className="label label-light-primary label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#001449"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="10"
                          fill="#012677"
                          transform="translate(20 20) rotate(170 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#005bc5"
                          r="16"
                          transform="translate(9 -9)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#00b4fc"
                          transform="translate(0 0) rotate(340 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Instant Indexing
                  </div>
                  <div className="">
                    <span className="label label-light-success label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                          height="10"
                          fill="#00b4fc"
                          transform="translate(12 -12) rotate(154 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#17f9ff"
                          r="16"
                          transform="translate(0 0)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#001449"
                          transform="translate(-8 8) rotate(308 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Content Management
                  </div>
                  <div className="">
                    <span className="label label-light-warning label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#012677"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="10"
                          fill="#005bc5"
                          transform="translate(-16 16) rotate(202 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#00b4fc"
                          r="16"
                          transform="translate(-9 -9)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#17f9ff"
                          transform="translate(-4 -4) rotate(44 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Unlimited Conversions
                  </div>
                  <div className="">
                    <span className="label label-light-info label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                          transform="translate(-16 -16) rotate(204 40 40)"
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
                          transform="translate(-8 -8) rotate(48 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Dynamic Optimization
                  </div>
                  <div className="">
                    <span className="label label-light-danger label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#00b4fc"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="80"
                          fill="#17f9ff"
                          transform="translate(-4 4) rotate(346 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#001449"
                          r="16"
                          transform="translate(12 -12)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#012677"
                          transform="translate(12 12) rotate(332 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Team Management
                  </div>
                  <div className="">
                    <span className="label label-light-primary label-inline font-weight-bolder mt-2">
                      BETA
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#012677"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="10"
                          fill="#005bc5"
                          transform="translate(0 0) rotate(222 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#00b4fc"
                          r="16"
                          transform="translate(12 -12)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#17f9ff"
                          transform="translate(-4 -4) rotate(84 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Content Generation
                  </div>
                  <div className="">
                    <span className="label label-light-danger label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#00b4fc"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="80"
                          fill="#17f9ff"
                          transform="translate(-16 16) rotate(106 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#001449"
                          r="16"
                          transform="translate(6 -6)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#012677"
                          transform="translate(12 12) rotate(212 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Strategic Interlinking
                  </div>
                  <div className="">
                    <span className="label label-light-info label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#012677"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="80"
                          fill="#005bc5"
                          transform="translate(18 -18) rotate(12 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#00b4fc"
                          r="16"
                          transform="translate(6 -6)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#17f9ff"
                          transform="translate(-4 4) rotate(24 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Built-In Localization
                  </div>
                  <div className="">
                    <span className="label label-light-warning label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#012677"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="10"
                          fill="#005bc5"
                          transform="translate(2 -2) rotate(72 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#00b4fc"
                          r="16"
                          transform="translate(-15 -15)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#17f9ff"
                          transform="translate(-4 4) rotate(144 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Strategic Tagging
                  </div>
                  <div className="">
                    <span className="label label-light-warning label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#17f9ff"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="80"
                          fill="#001449"
                          transform="translate(0 0) rotate(268 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#012677"
                          r="16"
                          transform="translate(-15 15)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#005bc5"
                          transform="translate(16 16) rotate(176 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Hierarchical Topics
                  </div>
                  <div className="">
                    <span className="label label-light-info label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#001449"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="80"
                          fill="#012677"
                          transform="translate(0 0) rotate(10 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#005bc5"
                          r="16"
                          transform="translate(15 15)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#00b4fc"
                          transform="translate(0 0) rotate(20 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Beautiful Interfaces
                  </div>
                  <div className="">
                    <span className="label label-light-success label-inline font-weight-bolder mt-2">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 text-center">
              <div className="card card-custom py-8 px-4 gutter-b">
                <div className="card-body text-center">
                  <div className="symbol symbol-circle symbol-lg-50 mb-3">
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
                        <rect width="80" height="80" fill="#17f9ff"></rect>
                        <rect
                          x="10"
                          y="30"
                          width="80"
                          height="10"
                          fill="#001449"
                          transform="translate(0 0) rotate(238 40 40)"
                        ></rect>
                        <circle
                          cx="40"
                          cy="40"
                          fill="#012677"
                          r="16"
                          transform="translate(6 6)"
                        ></circle>
                        <line
                          x1="0"
                          y1="40"
                          x2="80"
                          y2="40"
                          strokeWidth="2"
                          stroke="#005bc5"
                          transform="translate(16 16) rotate(116 40 40)"
                        ></line>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="text-dark font-weight-bolder font-size-lg">
                    Built-In Crawler
                  </div>
                  <div className="">
                    <span className="label label-light-primary label-inline font-weight-bolder mt-2">
                      ACTIVE
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

export default Benefits;
