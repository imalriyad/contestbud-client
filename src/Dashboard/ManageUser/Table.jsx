/* eslint-disable react/prop-types */
import swal from "sweetalert";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserRole from "../../Hooks/useUserRole";
import { useNavigate } from "react-router-dom";

const Table = ({ user, indx, refetch }) => {
  const { _id, name, email, role, photourl } = user;
  const axiosSecure = useAxiosSecure();
  const [, , menuUpDate] = useUserRole();
  const navigate= useNavigate()
  const handleRole = (inputRole) => {
    swal({
      title: "Are you sure?",
      text: `You want to make ${name} a ${inputRole} `,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure
          .patch(`/update-role/${_id}`, { role: inputRole })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              swal(`${name} is now a ${inputRole}`, {
                icon: "success",
              });
              navigate('/')
              refetch();
              menuUpDate();
             
            }
          });
      }
    });
  };

  return (
    <>
      <tr>
        <th>{indx}</th>
        <td>
          <img
            src={photourl}
            className="w-[40px] object-cover h-[40px] rounded-full"
            alt=""
          />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <details className="dropdown">
            <summary className="m-1 btn capitalize  btn-sm btn-info ">{role}</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-24">
              {role === "creator" ? (
                ""
              ) : (
                <li
                  onClick={() => handleRole("creator")}
                  className="btn btn-sm btn-info "
                >
                  Creator
                </li>
              )}
              {role === "user" ? (
                ""
              ) : (
                <li
                  onClick={() => handleRole("user")}
                  className="btn btn-sm btn-info mt-2"
                >
                  User
                </li>
              )}
              {role === "admin" ? (
                ""
              ) : (
                <li
                  onClick={() => handleRole("admin")}
                  className="btn btn-sm btn-info mt-2"
                >
                 Admin
                </li>
              )}
            </ul>
          </details>
        </td>
      </tr>
    </>
  );
};

export default Table;
