import "./SignIn.css";

import Banner from "../../components/Banner/Banner";
import Input from "../../components/Input/Input";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { userLogin } from "../../actions/user";
import { connect } from "react-redux";

const SignIn = ({ updateUser }) => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const checkboxRef = useRef();
  const [indexTitleName, setIndexTitleName] = useState(0);

  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  useEffect(() => {
    if (usernameRef.current) usernameRef.current.value = "";
    passwordRef.current.value = "";
    emailRef.current.value = "";
    checkboxRef.current.checked = false;
  }, [indexTitleName]);
  return (
    <div className="sign-in-container">
      <Banner url={window.location.href} />
      <div className="background-wrapper">
        <div className="sign-in-wrapper">
          <div className="tab-title-name">
            <h1
              className={indexTitleName === 0 ? "active" : undefined}
              onClick={() => {
                setIndexTitleName(0);
              }}
            >
              Login
            </h1>
            <h1
              className={indexTitleName === 1 ? "active" : undefined}
              onClick={() => {
                setIndexTitleName(1);
              }}
            >
              Register
            </h1>
          </div>
          <form action="/" style={{ width: "100%" }}>
            {indexTitleName !== 0 && (
              <Input inputRef={usernameRef} label={"Username"} type={"text"} />
            )}
            <Input inputRef={emailRef} label={"Email"} type={"text"} />
            <Input
              inputRef={passwordRef}
              label={"Password"}
              type={"password"}
            />
            <div className="remember-me-container">
              <input
                ref={checkboxRef}
                id="checkbox-input"
                type="checkbox"
                style={{ marginLeft: 0, cursor: "pointer" }}
              />
              <label style={{ cursor: "pointer" }} htmlFor="checkbox-input">
                Remember me
              </label>
            </div>
            <button
              onClick={(e) => {
                const data = {
                  isLogin: indexTitleName === 0,
                  password: passwordRef.current.value,
                  email: emailRef.current.value,
                  isRememberMe: checkboxRef.current.checked,
                };
                if (!data.isLogin) {
                  data.username = usernameRef.current.value;
                  if (data.username.trim() === "") return;
                }

                if (data.password.trim() === "") return;

                if (data.email.trim() === "") return;

                e.preventDefault();
                window.localStorage.setItem("user", JSON.stringify(data));
                if(data.isLogin){
                  updateUser(data)
                }
              }}
            >
              Submit
            </button>
          </form>
          <img
            width={"100%"}
            height={"100%"}
            className="sign-in-form-image-illustrator"
            src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131336/marcus-hot-honey-chicken-and-cornbread-waffles-kit-for-4.618df9b9613b506f65c8342ab2e28b32.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(userLogin(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
