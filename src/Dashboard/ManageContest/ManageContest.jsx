import swal from "sweetalert";
import { ContestCard } from "../../Pages/AllContest/ContestCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ManageContest = () => {
  const axiosSecure = useAxiosSecure();
  
  const {
    data: allContest = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["AllContest"],
    queryFn: async () => {
      const res = await axiosSecure("/get-all-contest-admin");
      return res.data;
    },
  });

  if (isPending) {
    return (
      <div className="w-16 my-[20%] h-16 mx-auto border-4 border-dashed border-black rounded-full animate-spin border-mainColor"></div>
    );
  }

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: `You want to remove this contest? `,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.delete(`/delete-contest/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            swal(`Congrats! This contest has been deleted!`, {
              icon: "success",
            });
            refetch();
            
          }
        });
      }
    });
  };

  const handleUpdateStatus = (id) => {
    swal({
      title: "Are you sure?",
      text: `You want Confirm this Contest `,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure
          .patch(`/update-contest-status/${id}`, { status: "accepted" })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              swal(`Congrats! This Contest has been added!`, {
                icon: "success",
              });
              refetch();

            }
          });
      }
    });
  };
  return (
    <div className="px-4 space-y-4 py-4">
      <h1 className="text-2xl md:text-4xl">
        Totoal {allContest?.length} Contest Found
      </h1>
      {allContest?.map((item) => (
        <ContestCard
          item={item}
          handleDelete={handleDelete}
          handleUpdateStatus={handleUpdateStatus}
          key={item._id}
        ></ContestCard>
      ))}
    </div>
  );
};

export default ManageContest;
