import Link from "next/link";
import Image from "next/image";

const AffiliateWebsites = () => {
  return (
    <div className="d-flex flex-column-fluid bg-light p-40">
      <div className="container">
        <div className="text-center">
          <span className="label label-danger label-inline font-weight-bolder mb-8">
            USE CASES
          </span>
        </div>

        <blockquote className="blockquote text-center mb-10">
          <h2 className="mb-0 display-2 text-dark font-weight-boldest">
            Affiliate Websites.
          </h2>

          <div className="my-6 font-weight-bold font-size-h4 text-dark-50">
            Whether you’re looking for the best enterprise marketing strategies
            or something else, our <br />
            enterprise marketing managers are 24/7 available to help you with
            your next strategic marketing plans.
          </div>
        </blockquote>

        <div className="flex-row-fluid ml-lg-8">
          <div className="row mb-10">
            <div className="col-xl-6 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-300px mb-6"
                style={{
                  backgroundImage: "url(/assets/media/uses/online_coupons.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Online Coupons
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Online coupons are some of the best ways to monetize an
                affiliate website. Relcanonical can help you boost the revenue
                of your coupon website.
              </div>
              <span className="label label-info label-inline font-weight-bolder my-2">
                GROUPON
              </span>
            </div>

            <div className="col-xl-6 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-300px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/product_reviews.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Product Reviews
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                You can use Relcanonical to automatically create and update
                dynamic pages to promote your product review website to the
                global market.
              </div>
              <span className="label label-warning label-inline font-weight-bolder my-2">
                TRUSTPILOT
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-300px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/price_comparisons.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Price Comparisons
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Perhaps the main source of income for your affiliate website is
                through price comparison, Relcanonical can help you scale your
                growth faster.
              </div>
              <span className="label label-danger label-inline font-weight-bolder my-2">
                KELKOO
              </span>
            </div>

            <div className="col-xl-6 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-300px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/cashback_websites.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Cashback Websites
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                If you run or own a cashback website that promotes the best
                online deals, Relcanonical can help you attract shoppers with
                big-spending pockets.
              </div>
              <span className="label label-success label-inline font-weight-bolder my-2">
                SWAGBUCKS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateWebsites;
