import { React } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../auth";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function SignUp() {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    auth.signup(data);
    reset();
  };

  return (
    <Col lg={12}>
      <div className="main-div">
        <form className="app-wrapper" onSubmit={handleSubmit(submitForm)}>
          <h2 className="title">Sign Up</h2>

          <input
            type="text"
            className="name input mx-1 my-3"
            placeholder="Enter Firstname..."
            name="firstName"
            {...register("firstName")}
          ></input>
          <p className="error">{errors.firstName?.message}</p>
          <input
            type="text"
            className="name input mx-1 my-3"
            placeholder="Enter Lastname..."
            name="lastName"
            {...register("lastName")}
          ></input>
          <p className="error">{errors.lastName?.message}</p>

          <input
            type="text"
            className="email input mx-1 my-3"
            placeholder="Enter Email..."
            name="email"
            {...register("email")}
          ></input>
          <p className="error">{errors.email?.message}</p>

          <input
            type="password"
            className="password input mx-1 my-3"
            placeholder="Set Password..."
            name="password"
            {...register("password")}
          ></input>
          <p className="error">{errors.password?.message}</p>

          <input
            type="password"
            className="password input mx-1 my-3"
            placeholder="Confirm Password..."
            name="confirmPassword"
            {...register("confirmPassword")}
          ></input>

          <p className="error">
            {errors.confirmPassword && "Passwords should match"}
          </p>

          <button className="submit my-1">SignUp</button>
          <Link to={"/login"}>Login?</Link>
        </form>
      </div>
    </Col>
  );
}

export default SignUp;
