import { React, useEffect } from "react";
import { Col, Row, Badge, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./RightBar.css";
import { fetchUsers, fetchTagPosts, fetchTags } from "../../redux";
import { useNavigate, Link } from "react-router-dom";

function RightBar() {
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.users);
  const tagReducer = useSelector((state) => state.tags);
  const navigate = useNavigate();
  const userinfoReducer = useSelector((state) => state.userinfo);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchTags());
  }, []);
  return (
    <Col lg={3}>
      <div className="bg-white my-2 shadow p-3 mb-5 bg-white rounded right-bar sticky-top">
        <Row>
          <Col lg={12}>
            <h3>Tags</h3>
            <hr />
            <div className="tag-div my-4">
              {tagReducer.tagLoading ? (
                <h2>Loading</h2>
              ) : tagReducer.tagError ? (
                <h2>{tagReducer.tagError}</h2>
              ) : (
                tagReducer.tagData &&
                tagReducer.tagData.map((tag) => {
                  return (
                    <Badge
                      bg="primary"
                      className="mx-1"
                      key={tag}
                      onClick={() => {
                        dispatch(fetchTagPosts(tag));
                      }}
                    >
                      {tag}
                    </Badge>
                  );
                })
              )}
            </div>
          </Col>
        </Row>
        {/* **********************************Friend Div********************** */}
        <Row>
          <Col lg={12}>
            <h3>Friends</h3>
            <hr />

            <div className="friend-div my-2 bg-friends-div">
              {userReducer.userLoading ? (
                <h2>Loading</h2>
              ) : userReducer.userError ? (
                <h2>{userReducer.userError}</h2>
              ) : (
                userReducer.userData.data &&
                userReducer.userData.data.map((user) => {
                  return (
                    <Col
                      lg={12}
                      key={user.id}
                      // onClick={() => {
                      //   navigate("profile");
                      //
                      // }}
                    >
                      <Link to={`/profile/${user.id}`}>
                        <div className="my-3  d-flex align-items-center flex-lg-nowrap  bd-color w-100">
                          <div className="my-1 d-flex align-items-center flex-lg-nowrap  bd-color w-100">
                            <Image
                              src={user.picture}
                              className="friends-image-icon "
                            ></Image>
                            <p className="mx-3 margin-botton-unset">
                              {" "}
                              {`${user.firstName} ${user.lastName}`}
                            </p>
                          </div>

                          <span className=" " style={{ color: "green" }}>
                            ●
                          </span>
                        </div>
                      </Link>
                    </Col>
                  );
                })
              )}
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default RightBar;
