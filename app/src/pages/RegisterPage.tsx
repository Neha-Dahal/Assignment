import { Header } from "../components/header/Header";
import { RegisterForm } from "../components/register/RegisterForm";

export const RegisterPage = () => {
  return (
    <>
      <Header />{" "}
      <div>
        <RegisterForm />
      </div>
    </>
  );
};
