import { React, useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";
import "./Sidebar.css";
import image from "../../assets/img.jpg";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, fetchUserPosts } from "../../redux";

function SideBar() {
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Col lg={3} md={0} sm={0} className="h-100 sticky-top">
      <div className="bg-white my-2 shadow p-3 mb-5 bg-white rounded h-100 ">
        <Row>
          <Col>
            <div className="my-3  d-flex align-items-center flex-lg-nowrap">
              <Image src={image} className="image-icon"></Image>
              <h5 style={{ width: "auto!important" }} className="mx-2">
                Arslan
              </h5>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className=" height-overflow">
          {userReducer.userLoading ? (
            <h2>Loading</h2>
          ) : userReducer.userError ? (
            <h2>{userReducer.userError}</h2>
          ) : (
            userReducer.userData.data &&
            userReducer.userData.data.map((user) => {
              return (
                <Col lg={12} key={user.id}>
                  <div
                    className="my-3  d-flex align-items-center flex-lg-nowrap "
                    onClick={() => {
                      dispatch(fetchUserPosts(user.id));
                    }}
                  >
                    <Image
                      src={user.picture}
                      className="people-image-icon "
                    ></Image>
                    <p className="mx-3 margin-botton-unset">
                      {" "}
                      {`${user.firstName} ${user.lastName}`}
                    </p>
                  </div>
                </Col>
              );
            })
          )}
        </Row>
      </div>
    </Col>
  );
}

export default SideBar;
