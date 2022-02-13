import Link from "next/link";
import Image from "next/image";

const OnlineStores = () => {
  return (
    <div className="d-flex flex-column-fluid bg-white p-40">
      <div className="container">
        <div className="text-center">
          <span className="label label-primary label-inline font-weight-bolder mb-8">
            USE CASES
          </span>
        </div>

        <blockquote className="blockquote text-center mb-10">
          <h2 className="mb-0 display-2 text-dark font-weight-boldest">
            Online Stores.
          </h2>

          <div className="my-6 font-weight-bold font-size-h4 text-dark-50">
            We have a team of experienced local marketing professionals that can
            assist you with the best <br />
            eCommerce marketing practices that can help your business scale to
            millions globally.
          </div>
        </blockquote>

        <div className="flex-row-fluid ml-lg-8">
          <div className="row mb-10">
            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/fashion_retailers.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Fashion Retailers
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Relcanonical is built so that fashion retailers can create
                dynamic pre-sale pages that scale to millions of potential
                online shoppers.
              </div>
              <span className="label label-light-info label-inline font-weight-bolder my-2">
                ZALANDO
              </span>
            </div>

            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage: "url(/assets/media/uses/toy_shops.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Toy Shops
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Relcanonical helps online toy shops to optimize their
                hierarchical product pages to communicate better with active
                digital buyers.
              </div>
              <span className="label label-light-danger label-inline font-weight-bolder my-2">
                HAMLEYS
              </span>
            </div>

            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage: "url(/assets/media/uses/pet_supplies.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Pet Supplies
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                For pet businesses that sell online, Relcanonical is the best
                enterprise marketing framework to scale your online store for
                pet supplies.
              </div>
              <span className="label label-light-success label-inline font-weight-bolder my-2">
                PETCO
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/cosmetics_shops.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Cosmetics Shops
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                If you run or own an online cosmetics shop, Relcanonical can
                help you launch new product lines and sell faster to more
                international shoppers.
              </div>
              <span className="label label-light-danger label-inline font-weight-bolder my-2">
                SEPHORA
              </span>
            </div>

            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/home_applicances.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Home Appliances
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Maybe your eCommerce store is all about home appliances, with
                Relcanonical, you can create pre-sale pages that scale faster.
              </div>
              <span className="label label-light-info label-inline font-weight-bolder my-2">
                WICKES
              </span>
            </div>

            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/electronics_stores.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Electronics Stores
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Online retailers that focus on electronics can use Relcanonical
                to dominate your market, be it on a local or international
                scale.
              </div>
              <span className="label label-light-warning label-inline font-weight-bolder my-2">
                CURRYS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineStores;
