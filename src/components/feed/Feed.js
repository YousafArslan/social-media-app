import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, fetchComments, fetchUserPosts } from "../../redux";
import { Button, Col, Image, Row, Dropdown, Badge } from "react-bootstrap";
import "./Feed.css";
import image from "../../assets/img.jpg";

function Feed({ userId }) {
  const dispatch = useDispatch();
  const postReducer = useSelector((state) => state.posts);
  useEffect(() => {
    // debugger;
    console.log(userId);
    if (userId) {
      dispatch(fetchUserPosts(userId));
    } else {
      dispatch(fetchPosts());
    }
  }, []);

  return (
    <Col className="my-2">
      <Row className="shadow p-3 mb-2 bg-white rounded">
        {" "}
        <Row className="my-3 text-muted d-flex align-items-center">
          {" "}
          <Image src={image} className="image-icon"></Image>
          <>Whats on Your Mind</>
        </Row>
        <hr />
        <Col className="d-flex ">
          <Col className="d-flex align-items-center ">
            <i
              className="fa fa-picture-o status-margin-right"
              aria-hidden="true"
              style={{ color: "red" }}
            >
              {" "}
            </i>
            <>Photo</>
          </Col>

          <Col className="d-flex align-items-center status-margin-left">
            <i
              className="fa fa-tag status-margin-right"
              aria-hidden="true"
              style={{ color: "blue" }}
            ></i>
            <>Tag</>
          </Col>

          <Col className="d-flex align-items-center status-margin-left">
            <i
              className="fa fa-map-marker status-margin-right"
              aria-hidden="true"
              style={{ color: "green" }}
            ></i>
            <>Location</>
          </Col>

          <Col className="d-flex align-items-center status-margin-left">
            <i
              className="fa fa-smile-o status-margin-right"
              aria-hidden="true"
              style={{ color: "darkgoldenrod" }}
            ></i>
            <>Feelings</>
          </Col>
        </Col>
        <Col>
          <Button className="float-end share-btn">Share</Button>
        </Col>
      </Row>

      {/* ***************************Post********************** */}
      {postReducer.postLoading ? (
        <h2>Loading</h2>
      ) : postReducer.postError ? (
        <h2>{postReducer.postError}</h2>
      ) : (
        postReducer.postData.data &&
        postReducer.postData.data.map((post, index) => (
          <Row key={post.id} className="shadow p-3 mb-2 bg-white rounded">
            <Col lg={12}>
              <Row>
                <Col lg={12}>
                  <Row className="my-1  d-flex align-items-center flex-lg-nowrap">
                    <Col
                      lg={9}
                      className="d-flex align-items-center flex-lg-nowrap"
                    >
                      {" "}
                      <Image
                        src={post.owner.picture}
                        className="post-image-icon"
                      ></Image>
                      <h5 className="width-auto mx-3">
                        {`${post.owner.firstName} ${post.owner.lastName}`}
                        <span className="mx-1">
                          <sup>5 minutes ago</sup>
                        </span>
                      </h5>
                    </Col>
                    <Col lg={3}>
                      <Dropdown className="width-auto float-end">
                        <Dropdown.Toggle variant="white" id="dropdown-basic">
                          <i
                            className="fa fa-ellipsis-v"
                            aria-hidden="true"
                          ></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                  <Row className="my-2 ">
                    <p>
                      <b>{post.text}</b>
                    </p>
                  </Row>
                  <Row className="my-2 w-100 margin-unset">
                    <Col lg={12}>
                      <Image
                        src={post.image}
                        className="post-photo w-100"
                      ></Image>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Row>
              <Col className="my-3 d-flex">
                {" "}
                <div className=" d-flex align-items-center">
                  <Button className="btn-light  rounded-circle">
                    {" "}
                    <i
                      className="fa fa-thumbs-up w-100"
                      aria-hidden="true"
                      style={{ color: "blue" }}
                    ></i>
                  </Button>
                  <p className="like-text">
                    {post.likes} People Liked this Post
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="my-3 d-flex">
                {" "}
                <div className=" d-flex align-items-center">
                  {post.tags.map((tag) => {
                    return (
                      <Badge key={tag} bg="primary" className="mx-1">
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
              </Col>
            </Row>
            <Row>
              <p
                onClick={() => {
                  dispatch(fetchComments(post.id));
                }}
              >
                {postReducer.postData.data[index].commentData ? (
                  postReducer.postData.data[index].commentData.length === 0 ? (
                    <>No Comments For this Post</>
                  ) : (
                    <></>
                  )
                ) : (
                  <>Click to show Comments</>
                )}
              </p>
              <Col lg={12}>
                {postReducer.commentLoading ? (
                  <h2>Loading</h2>
                ) : postReducer.commentError ? (
                  <h2>{postReducer.commentError}</h2>
                ) : (
                  postReducer.postData.data &&
                  postReducer.postData.data[index] &&
                  postReducer.postData.data[index].commentData &&
                  postReducer.postData.data[index].commentData.map(
                    (comment) => {
                      return (
                        <div className="my-2 bd-color" key={comment.id}>
                          <div className="">
                            <Image
                              src={comment.owner.picture}
                              className="friends-image-icon m-auto mx-2"
                            ></Image>
                            <>
                              {" "}
                              {`${comment.owner.firstName} ${comment.owner.lastName}`}
                            </>
                          </div>
                          <div className=" mx-5">
                            <p>{comment.message}</p>
                          </div>
                        </div>
                      );
                    }
                  )
                )}
              </Col>
            </Row>
          </Row>
        ))
      )}

      {/* ***************************Post********************** */}
      {/* */}
      {/* ***************************Post********************** */}
    </Col>
  );
}

export default Feed;
