/* eslint-disable react/prop-types */

"use client";
import { Button, Card } from "keep-react";
import { Link } from "react-router-dom";
export const ContestCard = ({ item ,handleDelete}) => {
  const { _id, contestName, image, participants, contestDetails } = item;
  return (
    <Card className="md:p-6 w-full min-w-full p-5  border-y-gray-200 border-r-gray-200 border-l-8 border-l-[#0ECDB9] ">
      <div className="md:flex gap-6">
        <div>
          <img
            src={image}
            className="h-44 md:w-[340px] w-full rounded object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-3 md:mt-0 mt-3">
          <Card.Title>
            <span className="md:text-2xl">{contestName}</span>
          </Card.Title>
          <Card.Description>
            <span className="text-gray-500 text-xs md:text-sm">
              {" "}
              {contestDetails.slice(0, 150)}
            </span>
          </Card.Description>

          <div className="flex items-center md:justify-start justify-between">
            <div className="flex items-center gap-1">
              {" "}
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
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
              <h1 className="text-xs md:text-sm font-medium">Participients</h1>
            </div>

           <Link to={`/contest-details/${_id}`}> <Button size="xs" className="bg-[#0ECDB9] ml-8 ">
              View Details
            </Button></Link>
            {
              handleDelete?<Button onClick={()=>handleDelete(_id)} size="xs" className="bg-[#0ECDB9] ml-8 ">
              Delete
             </Button>:''
            }
          </div>
        </div>
      </div>
    </Card>
  );
};
