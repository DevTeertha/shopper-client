import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfoI } from "../../interfaces/ProductsInterface";
import { LoginAction } from "../../redux/Actions/loginAction";

const LoginForm: React.FC = () => {
  const [userInfo, setUserInfo] = useState<userInfoI>({
    email: "",
    password: "",
  });
  const newUserInfo: userInfoI = { ...userInfo };
  const dispatch = useDispatch();
  const loginDetails = useSelector((state: any) => state.login);

  const userInfoChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const key: string = e.target.name;
    newUserInfo[key] = e.target.value;
    setUserInfo(newUserInfo);
  };
  const loginHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (userInfo.email && userInfo.password) {
      setUserInfo({
        email: "",
        password: "",
      });
      const formId: any = document.getElementById("login_form");
      formId.reset();

      // eslint-disable-next-line new-cap
      dispatch(LoginAction(userInfo.email, userInfo.password));
    } else {
      alert("Email & Password Required!");
    }
  };
  return (
    <div className="container mx-auto px-4">
      <div className="h-screen flex bg-gray-bg1">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
            Log in to your account
          </h1>

          <form
            id="login_form"
            onSubmit={(e: React.SyntheticEvent) => loginHandler(e)}
          >
            <div>
              <label htmlFor="email">Email</label>
              <input
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                  userInfoChangeHandler(e)
                }
                name="email"
                type="email"
                className={`w-full orm-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none`}
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="pt-5">
              <label htmlFor="password">Password</label>
              <input
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                  userInfoChangeHandler(e)
                }
                name="password"
                type="password"
                className={`w-full orm-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none`}
                id="password"
                placeholder="Your Password"
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              {loginDetails.loading ? (
                <button
                  type="button"
                  className="w-full cursor-not-allowed w-100 bg-emerald-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark"
                  disabled
                >
                  <svg
                    role="status"
                    className="inline mr-2 w-5 h-5 text-emerald-200 animate-spin dark:text-white fill-green-500"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  Login...
                </button>
              ) : (
                <button
                  type="submit"
                  className={`w-full bg-emerald-500 hover:bg-emerald-700 py-2 px-4 text-base font-bold text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                >
                  Login
                </button>
              )}
            </div>
          </form>
          <div>
            <p className="text-center mt-4">
              Dont have account?
              <Link href="/register">
                <a className="text-blue-500">Register</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
