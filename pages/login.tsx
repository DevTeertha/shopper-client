import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getStorage } from '../src/components/localStorageHandler'
import LoginForm from '../src/components/LoginRegister/LoginForm'
import Navbar from '../src/components/navbar/Navbar'

const Login = () => {
    const router = useRouter();
    const loginState = useSelector((state: any) => state.login);
    useEffect(() => {
        if (getStorage('userToken')) {
            router.push("/");
        } else {
            router.push("/login");
        }
    }, [loginState])

    return (
        <>
            <Navbar />
            <LoginForm />
        </>
    )
}

export default Login;