import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getStorage, setStorage } from "../src/components/localStorageHandler";
import LoginForm from "../src/components/LoginRegister/LoginForm";
import Navbar from "../src/components/navbar/Navbar";

const Login: NextPage = () => {
  const router = useRouter();
  const loginState = useSelector((state: any) => state.login);
  useEffect(() => {
    if (getStorage("userToken")) {
      router.push("/");
    } else {
      if (Object.keys(loginState.user).length) {
        setStorage("userToken", loginState.user.token);
        router.push("/");
      }
      router.push("/login");
    }
  }, [loginState]);

  return (
    <>
      <Navbar />
      <LoginForm />
    </>
  );
};

export default Login;
