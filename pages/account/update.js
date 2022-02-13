import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Brand from "../../components/main/Brand";

const Update = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  const { data: session } = useSession();

  const cookies = parseCookies;

  useEffect(() => {
    if (session) {
      toast.success("Login Success");
      router.push("/");
    }
    if(!session) {
        router.push("/account/login");
    }
    if (cookies?.user) {
      router.push("/");
    }
  }, [router]);

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (password !== conPassword) {
        toast.error("passwords do not match!");
        // console.log("passwords do not match")
        return;
      }

      const user = cookies?.user
        ? JSON.parse(cookies.user)
        : session?.user
        ? session?.user
        : "";

      console.log(email, password, firstName, lastName);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/user/register`,
        { email, password, firstName, lastName },
        config
      );

      toast.success(data?.message);
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.error);
    }
  };
  
  return (
    <div>
      <Head>
        <title>Update Account :: Relcanonical</title>
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
                      Update Account
                    </h3>
                    <p className="text-muted font-weight-bold font-size-h4">
                      it only takes a few seconds
                    </p>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <input
                        className="form-control text-center   h-auto p-6 rounded-lg font-size-h6"
                        type="password"
                        placeholder="Enter new password"
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
                    <Link href="">
                      <a
                        className="btn btn-primary font-weight-boldest font-size-h6 px-8 py-5 btn-block"
                        type="submit"
                      >
                        SAVE
                      </a>
                    </Link>
                  </div>
                  <div className="">
                    <span className="text-muted font-weight-bold font-size-h6">
                      <Link href={"/account"}>
                        <a>view account</a>
                      </Link>
                      <Link href={"/"}>
                        <a>exit account</a>
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
};

export default Update;
