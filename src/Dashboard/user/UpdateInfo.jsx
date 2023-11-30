import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { toast } from "react-toastify";
const imageUploadKey = import.meta.env.VITE_APP_IMAGEUPKEY;
const imageUpURI = `https://api.imgbb.com/1/upload?key=${imageUploadKey}`;
const UpdateInfo = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data?.photourl[0] };
    const res = await axiosPublic.post(imageUpURI, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const image = res.data?.data?.display_url;
    const name = data.name;
  

    if (res.data.success) {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
      })
        .then(() => {
            toast.success("🎉 Profile Successfully Updated!", {
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
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 pt-4 px-4 text-sm"
      >
        <label htmlFor="name" className="block text-2xl">
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
        <div>
          <input
            {...register("photourl", { required: true })}
            type="file"
            className="file-input file-input-bordered file-input-success w-full "
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm w-full">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateInfo;
