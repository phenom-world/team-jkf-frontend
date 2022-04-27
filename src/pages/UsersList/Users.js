import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import LoadState from "../../components/Spinner/LoadState";
import { getTeamRequests } from "../../Redux/actions/request";
import { useNavigate } from "react-router-dom";
import { declineUser, addUser } from "../../Redux/actions/request";

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { teamRequests, requestloading, error, isLoading, message } = useSelector((state) => state.teamRequestReducer);
  const { userDetail, isloading } = useSelector((state) => state.userDetailsReducer);
  const isAdmin = userDetail?.isAdmin;

  useEffect(() => {
    isAdmin ? dispatch(getTeamRequests()) : navigate("/unauthorized");
  }, [dispatch, isAdmin, message, navigate]);

  return (
    <>
      {" "}
      <h4 className="text-center mt-3"> Users Request</h4>
      <div className="table_container">
        {requestloading || isloading || isLoading ? (
          <LoadState />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>USERNAME</th>
                <th>TEAM NAME</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {teamRequests?.map((user, id) => (
                <tr key={id}>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.teamname}</td>
                  <td className="text-center">
                    <Button
                      variant="primary"
                      className="btn-sm"
                      onClick={() => {
                        dispatch(addUser({ teamname: user.teamname, username: user.username, userId: user.userId }));
                      }}
                    >
                      ACCEPT{" "}
                    </Button>{" "}
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => dispatch(declineUser({ teamname: user.teamname, username: user.username, userId: user.userId }))}
                    >
                      DECLINE{" "}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default Users;
