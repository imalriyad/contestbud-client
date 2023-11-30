import { Link, useNavigate } from "react-router-dom";
import Google from "./Google";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import useAuth from "../Hooks/useAuth";
import auth from "../Firebase/firebase.config";

/* eslint-disable react/no-unescaped-entities */
const Registration = () => {
  const axiosPublic = useAxiosPublic();
  const { registeration } = useAuth();
 const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.role = "user";
    const email = data.email;
    const password = data.password;

    registeration(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: data.name,
          photoURL: data.photourl,
          
        })
          .then(async () => {
            const res = await axiosPublic.post("/create-user", data);
            if (res.data.insertedId) {
              toast.success("🎉 Registration Successful!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });

              navigate('/')
            }
          })
          .catch((err) =>
            toast.error(`${err.message.slice(17).replace(")", "")}`)
          );
      })
      .catch((err) => toast.error(`${err.message.slice(17).replace(")", "")}`));
  };

  return (
    <div className="bg-[#1F2443] md:flex items-center ">
      <div>
        <img
          src="https://i.ibb.co/WF86fP4/undraw-Login.png"
          alt=""
          className="md:w-[80%] w-[50%] mx-auto"
        />
      </div>
      <div className="w-full max-w-md p-8 space-y-2 rounded-xl  ">
        <h1 className="text-2xl font-bold text-white text-center">
          Registration
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block ">
              Name
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Name"
              className="w-full border px-4 py-3 rounded-md "
            />{" "}
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-500">
                Name is required
              </p>
            )}
          </div>
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
                  /^(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/,
              })}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md  "
            />{" "}
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
          <div className="space-y-1 text-sm pb-4">
            <label htmlFor="photourl" className="block ">
              PhotoUrl
            </label>
            <input
              type="text"
              name="photourl"
              {...register("photourl", { required: true })}
              placeholder="PhotoUrl"
              className="w-full border px-4 py-3 rounded-md "
            />
            {errors.photourl?.type === "required" && (
              <p role="alert" className="text-red-500">
                PhotoUrl is required
              </p>
            )}
          </div>
          <button
            type="submit"
            className="block btn hover:bg-[#0ECDB9] bg-[#0ECDB9] w-full p-3 text-center rounded-sm "
          >
            Registration
          </button>
        </form>

        <Google></Google>
        <p className="text-white">
          Already have an account?{" "}
          <Link className="underline" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
