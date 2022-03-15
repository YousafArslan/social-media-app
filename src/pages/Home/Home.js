import React from "react";
import "./Home.css";
import Topbar from "../../components/topbar/Topbar";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import { Container, Row, Col } from "react-bootstrap";
import { AuthProvider, useAuth } from "../../components/auth";
import Login from "../../components/login/Login";
import { Link } from "react-router-dom";

function Home() {
  const auth = useAuth();
  return (
    <>
      <Topbar />

      <Container className="my-2">
        <Row>
          <SideBar />

          <Col lg={6}>
            {" "}
            <Feed />
          </Col>
          <RightBar />
        </Row>
      </Container>
      {!auth.user && <Link to="/login"> </Link>}
    </>
  );
}

export default Home;
