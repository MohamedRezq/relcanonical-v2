import Link from "next/link";
import Image from "next/image";

const OnlineMarketplaces = () => {
  return (
    <div className="d-flex flex-column-fluid bg-light-primary p-40">
      <div className="container">
        <div className="text-center">
          <span className="label label-success label-inline font-weight-bolder mb-8">
            USE CASES
          </span>
        </div>

        <blockquote className="blockquote text-center mb-10">
          <h2 className="mb-0 display-2 text-dark font-weight-boldest">
            Online Marketplaces.
          </h2>

          <div className="my-6 font-weight-bold font-size-h4 text-dark-50">
            We’re a team of international marketing experts and when you work
            with us, we can help you <br />
            with various enterprise marketing techniques i.e. enterprise keyword
            research & content optimization.
          </div>
        </blockquote>

        <div className="flex-row-fluid ml-lg-8">
          <div className="row mb-10">
            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage: "url(/assets/media/uses/real_estate.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Real Estate
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                At Relcanonical, we help real estate marketplaces to build pages
                around their local and international targeted markets.
              </div>
              <span className="label label-danger label-inline font-weight-bolder my-2">
                ZILLOW
              </span>
            </div>

            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage: "url(/assets/media/uses/digital_health.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Digital Health
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                With Relcanonical, digital health marketplaces can attract more
                physicians and patients for their innovative telemedicine
                services.
              </div>
              <span className="label label-primary label-inline font-weight-bolder my-2">
                ZOCDOC
              </span>
            </div>

            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage: "url(/assets/media/uses/online_rentals.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Online Rentals
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                If you run an online rental business such as a car or vacation
                rental marketplace, Relcanonical might be your best shot for
                scalability.
              </div>
              <span className="label label-warning label-inline font-weight-bolder my-2">
                AIRBNB
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/travel_agencies.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Travel Agencies
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Relcanonical is one of the fewest enterprise marketing
                frameworks that help online travel marketplaces to scale faster
                to the global market.
              </div>
              <span className="label label-info label-inline font-weight-bolder my-2">
                KAYAK
              </span>
            </div>

            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/professional_services.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Professional Services
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Relcanonical helps professional marketplaces to dominate their
                market without spending too much on social media and search
                engine ads.
              </div>
              <span className="label label-danger label-inline font-weight-bolder my-2">
                UPWORK
              </span>
            </div>

            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/online_retailers.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Online Retailers
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Maybe you have an online retail marketplace and looking forward
                to expanding to the global market, Relcanonical can help you
                with that.
              </div>
              <span className="label label-success label-inline font-weight-bolder my-2">
                ETSY
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineMarketplaces;
