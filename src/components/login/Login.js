import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import { Col } from "react-bootstrap";
import "./Login.css";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const auth = useAuth();

  const submitForm = (data) => {
    auth.login(data);
    reset();
  };

  return (
    <Col lg={12}>
      <div className="main-div">
        <form className="app-wrapper" onSubmit={handleSubmit(submitForm)}>
          <h2 className="title">Login</h2>

          <input
            type="text"
            className="name input mx-1 my-4"
            placeholder="Enter Username..."
            name="email"
            {...register("email")}
          ></input>
          <p className="error">{errors.email?.message}</p>

          <input
            type="password"
            className="password input mx-1 my-4"
            placeholder="Enter Password..."
            name="password"
            {...register("password")}
          ></input>
          <p className="error">{errors.password?.message}</p>

          <button className="submit my-5" type="">
            Login
          </button>
          <Link to={"/signup"}>SignUp</Link>
        </form>
      </div>
    </Col>
  );
}

export default Login;
