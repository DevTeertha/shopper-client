import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getStorage, setStorage } from '../src/components/localStorageHandler'
import LoginForm from '../src/components/LoginRegister/LoginForm'
import Navbar from '../src/components/navbar/Navbar'

const Login = () => {
    const router = useRouter();
    const loginState = useSelector((state: any) => state.login);
    useEffect(() => {
        if (getStorage('userToken')) {
            router.push("/");
        } else {
            if (Object.keys(loginState.user).length) {
                setStorage('userToken', loginState.user.token);
                setStorage('userName', loginState.user.data.name);
                setStorage('userEmail', loginState.user.data.email);
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
    )
}

export default Login;