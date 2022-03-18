import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { setStorage } from "../src/components/localStorageHandler";
import RegisterForm from "../src/components/LoginRegister/RegisterForm";
import Navbar from "./../src/components/navbar/Navbar";
import { useRouter } from "next/router";
import { NextPage } from "next";

const Register: NextPage = () => {
  const router = useRouter();
  const loginState = useSelector((state: any) => state.login);
  useEffect(() => {
    if (Object.keys(loginState.user).length) {
      setStorage("userToken", loginState.user.token);
      router.push("/");
    }
  }, [loginState]);
  return (
    <>
      <Navbar />
      <RegisterForm />
    </>
  );
};

export default Register;
