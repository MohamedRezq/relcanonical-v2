import Link from "next/link";
import Image from "next/image";

const BusinessListings = () => {
  return (
    <div className="d-flex flex-column-fluid bg-light p-40">
        <div className="container">
          <div className="text-center">
            <span className="label label-warning label-inline font-weight-bolder mb-8">
              USE CASES
            </span>
          </div>

          <blockquote className="blockquote text-center mb-10">
            <h2 className="mb-0 display-2 text-dark font-weight-boldest">
              Business Listings.
            </h2>

            <div className="my-6 font-weight-bold font-size-h4 text-dark-50">
              When shopping around for the best enterprise marketing management,
              it’s always crucial to choose <br />a local marketing software
              that is best aligned with your business needs; revenue.
            </div>
          </blockquote>

          <div className="flex-row-fluid ml-lg-8">
            <div className="row mb-10">
              <div className="col-xl-6 text-center">
                <div
                  className="bgi-no-repeat bgi-size-cover rounded min-h-300px mb-6"
                  style={{
                    backgroundImage:
                      "url(/assets/media/uses/local_activities.png)",
                  }}
                ></div>
                <span className="text-dark font-weight-bolder font-size-h3">
                  Local Activities
                </span>
                <div className="text-dark-50 font-weight-bold my-3">
                  If you are in the business of listing the local activities in
                  specific geographical locations, Relcanonical can help you
                  attract more customers.
                </div>
                <span className="label label-danger label-inline font-weight-bolder my-2">
                  TRIPADVISOR
                </span>
              </div>

              <div className="col-xl-6 text-center">
                <div
                  className="bgi-no-repeat bgi-size-cover rounded min-h-300px mb-6"
                  style={{
                    backgroundImage:
                      "url(/assets/media/uses/local_businesses.png)",
                  }}
                ></div>
                <span className="text-dark font-weight-bolder font-size-h3">
                  Local Businesses
                </span>
                <div className="text-dark-50 font-weight-bold my-3">
                  Maybe your business is about local business listings, you can
                  use Relcanonical to acquire more businesses to list on your
                  platform.
                </div>
                <span className="label label-info label-inline font-weight-bolder my-2">
                  YELP
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6 text-center">
                <div
                  className="bgi-no-repeat bgi-size-cover rounded min-h-300px mb-6"
                  style={{
                    backgroundImage: "url(/assets/media/uses/local_events.png)",
                  }}
                ></div>
                <span className="text-dark font-weight-bolder font-size-h3">
                  Local Events
                </span>
                <div className="text-dark-50 font-weight-bold my-3">
                  You can use Relcanonical to create and update large-scale
                  pages for any sort of local events that can be promoted on
                  your website.
                </div>
                <span className="label label-success label-inline font-weight-bolder my-2">
                  EVENTBRITE
                </span>
              </div>

              <div className="col-xl-6 text-center">
                <div
                  className="bgi-no-repeat bgi-size-cover rounded min-h-300px mb-6"
                  style={{
                    backgroundImage:
                      "url(/assets/media/uses/local_professionals.png)",
                  }}
                ></div>
                <span className="text-dark font-weight-bolder font-size-h3">
                  Local Professionals
                </span>
                <div className="text-dark-50 font-weight-bold my-3">
                  Relcanonical is a perfect match if you are in the business of
                  listing and promoting local professionals from specific
                  locations in the world.
                </div>
                <span className="label label-warning label-inline font-weight-bolder my-2">
                  THUMBTACK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BusinessListings