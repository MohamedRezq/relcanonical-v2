import Link from "next/link";
import Image from "next/image";

const Customers = () => {
  return (
    <div className="d-flex flex-column-fluid bg-light p-40">
      <div className="container">
        <div className="text-center">
          <span className="label label-success label-inline font-weight-bolder mb-8">
            CUSTOMERS
          </span>
        </div>
        <blockquote className="blockquote text-center mb-10">
          <h2 className="mb-0 display-2 text-dark font-weight-boldest">
            Helpful questions asked and answered by customers.
          </h2>
          <div className="my-6 font-weight-bold font-size-h4 text-dark-50">
            If you are still curious about what Relcanonical is or does, you can{" "}
            <br />
            read from some of the top questions and answers from our customers.
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
                <div className="text-muted">Language Translation</div>
              </li>
              <li className="breadcrumb-item font-weight-bolder text-muted">
                <div className="text-muted">Built-In Globalization</div>
              </li>
              <li className="breadcrumb-item font-weight-bolder text-muted">
                <div className="text-muted">Instant Indexing</div>
              </li>
            </ul>
          </div>
        </blockquote>
        <div className="flex-row-fluid">
          <div className="card card-custom gutter-b">
            <div className="card-body px-30 py-25">
              <div
                className="accordion accordion-light accordion-toggle-arrow"
                id="faqContents"
              >
                <div className="card">
                  <div className="card-header" id="faqHeader01">
                    <div
                      className="card-title font-size-h4"
                      data-toggle="collapse"
                      data-target="#faqContent01"
                    >
                      What is Relcanonical?
                    </div>
                  </div>
                  <div
                    id="faqContent01"
                    className="collapse show"
                    data-parent="#faqContents"
                  >
                    <div className="card-body">
                      <div className="text-dark-50 font-weight-bold font-size-h5 pb-5">
                        I know that marketing is not new, but Relcanonical is an
                        enterprise marketing framework that helps large websites
                        grow more than 99X faster, cheaper, and easier than any
                        alternatives I have ever used or seen in 20 years.{" "}
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mr-5">
                          <Image
                            alt="Relcanonical"
                            className="rounded-circle"
                            src="/assets/media/customers/ahmad_hamza.png"
                            width="50"
                            height="50"
                          />
                          <i className="symbol-badge bg-warning"></i>
                        </span>
                        <div className="d-flex flex-column text-left">
                          <span className="text-dark font-weight-bolder font-size-lg">
                            Ahmad Hamza
                          </span>
                          <span className="text-muted font-weight-bold">
                            International Marketing Director, Poolstock,
                            England, United Kingdom
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeader02">
                    <div
                      className="card-title font-size-h4 collapsed"
                      data-toggle="collapse"
                      data-target="#faqContent02"
                    >
                      How does Relcanonical work?
                    </div>
                  </div>
                  <div
                    id="faqContent02"
                    className="collapse"
                    data-parent="#faqContents"
                  >
                    <div className="card-body">
                      <div className="text-dark-50 font-weight-bold font-size-h5 pb-5">
                        Our first experience with Relcanonical was an easy one.
                        This is what we did. First, we connected our custom
                        domain, added a CSV file, and added an image folder.
                        Second, we then used the domain, file, and folder to
                        create a unique template class. Three, we selected a
                        template class and submitted a form using the variables
                        from the CSV file. And lastly, our dynamic pages are
                        shown on our custom domain.
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mr-5">
                          <Image
                            alt="Relcanonical"
                            className="rounded-circle"
                            src="/assets/media/customers/ana_schmidt.png"
                            width="50"
                            height="50"
                          />
                          <i className="symbol-badge bg-primary"></i>
                        </span>
                        <div className="d-flex flex-column text-left">
                          <span className="text-dark font-weight-bolder font-size-lg">
                            Ana Schmidt
                          </span>
                          <span className="text-muted font-weight-bold">
                            eCommerce Marketing Manager, Chicago, Illinois,
                            United States
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeader03">
                    <div
                      className="card-title font-size-h4 collapsed"
                      data-toggle="collapse"
                      data-target="#faqContent03"
                    >
                      Why should I use Relcanonical?
                    </div>
                  </div>
                  <div
                    id="faqContent03"
                    className="collapse"
                    data-parent="#faqContents"
                  >
                    <div className="card-body">
                      <div className="text-dark-50 font-weight-bold font-size-h5 pb-5">
                        What amazes me the most about Relcanonical is that it is
                        more than 99X faster to scale than any WordPress
                        plugins, more than 50X easier to manage than any website
                        or landing page builder, and more than 25X cheaper to
                        afford than hiring an agency.
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mr-5">
                          <Image
                            alt="Relcanonical"
                            className="rounded-circle"
                            src="/assets/media/customers/brooks_lloyd.png"
                            width="50"
                            height="50"
                          />
                          <i className="symbol-badge bg-danger"></i>
                        </span>
                        <div className="d-flex flex-column text-left">
                          <span className="text-dark font-weight-bolder font-size-lg">
                            Brooks Lloyd
                          </span>
                          <span className="text-muted font-weight-bold">
                            Marketing Manager, Berlin, Berlin Region, Germany
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeader04">
                    <div
                      className="card-title font-size-h4 collapsed"
                      data-toggle="collapse"
                      data-target="#faqContent04"
                    >
                      How much does Relcanonical cost?
                    </div>
                  </div>
                  <div
                    id="faqContent04"
                    className="collapse"
                    data-parent="#faqContents"
                  >
                    <div className="card-body">
                      <div className="text-dark-50 font-weight-bold font-size-h5 pb-5">
                        I switched from using an agency to Relcanonical. Now, I
                        can save over £18,750 per month. Relcanonical only costs
                        £300 to £500 per month. A perfect alternative does not
                        exist yet on the internet.
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mr-5">
                          <Image
                            alt="Relcanonical"
                            className="rounded-circle"
                            src="/assets/media/customers/chelsea_harris.png"
                            width="50"
                            height="50"
                          />
                          <i className="symbol-badge bg-success"></i>
                        </span>
                        <div className="d-flex flex-column text-left">
                          <span className="text-dark font-weight-bolder font-size-lg">
                            Chelsea Harris
                          </span>
                          <span className="text-muted font-weight-bold">
                            Digital Marketing Manager, Toronto, Ontario, Canada
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeader05">
                    <div
                      className="card-title font-size-h4 collapsed"
                      data-toggle="collapse"
                      data-target="#faqContent05"
                    >
                      How can I learn more about Relcanonical?{" "}
                    </div>
                  </div>
                  <div
                    id="faqContent05"
                    className="collapse"
                    data-parent="#faqContents"
                  >
                    <div className="card-body">
                      <div className="text-dark-50 font-weight-bold font-size-h5 pb-5">
                        The account executives at Relcanonical are not only
                        friendly but also, they are so quick at answering
                        questions through emails. The best way to reach them is
                        via sales@relcanonical.com, that works for me.
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="mr-5">
                          <Image
                            alt="Relcanonical"
                            className="rounded-circle"
                            src="/assets/media/customers/dan_jacobs.png"
                            width="50"
                            height="50"
                          />
                          <i className="symbol-badge bg-warning"></i>
                        </span>
                        <div className="d-flex flex-column text-left">
                          <span className="text-dark font-weight-bolder font-size-lg">
                            Dan Jacobs
                          </span>
                          <span className="text-muted font-weight-bold">
                            Content Marketing Specialist, Scapoli, Scapoli
                            Region, Italy
                          </span>
                        </div>
                      </div>
                    </div>
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

export default Customers;
