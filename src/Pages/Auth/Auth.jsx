import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const [loader, setLoader] = useState({
    signIn: false,
    signUp: false,
  });
  const navigate = useNavigate();
  const navStateData = useLocation();

  // console.log(user);

  const authHandler = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    if (e.target.name == "signin") {
      setLoader({ ...loader, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoader({ ...loader, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoader({ ...loader, signIn: false });
        });
    } else {
      setLoader({ ...loader, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoader({ ...loader, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoader({ ...loader, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo  */}
      <Link to={"/"}>
        <img
          src="https://pngimg.com/uploads/amazon/small/amazon_PNG1.png"
          alt=""
        />
      </Link>

      {/* form  */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >{navStateData?.state?.msg}</small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login_signInBtn}
          >
            {loader.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and
          Privacy Notice.
        </p>

        {/*create acc btn  */}
        <button
          type="submit"
          name="singup"
          onClick={authHandler}
          className={classes.login_registerBtn}
        >
          {loader.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create Your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
