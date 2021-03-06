import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Brand from "../../../components/main/Brand";

function Register() {
  const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("")
  //const [conPassword, setConPassword] = useState("")
  const [firstName, setFirstName] = useState("");
  //const [lastName, setLastName] = useState("")
  //const router = useRouter()
  const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter()
  const { data: session } = useSession();

  const cookies = parseCookies;

  useEffect(() => {
    if (session) {
      router.push("/");
    }

    if (cookies?.user) {
      router.push("/");
    }
  }, [router, isRegistered]);

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      /*if (password !== conPassword) {
        toast.error("passwords do not match!")
        // console.log("passwords do not match")
        return
      }*/

      const user = cookies?.user
        ? JSON.parse(cookies.user)
        : session?.user
        ? session?.user
        : "";

      //console.log(email, password, firstName, lastName)

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/user/register`,
        { email, firstName },
        config
      );
      const { emailVerify } = await axios.post(
        `/api/user/verify`,
        { email, firstName },
        config
      );
      router.push(`/account/request/confirm/${firstName}`)
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <Head>
        <title>Request User :: Relcanonical</title>
      </Head>

      <div className="d-flex flex-column flex-root">
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
          id="kt_login"
        >
          <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-20 mx-auto">
            <div className="d-flex flex-column-fluid flex-center text-center">
              <div className="login-form login-signup">
                <form className="" onSubmit={SubmitHandler}>
                  <div className="text-center pb-8">
                    <Link href={"/"}>
                      <a>
                        <Image
                          alt="Relcanonical Logo"
                          src="/assets/media/logos/logo_primary_letter.png"
                          width="20"
                          height="20"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="pb-4">
                    <h3 className="font-weight-boldest text-dark font-size-h4 display-4">
                      Request User
                    </h3>
                    <p className="text-muted font-weight-bold font-size-h4">
                      we only approve business users
                    </p>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <input
                        className="form-control text-center   h-auto p-6 rounded-lg font-size-h6"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        required
                        id="firstName"
                        label="First Name"
                        autoFocus
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <input
                        className="form-control text-center   h-auto p-6 rounded-lg font-size-h6"
                        type="email"
                        placeholder="Business Email"
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="pb-8">
                    <button
                      className="btn btn-primary font-weight-boldest font-size-h6 px-8 py-5 btn-block"
                      type="submit"
                    >
                      Request
                    </button>
                  </div>
                  <div className="">
                    <span className="text-muted font-weight-bold font-size-h6">
                      <Link href={"/user/access"}>
                        <a className="mr-2">access account</a>
                      </Link>
                      <Link href={"/user/reset"}>
                        <a className="ml-2">reset account</a>
                      </Link>
                    </span>
                  </div>
                </form>
                <Brand />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
*/
export default Register;
