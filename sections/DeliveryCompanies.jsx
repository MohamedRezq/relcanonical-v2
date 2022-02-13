import Link from "next/link";
import Image from "next/image";

const DeliveryCompanies = () => {
  return (
    <div className="d-flex flex-column-fluid bg-white p-40">
      <div className="container">
        <div className="text-center">
          <span className="label label-info label-inline font-weight-bolder mb-8">
            USE CASES
          </span>
        </div>

        <blockquote className="blockquote text-center mb-10">
          <h2 className="mb-0 display-2 text-dark font-weight-boldest">
            Delivery Companies.
          </h2>

          <div className="my-6 font-weight-bold font-size-h4 text-dark-50">
            When we launched Relcanonical, we had one thing in mind; an
            enterprise-grade <br />
            international marketing platform that can help your business scale
            faster to the global market.
          </div>
        </blockquote>

        <div className="flex-row-fluid ml-lg-8">
          <div className="row mb-10">
            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage: "url(/assets/media/uses/food_ordering.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Food Ordering
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                We created Relcanonical so that online food delivery platforms
                can easily expand their market share to both local and
                international markets.
              </div>
              <span className="label label-light-success label-inline font-weight-bolder my-2">
                YEMEKSEPETI
              </span>
            </div>

            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/parcel_deliveries.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Parcel Deliveries
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Relcanonical allows parcel delivery companies to create
                large-scale destination pages that scale faster to millions of
                potential customers.
              </div>
              <span className="label label-light-warning label-inline font-weight-bolder my-2">
                PARCEL2GO
              </span>
            </div>

            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/car_dealerships.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Car Dealerships
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                If you own or run an online car dealership platform, you can use
                Relcanonical to attract more local and international customers.
              </div>
              <span className="label label-light-primary label-inline font-weight-bolder my-2">
                CARVANA
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/grocery_deliveries.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Grocery Deliveries
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Perhaps your grocery delivery business only targets local
                customers, with Relcanonical, it is a lot easier to scale your
                growth globally.
              </div>
              <span className="label label-light-danger label-inline font-weight-bolder my-2">
                INSTACART
              </span>
            </div>

            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/gift_deliveries.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Gift Deliveries
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Regardless, Relcanonical can help your gift delivery business
                acquire more customers from your local and international
                communities.
              </div>
              <span className="label label-light-info label-inline font-weight-bolder my-2">
                PREZZYBOX
              </span>
            </div>

            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/package_deliveries.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Package Deliveries
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Running a package delivery business can be challenging, let
                Relcanonical help you scale your growth to the global market.
              </div>
              <span className="label label-light-warning label-inline font-weight-bolder my-2">
                RAJAPACK
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCompanies;
