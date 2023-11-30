import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
const AddContest = () => {
  const [tags, setTags] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleContestType = (e) => {
    setTags(e.target.value);
  };

  const onSubmit = async (data) => {
    data.fee = parseInt(data.fee);
    data.prize = parseInt(data.prize);
    const textareaInput = data.requirements;
    // eslint-disable-next-line no-useless-escape
    let requirementsArray = textareaInput.match(/[\w\s]+(?=\,|\.)|[\w\s]+$/g);
    requirementsArray = requirementsArray.map((requirement) =>
      requirement.trim()
    );
    data.requirements = requirementsArray;
    let inputdate = new Date(startDate);
    let formattedDate = inputdate.toISOString().substring(0, 10);
    data.endDate = formattedDate;
    data.participants = 0;
    data.winnerName = "";
    data.winnerImg = "";
    data.status = "pending";
    data.tags = tags;
    data.creatorMail = user?.email;
    const res = await axiosSecure.post("/create-contest", data);
    if (res.data.insertedId) {
      toast.success("🎉Congrats! Contest Added", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="px-4 pt-6 pb-4">
      <h1 className="md:text-3xl mb-8 text-2xl">Add a Contest as a Creator</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto grid max-w-screen-md gap-5 sm:grid-cols-2"
      >
        <div>
          <label
            htmlFor="Contest Name                "
            className="mb-2 inline-block text-sm text-dark sm:text-base"
          >
            Contest Name
          </label>
          <input
            {...register("contestName", { required: true })}
            placeholder="Contest Name"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
          />
          {errors.contestName?.type === "required" && (
            <p role="alert" className="text-red-500  text-sm">
              ContestName is required
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="fee"
            className="mb-2 inline-block text-sm text-dark sm:text-base"
          >
            Entry Fee
          </label>
          <input
            {...register("fee", { required: true })}
            type="number"
            placeholder=" Contest Price"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
          />
          {errors.fee?.type === "required" && (
            <p role="alert" className="text-red-500  text-sm">
              Entry Fee is required
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="  Prize Money"
            className="mb-2 inline-block text-sm text-dark sm:text-base"
          >
            Prize Money
          </label>
          <input
            {...register("prize", { required: true })}
            type="number"
            placeholder=" Contest prize Money"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
          />
          {errors.prize?.type === "required" && (
            <p role="alert" className="text-red-500  text-sm">
              Contest prize is required
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="Contest Type"
            className="mb-2 inline-block text-sm text-dark sm:text-base"
          >
            Contest Type
          </label>
          <select
            defaultValue={"default"}
            required
            onChange={handleContestType}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none"
          >
            <option disabled value={"default"}>
              Select Contest Type
            </option>
            <option value="business">Business</option>
            <option value="medical">Medical</option>
            <option value="writing">Writing </option>
            <option value="gaming">Gaming </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="Contest image"
            className="mb-2 inline-block text-sm text-dark sm:text-base"
          >
            Contest Image
          </label>
          <input
            {...register("image", { required: true })}
            placeholder="Contest Image Url"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
          />
          {errors.image?.type === "required" && (
            <p role="alert" className="text-red-500  text-sm">
              Contestimage is required
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="Contest image"
            className="mb-2 inline-block text-sm text-dark sm:text-base"
          >
            Contest Deadline
          </label>

          <DatePicker
            className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-2 inline-block text-sm text-dark sm:text-base"
          >
            Contest Requirements
          </label>
          <textarea
            {...register("requirements", { required: true })}
            rows={3}
            placeholder="Write About The  Contest Requirements"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
          ></textarea>
          {errors.requirements?.type === "required" && (
            <p role="alert" className="text-red-500  text-sm">
              Requirements is required
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="ContestDescription"
            className="mb-2 inline-block text-sm text-dark sm:text-base"
          >
            Contest Description
          </label>
          <textarea
            {...register("contestDetails", { required: true })}
            rows={3}
            placeholder="Write About The Contest Description"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
          ></textarea>
          {errors.contestDetails?.type === "required" && (
            <p role="alert" className="text-red-500  text-sm">
              ContestDetails is required
            </p>
          )}
        </div>
        <div className="flex items-center justify-between sm:col-span-2">
          <button
            type="submit"
            className="text-white btn w-full border-none btn-success hover:bg-mainColor normal-case text-light"
          >
            Add This Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContest;
