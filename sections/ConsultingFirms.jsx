import Link from "next/link";
import Image from "next/image";

const ConsultingFirms = () => {
  return (
    <div className="d-flex flex-column-fluid bg-white p-40">
      <div className="container">
        <div className="text-center">
          <span className="label label-warning label-inline font-weight-bolder mb-8">
            USE CASES
          </span>
        </div>
        <blockquote className="blockquote text-center mb-10">
          <h2 className="mb-0 display-2 text-dark font-weight-boldest">
            Consulting Firms.
          </h2>
          <div className="my-6 font-weight-bold font-size-h4 text-dark-50">
            We pride ourselves as a large-scale international marketing
            framework that provides one of the <br />
            best strategic local marketing solutions that align with your
            company’s business goals.
          </div>
        </blockquote>
        <div className="flex-row-fluid ml-lg-8">
          <div className="row mb-10">
            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/advertising_firms.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Advertising Firms
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                If you run an advertising firm, your clients are probably in
                your local area or somewhere abroad. Relcanonical can help you
                scale.
              </div>
              <span className="label label-info label-inline font-weight-bolder my-2">
                OGILVY
              </span>
            </div>
            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/marketing_agencies.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Marketing Agencies
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                The goal of every marketing agency is to onboard and retain as
                many clients as possible. Relcanonical can help you do just
                that.
              </div>
              <span className="label label-warning label-inline font-weight-bolder my-2">
                AKQA
              </span>
            </div>
            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage: "url(/assets/media/uses/pr_agencies.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                PR Agencies
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Your public relations agency should not be restricted to serving
                one targeted area, you can use Relcanonical to penetrate the
                global market.
              </div>
              <span className="label label-success label-inline font-weight-bolder my-2">
                EDELMAN
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/immigration_agencies.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Immigration Agencies
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Whether your immigration agency only serves a specific country,
                you can use Relcanonical to create pages for different visa
                purposes.
              </div>
              <span className="label label-success label-inline font-weight-bolder my-2">
                BOUNDLESS
              </span>
            </div>
            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage:
                    "url(/assets/media/uses/educational_consultancy.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Educational Consultancy
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                You can use Relcanonical to create and scale educational pages
                that target different study programs in foreign colleges and
                universities.
              </div>
              <span className="label label-danger label-inline font-weight-bolder my-2">
                EDUCATIONS
              </span>
            </div>
            <div className="col-xl-4 text-center">
              <div
                className="bgi-no-repeat bgi-size-cover rounded min-h-200px mb-6"
                style={{
                  backgroundImage: "url(/assets/media/uses/law_firms.png)",
                }}
              ></div>
              <span className="text-dark font-weight-bolder font-size-h4">
                Law Firms
              </span>
              <div className="text-dark-50 font-weight-bold my-3">
                Law has a wide range of specialties, use Relcanonical to scale
                your law firm and attract local and international clients with
                big pockets.
              </div>{" "}
              <span className="label label-primary label-inline font-weight-bolder my-2">
                DENTONS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingFirms;
