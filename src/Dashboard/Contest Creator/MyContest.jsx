import useCreatorContest from "../../Hooks/useCreatorContest";
import { ContestCard } from "../../Pages/AllContest/ContestCard";

const MyContest = () => { 
    const [myCreatedContest] = useCreatorContest()
    const handleUpdateStatus  =()=>{
        
    }
    return (
        <div>
             <div className="px-4 space-y-4 py-4">
      <h1 className="text-2xl md:text-4xl">
        Totoal {myCreatedContest?.length} Contest Found
      </h1>
      {myCreatedContest?.map((item) => (
        <ContestCard
          item={item}
          handleUpdateStatus={handleUpdateStatus}
          key={item._id}
        ></ContestCard>
      ))}
    </div>
        </div>
    );
};

export default MyContest;