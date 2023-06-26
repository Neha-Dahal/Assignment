import React from "react";
import { Header } from "../components/header/Header";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="page-title">
        Not Found! Go back to <Link to="/">Home</Link>
      </div>
    </>
  );
};
