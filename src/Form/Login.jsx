/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import Google from "./Google";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data?.email;
    const password = data?.password;
    login(email, password)
      .then(() => {
        toast.success("🎉 Login Successful!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => toast.error(`${err.message.slice(17).replace(")", "")}`));
  };

  return (
    <div className="bg-[#1F2443] md:flex items-center py-10">
      <div>
        <img
          src="https://i.ibb.co/WF86fP4/undraw-Login.png"
          alt=""
          className="md:w-[80%] w-[50%] mx-auto"
        />
      </div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl  ">
        <h1 className="text-2xl font-bold text-white text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block ">
              Email
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="w-full border px-4 py-3 rounded-md "
            />
            {errors.email?.type === "required" && (
              <p role="alert" className="text-red-500">
                Email is required
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/,
              })}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md  "
            />{" "}
            <div className="flex justify-end text-xs text-white">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
            {errors.password?.type === "required" && (
              <p role="alert" className="text-red-500">
                Password is required
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p role="alert" className="text-red-500">
                Passsword Should have one Symbol ,captial latter and number
              </p>
            )}
          </div>
          <button
            type="submit"
            className="block btn hover:bg-[#0ECDB9] bg-[#0ECDB9] w-full p-3 text-center rounded-sm "
          >
            Sign in
          </button>
        </form>

        <div className="flex justify-center space-x-4">
          <Google></Google>
        </div>
        <p className="text-white">
          Don't have an account?{" "}
          <Link className="underline" to={"/registration"}>
            Registration
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
