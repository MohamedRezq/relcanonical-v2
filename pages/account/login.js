import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import cookie from "js-cookie"
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Brand from "../../components/main/Brand";

function Login() {
  const [isInvalidCred, setIsInvalidCred] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const cookies = parseCookies();

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      toast.success("Login Success");
      router.push("/");
    }

    if (cookies?.user) {
      router.push("/");
    }
  }, [router]);

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/user/login`,
        { email, password },
        config
      );
      console.log("222222222")
      console.log(data)
      toast.success(data.message);
      cookie.set("token", data?.token);
      cookie.set("user", JSON.stringify(data?.user));
      console.log("3333333333333")
      router.push("/");
    } catch (error) {
      setIsInvalidCred(!isInvalidCred)
      //toast.error(error.response.data.error);
    }
  };

  return (
    <div>
      <Head>
        <title>Access User :: Relcanonical</title>
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
                      Access User
                    </h3>
                    <p className="text-muted font-weight-bold font-size-h4">
                      we only approve business users
                    </p>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <input
                        className="form-control text-center form-control-solid h-auto p-6 rounded-lg font-size-h6"
                        type="email"
                        placeholder="Enter Your Email"
                        onChange={(e) => {
                          setUserEmail(e.target.value);
                        }}
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <input
                        className="form-control text-center form-control-solid h-auto p-6 rounded-lg font-size-h6"
                        type="password"
                        placeholder="Enter Your Password"
                        onChange={(e) => {
                          setUserPass(e.target.value);
                        }}
                        required
                        name="password"
                        label="Password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="pb-8">
                    <button
                      className="btn btn-primary font-weight-boldest font-size-h6 px-8 py-5 btn-block"
                      type="submit"
                    >
                      ACCESS
                    </button>
                  </div>
                  {isInvalidCred && (
                    <div className="text-danger mb-2">
                      Invalid credentials, please try again
                    </div>
                  )}
                  <div className="">
                    <span className="text-muted font-weight-bold font-size-h6">
                      <Link href={"/user/request"}>
                        <a>Don't have an account?</a>
                      </Link>{" "}
                      /{" "}
                      <Link href={"/user/reset"}>
                        <a>Reset user</a>
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
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
*/
export default Login;
