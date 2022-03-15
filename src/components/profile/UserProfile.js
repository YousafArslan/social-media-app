import "./userprofile.css";
import { React, useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import cover from "../../assets/cover.jpg";
import Feed from "../feed/Feed";
import UserInfo from "./UserInfo";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserInfo } from "../../redux";

function UserProfile() {
  const userinfoReducer = useSelector((state) => state.userinfo);
  console.log(userinfoReducer.userinfoData.id);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserInfo(id));
  }, []);

  debugger;

  return (
    <Col lg={9}>
      {userinfoReducer.userinfoLoading ? (
        <h2>Loading</h2>
      ) : userinfoReducer.userinfoError ? (
        <h2>{userinfoReducer.userinfoError}</h2>
      ) : (
        userinfoReducer.userinfoData && (
          <>
            <div className=" profile-cover">
              <Image src={cover} alt="" className="w-100 profile-cover-img" />
              <Image
                src={userinfoReducer.userinfoData.picture}
                className="profile-pic"
              ></Image>
            </div>
            <div className=" profile-info">
              <h4>{`${userinfoReducer.userinfoData.firstName} ${userinfoReducer.userinfoData.lastName}`}</h4>
              <span>This is my description</span>
            </div>
          </>
        )
      )}
      <Row>
        <Col lg={8}>
          <Feed userId={id}></Feed>
        </Col>
        <Col lg={4}>
          <UserInfo></UserInfo>
        </Col>
      </Row>
    </Col>
  );
}

export default UserProfile;
