import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerAction } from '../../redux/Actions/loginAction';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [isEmptyRegisterInfo, setIsEmptyRegisterInfo] = useState({
        name: false,
        email: false,
        password: false,
        confirm_password: false
    })
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    });
    let newIsEmptyRegisterInfo: any = { ...isEmptyRegisterInfo }
    let newUserInfo: any = { ...registerInfo };
    const registerInfoChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value) {
            const key: string = e.target.name;
            newUserInfo[key] = e.target.value;
            newIsEmptyRegisterInfo[key] = false;
            setRegisterInfo(newUserInfo);
            setIsEmptyRegisterInfo(newIsEmptyRegisterInfo);
        } else {
            const key: string = e.target.name;
            newIsEmptyRegisterInfo[key] = true;
            setIsEmptyRegisterInfo(newIsEmptyRegisterInfo);
        }
    }

    const registerHandler = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        const formId: any = document.getElementById('register_form');
        formId.reset();
        if (registerInfo.name && registerInfo.email && registerInfo.password && registerInfo.confirm_password) {
            if (registerInfo.password === registerInfo.confirm_password) {
                dispatch(registerAction(registerInfo.name, registerInfo.email, registerInfo.password))
            } else {
                alert("Password not matched! Try Again!");
            }
        } else {
            alert("All fileds must be required!");
        }
    }
    return (
        <div className='container mx-auto px-4'>
            <div className='h-screen flex bg-gray-bg1'>
                <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                    <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                        Register your account
                    </h1>

                    <form id='register_form' onSubmit={(e: React.SyntheticEvent) => registerHandler(e)}>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <input
                                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => registerInfoChangeHandler(e)}
                                name='name'
                                type='text'
                                className={`w-full orm-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid ${isEmptyRegisterInfo.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-emerald-600'} rounded transition ease-in-out m-0 focus:text-gray-700 focus:outline-none`}
                                id='name'
                                placeholder='Your Name'
                            />
                            {isEmptyRegisterInfo.name && <p className='text-red-600'>Name is required!</p>}
                        </div>
                        <div className='pt-5'>
                            <label htmlFor='email'>Email</label>
                            <input
                                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => registerInfoChangeHandler(e)}
                                name='email'
                                type='email'
                                className={`w-full orm-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid ${isEmptyRegisterInfo.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-emerald-600'} rounded transition ease-in-out m-0 focus:text-gray-700 focus:outline-none`}
                                id='email'
                                placeholder='Your Email'
                            />
                            {isEmptyRegisterInfo.email && <p className='text-red-600'>Email is required!</p>}
                        </div>
                        <div className='pt-5'>
                            <label htmlFor='password'>Password</label>
                            <input onBlur={(e: React.ChangeEvent<HTMLInputElement>) => registerInfoChangeHandler(e)} name='password' type='password' className={`w-full orm-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid ${isEmptyRegisterInfo.password ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-emerald-600'} rounded transition ease-in-out m-0 focus:text-gray-700 focus:outline-none`} id='password' placeholder='Password' />
                            {isEmptyRegisterInfo.password && <p className='text-red-600'>Password is required!</p>}
                        </div>
                        <div className='pt-5'>
                            <label htmlFor='confirm_password'>Confirm Password</label>
                            <input onBlur={(e: React.ChangeEvent<HTMLInputElement>) => registerInfoChangeHandler(e)} name='confirm_password' type='password' className={`w-full orm-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid ${isEmptyRegisterInfo.confirm_password ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-emerald-600'} rounded transition ease-in-out m-0 focus:text-gray-700 focus:outline-none`} id='confirm_password' placeholder='Confirm Password' />
                            {isEmptyRegisterInfo.confirm_password && <p className='text-red-600'>Confirm password is required!</p>}
                        </div>

                        <div className='flex justify-center items-center mt-6'>
                            {/* {
                                loginDetails.loading ? <button type="button" className="w-full cursor-not-allowed w-100 bg-emerald-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark" disabled>
                                    <svg role="status" className="inline mr-2 w-5 h-5 text-emerald-200 animate-spin dark:text-white fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    Login...
                                </button> :
                            } */}
                            <button type='submit' className={`w-full bg-emerald-500 hover:bg-emerald-700 py-2 px-4 text-base font-bold text-white rounded border border-green focus:outline-none focus:border-green-dark`}>
                                Register
                            </button>
                        </div>
                    </form>
                    <div>
                        <p className='text-center mt-4'>Already have account? <Link href="/login"><a className='text-blue-500'>Login</a></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm