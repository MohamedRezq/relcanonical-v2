import Link from "next/link";
import Image from "next/image";
import Header from "../components/main/Header";
import { useEffect } from "react";
import cookie from "js-cookie";
import { useSession, signIn, signOut } from "next-auth/react";

const Banner = () => {
  const { data: session } = useSession();
  if(cookie) {
    const user = JSON.parse(cookie.get("user"));
  }else {
    const user = null;
  }
  console.log(cookie)
  return (
    <div className="d-flex flex-column-fluid bg-light-warning pt-15 pb-40">
      <div className="container">
        <div className="mb-6 text-center">
          <Link href={"/"}>
            <a>
              <Image
                alt="Relcanonical"
                src="/assets/media/logos/logo_primary_letter.png"
                width="30"
                height="30"
              />
            </a>
          </Link>
          <div className="container d-flex flex-column flex-md-row justify-content-md-center p-4">
            <Header />
          </div>
        </div>
        {cookie && (
          <div className="my-6 font-weight-bold font-size-h4 text-dark-50 text-center">
            Hello, {user.name}
          </div>
        )}
        <blockquote className="blockquote text-center mb-10">
          <h2 className="mb-0 display-1 text-dark font-weight-boldest">
            Get your pages <u>crawled</u>, <br />
            <u>indexed</u>, & <u>ranked</u> 3X faster.
          </h2>
          <div className="my-6 font-weight-bold font-size-h4 text-dark-50">
            Relcanonical is a relcanonical platform that makes it faster,
            easier, and cheaper for <br />
            search engines to rank the most important pages on your Relcanonical
            Templates.
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
                <div className="text-muted">Custom Domain</div>
              </li>
              <li className="breadcrumb-item font-weight-bolder text-muted">
                <div className="text-muted">File Management</div>
              </li>
              <li className="breadcrumb-item font-weight-bolder text-muted">
                <div className="text-muted">Built-In Localization</div>
              </li>
            </ul>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default Banner;
