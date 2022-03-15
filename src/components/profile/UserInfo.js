import { React, useEffect } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";

function UserInfo() {
  const userinfoReducer = useSelector((state) => state.userinfo);

  console.log(userinfoReducer);

  return (
    <Col>
      {userinfoReducer.userinfoLoading ? (
        <h2>Loading</h2>
      ) : userinfoReducer.userinfoError ? (
        <h2>{userinfoReducer.userinfoError}</h2>
      ) : (
        userinfoReducer.userinfoData &&
        Object.entries(userinfoReducer.userinfoData).length > 0 && (
          <div className="bg-white my-2 shadow p-3 mb-5 bg-white rounded right-bar h-auto">
            <div className=" d-flex align-items-center flex-wrap">
              <h5 className="mx-1">Gender :</h5>
              <>{userinfoReducer.userinfoData.gender}</>
            </div>
            <div className=" d-flex align-items-center flex-wrap">
              <h5 className="mx-1">Date Of Birth :</h5>
              <> {userinfoReducer.userinfoData.dateOfBirth}</>
            </div>
            <div className=" d-flex align-items-center flex-wrap">
              <h5 className="mx-1">Register date :</h5>
              <> {userinfoReducer.userinfoData.registerDate}</>
            </div>
            <div className=" d-flex align-items-center flex-wrap">
              <h5 className="mx-1">Email :</h5>
              <> {userinfoReducer.userinfoData.email}</>
            </div>
            <div className=" d-flex align-items-center flex-wrap">
              <h5 className="mx-1">Phone :</h5>
              <> {userinfoReducer.userinfoData.phone}</>
            </div>
            <div className=" d-flex align-items-center flex-wrap">
              <h5 className="mx-1">State :</h5>
              <> {userinfoReducer.userinfoData.location.state || ""}</>
            </div>
            <div className=" d-flex align-items-center flex-wrap">
              <h5 className="mx-1">Street :</h5>
              <> {userinfoReducer.userinfoData.location.street || ""}</>
            </div>
            <div className=" d-flex align-items-center flex-wrap">
              <h5 className="mx-1">City :</h5>
              <> {userinfoReducer.userinfoData.location.city || ""}</>
            </div>
            <div className=" d-flex align-items-center flex-wrap">
              <h5 className="mx-1">Country :</h5>
              <> {userinfoReducer.userinfoData.location.country || ""}</>
            </div>
            <div className=" d-flex align-items-center flex-wrap">
              <h5 className="mx-1">Timezone :</h5>
              <> {userinfoReducer.userinfoData.location.timezone || ""}</>
            </div>
          </div>
        )
      )}
    </Col>
  );
}

export default UserInfo;
