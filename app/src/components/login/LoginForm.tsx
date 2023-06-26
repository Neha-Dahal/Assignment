import React, { useState } from "react";
import { Button } from "../button/Button";
import { FormInput } from "../formInput/FormInput";
import { loginUser } from "../../services/user";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userSliceActions } from "../../redux/slice/user";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isDisabled: boolean = email === "" || password === "";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const userData = {
        email,
        password,
      };

      const response = await loginUser(userData);
      console.log(response);
      const { userId } = response;

      localStorage.setItem("authentication_token", userId);
      dispatch(userSliceActions.login(userId));

      navigate("/products", { replace: true });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="page-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <FormInput
            type="text"
            name="email"
            placeholder="Enter your email"
            label="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <FormInput
            type="password"
            name="password"
            placeholder="Enter your password"
            label="Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          Don't have an Account? <Link to="/register">Register</Link>
        </div>
        <div>
          <Button disabled={isDisabled} buttonText="Login" />
        </div>
      </form>
    </div>
  );
};
