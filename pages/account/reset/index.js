import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const email = result.get("email");

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`/api/user/forget`, { email }, config);

    console.log(data);
  };

  return (
    <div>
      <Head>
        <title>Reset Account :: Relcanonical</title>
      </Head>

      <div className="d-flex flex-column flex-root">
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
          id="kt_login"
        >
          <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-20 mx-auto">
            <div className="d-flex flex-column-fluid flex-center text-center">
              <div className="login-form login-signup">
                <form className="" onSubmit={handleSubmit}>
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
                      Reset Account
                    </h3>
                    <p className="text-muted font-weight-bold font-size-h4">
                      it only takes a few seconds
                    </p>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <input
                        className="form-control text-center form-control-solid h-auto p-6 rounded-lg font-size-h6"
                        type="email"
                        placeholder="Enter Your Email"
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <input
                        className="form-control text-center form-control-solid h-auto p-6 rounded-lg font-size-h6"
                        type="text"
                        disabled
                        placeholder="Hey, accountName"
                      />
                    </div>
                  </div>
                  <div className="pb-8">
                    <Link href="">
                      <a
                        className="btn btn-primary font-weight-boldest font-size-h6 px-8 py-5 btn-block"
                        type="submit"
                      >
                        RESET
                      </a>
                    </Link>
                  </div>
                  <div className="">
                    <span className="text-muted font-weight-bold font-size-h6">
                      <Link href={"/account/access"}>
                        <a>access account</a>
                      </Link>{" "}
                      /{" "}
                      <Link href={"/account/request"}>
                        <a>request account</a>
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
