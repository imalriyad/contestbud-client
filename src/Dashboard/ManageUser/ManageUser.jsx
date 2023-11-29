import useAlluser from "../../Hooks/useAlluser";
import Table from "./Table";

const ManageUser = () => {
  const [allUser, refetch] = useAlluser();

  return (
    <div >
      <div className="md:overflow-x-hidden overflow-x-auto md:h-screen ">
        <table className="table md:table-md table-xs">
          <thead>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {allUser?.map((user,indx) => (
              <Table key={user._id} refetch={refetch} indx={indx+1}  user={user}></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
