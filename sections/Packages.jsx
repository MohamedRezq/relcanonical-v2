import Link from "next/link";
import Image from "next/image";

const Packages = () => {
  return (
    <div className="d-flex flex-column-fluid bg-warning p-40">
      <div className="container">
        <div className="text-center">
          <span className="label label-white label-inline font-weight-bolder mb-8">
            PACKAGES
          </span>
        </div>

        <blockquote className="blockquote text-center mb-10">
          <h2 className="mb-0 display-2 text-dark font-weight-boldest">
            Affordable pricing for <br />
            scalable solutions is a steal.
          </h2>

          <div className="my-6 font-weight-bold font-size-h4 text-dark-75">
            Relcanonical packages range between £300 to £500 per month. That is{" "}
            <br />
            more than 25X cheaper than hiring an agency that costs over £20,000
            per month.
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
                <div className="text-dark-50">Template Classes</div>
              </li>
              <li className="breadcrumb-item font-weight-bolder text-muted">
                <div className="text-dark-50">Lead Generation</div>
              </li>
              <li className="breadcrumb-item font-weight-bolder text-muted">
                <div className="text-dark-50">Contact Management</div>
              </li>
            </ul>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default Packages;
