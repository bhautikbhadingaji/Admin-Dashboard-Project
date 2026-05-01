import { useState } from "react";
import toast from "react-hot-toast";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

export const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
        e.preventDefault();
        if (email === "admin@test.com" && password === "123456") {
            const userData = { email, loggedIn: true };
            localStorage.setItem("user", JSON.stringify(userData));
            toast.success("Login Successfully");
            navigate("/");
        } else {
            toast.error("Invalid credentials");
        }
    };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className=" text-sm/6 font-medium text-black  flex items-baseline">
                <MdOutlineEmail /> Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-yellow-200 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-500 placeholder:text-white focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm/6 font-medium text-black flex items-baseline">
                  <TbLockPassword /> Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-yellow-200 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-500 placeholder:text-white focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
              onClick={(e)=>handleLogin(e)}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}