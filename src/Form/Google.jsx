import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Google = () => {
  const { googleLogin, user } = useAuth();
  const axiosPublic = useAxiosPublic();
  console.log(user);
  const handleGoogleLogin = async () => {
    googleLogin()
      .then(async (res) => {
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

        const email = res?.user?.email;
        const name = res?.user?.displayName;
        const photourl = res?.user?.photoURL;
        const role = "user";
        const response = await axiosPublic.post("/create-user", {
          email,
          name,
          photourl,
          role,
        });
        console.log(response.data);
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <>
      <div className="flex text-orange-50 justify-center space-x-4 pt-4 w-full">
        <button
          onClick={handleGoogleLogin}
          aria-label="Log  in with Google"
          className=" btn flex w-full rounded-sm"
        >
          <img
            src="https://i.postimg.cc/jdCrbHMW/Logo-google-icon-PNG.png"
            alt=""
            className="w-[30px]"
          />
          Login with google
        </button>
      </div>
    </>
  );
};

export default Google;
