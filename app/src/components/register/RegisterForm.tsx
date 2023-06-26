import React, { useState } from "react";
import { FormInput } from "../formInput/FormInput";
import { Button } from "../button/Button";
import { registerUser } from "../../services/user";
import { Link, useNavigate } from "react-router-dom";

interface RegisterCredentials {
  username: string;
  email: string;
  address: string;
  phone: string;
  gender: string;
  password: string;
}

export const RegisterForm = () => {
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    username: "",
    email: "",
    address: "",
    phone: "",
    gender: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { username, email, password, address, phone, gender } = credentials;
      const userData = {
        username,
        email,
        password,
        address,
        phone,
        gender,
      };
      await registerUser(userData);
      setCredentials({
        username: "",
        email: "",
        address: "",
        phone: "",
        gender: "",
        password: "",
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const isDisabled: boolean =
    credentials.username === "" ||
    credentials.email === "" ||
    credentials.address === "" ||
    credentials.phone === "" ||
    credentials.gender === "" ||
    credentials.password === "";

  return (
    <div className="container">
      <h2 className="page-title">Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <FormInput
            type="text"
            name="username"
            placeholder="Enter your username"
            value={credentials.username}
            label="Username *"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <FormInput
            type="email"
            name="email"
            placeholder="Enter your email"
            value={credentials.email}
            label="Email *"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <FormInput
            type="password"
            name="password"
            placeholder="Enter your password"
            value={credentials.password}
            label="Password *"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <FormInput
            type="text"
            name="address"
            placeholder="Enter your address"
            value={credentials.address}
            label="Address *"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <FormInput
            type="text"
            name="phone"
            placeholder="Enter your phone"
            value={credentials.phone}
            label="Phone *"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <FormInput
            value={credentials.gender}
            onChange={handleInputChange}
            placeholder="Enter your gender"
            name="gender"
            type="text"
            label="Gender *"
          />
        </div>
        <div>
          Already have an Account? <Link to="/login">Login</Link>
        </div>
        <div>
          <Button disabled={isDisabled} buttonText="Sign up" />
        </div>
      </form>
    </div>
  );
};
