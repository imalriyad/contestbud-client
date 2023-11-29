
import { Button } from "keep-react";
import { Link, useLoaderData } from "react-router-dom";
import { RiMedal2Fill } from "react-icons/ri";
import Countdown from "react-countdown";
import { FiCornerRightDown } from "react-icons/fi";

const ContestDetails = () => {
  const loadedContest = useLoaderData();
  const {
    _id,
    contestName,
    image,
    participants,
    contestDetails,
    prize,
    fee,
    // winnerName,
    // winnerImg,
    // endDate,
    tags,
    requirements,
  } = loadedContest;
  const specificDate = '2023-12-31'
 
  return (
    <div>
      <div
        className="md:h-[300px]  h-[150px]  object-cover relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className="absolute w-full text-center mx-auto border md:text-5xl font-semibold text-2xl text-white md:top-[40%] top-[30%]">
          <h1 className="px-4">{contestName} </h1>
        </div>
      </div>
      <div className="px-4  md:flex py-4">
        <div className="space-y-4 md:w-3/4">
          <h1 className=" w-full font-semibold text-2xl">
            Contest: {contestName}
          </h1>
          <p className="text-sm max-w-xl">{contestDetails}</p>
          <p className="text-2xl font-semibold">Requirement:</p>
          <div className="">
            {requirements?.map((requirement) => (
              <li className="text-sm" key={requirement}>
                {requirement}
              </li>
            ))}
          </div>
        </div>

        <div className="bg-[#f1f2f6] shadow-2xl space-y-2 p-6 pb-4 border-4 border-success rounded md:w-1/3 md:mt-0 mt-8">
          <h1 className="text-2xl pb-1 text-center font-medium border-b border-success ">
            Contest Statistics
          </h1>
          <h1 className="font-medium">Prize Money : ${prize}</h1>
          <h1 className="font-medium">Contest Entry Fee : ${fee}</h1>
          <h1 className="font-medium">
            Contest Tags: <span className="badge badge-success">{tags}</span>
          </h1>
        
          <div className="flex pb-2 items-center gap-1">
            {" "}
            <div className="avatar-group -space-x-6 rtl:space-x-reverse ">
              <div className="avatar">
                <div className="w-7 h-7">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-7 h-7">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-7 h-7">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-7 h-7 bg-neutral text-neutral-content">
                  <span className="text-xs">+{participants}</span>
                </div>
              </div>
            </div>
            <h1 className="text-xs md:text-base font-medium">Participients</h1>
          </div>

          {/* Countdown */}

          <Countdown
            date={new Date(specificDate)}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (completed) {
                return (
                  <>
                    <span className="text-red-500 ">The Contest is Ended!</span>
                    <Button
                      size={"xs"}
                      disabled
                      className="bg-[#0ECDB9] w-full "
                    >
                      Join Contest <RiMedal2Fill className="ml-1" />
                    </Button>
                  </>
                );
              } else {
                return (
                  <div>
                    <h1 className="text-sm flex items-center font-medium">
                      This contest will conclude in{" "}
                      <FiCornerRightDown></FiCornerRightDown>
                    </h1>
                    <div className="flex pb-4 md:gap-5 gap-2  items-center ">
                      <div className="text-sm font-medium text-center">
                        {days} <span className="font-semibold">Days</span>
                      </div>
                      <div className="text-sm font-medium text-center">
                        {hours} <span className="font-semibold">Hours</span>
                      </div>
                      <div className="text-sm font-medium text-center">
                        {minutes} <span className="font-semibold">Minutes</span>
                      </div>
                      <div className="text-sm font-medium text-center">
                        {seconds} <span className="font-semibold">Seconds</span>
                      </div>
                    </div>

                   <Link to={`/cheakout/${_id}`}> <Button size={"xs"} className="bg-[#0ECDB9] w-full ">
                      Join Contest <RiMedal2Fill className="ml-1" />
                    </Button></Link>
                  </div>
                );
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContestDetails;
