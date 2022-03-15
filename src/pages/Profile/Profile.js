import "./Profile.css";
import React from "react";
import Topbar from "../../components/topbar/Topbar";
import { Container } from "react-bootstrap";
import SideBar from "../../components/sidebar/SideBar";
import UserProfile from "../../components/profile/UserProfile";
import { Row } from "react-bootstrap";
import { useAuth } from "../../components/auth";
function Profile() {
  return (
    <>
      <Topbar></Topbar>

      <Container>
        <Row>
          <SideBar></SideBar>
          <UserProfile />
        </Row>
      </Container>
    </>
  );
}

export default Profile;
