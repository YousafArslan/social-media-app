import React from "react";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  FormControl,
  InputGroup,
  Badge,
  Image,
} from "react-bootstrap";
import "./Topbar.css";
import image from "../../assets/img.jpg";
import { useAuth } from "../auth";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" lg={2} className="mx-5">
          Social App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <InputGroup className="d-flex mx-5 w-75 ">
            <InputGroup.Text
              id="basic-addon1"
              className="search-border-left bg-white"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
            <FormControl
              placeholder="Search for friend,post or video"
              aria-label="Username"
              aria-describedby="basic-addon1"
              className="search-border-right"
            />
          </InputGroup>

          <Nav
            className=" my-2 my-lg-0 mx-4"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#" disabled>
              <i className="fa fa-user-o mx-3 d-flex" aria-hidden="true">
                <sup>
                  <Badge bg="danger" text="dark"></Badge>
                </sup>
              </i>
            </Nav.Link>
            <Nav.Link href="#" disabled>
              <i className="fa fa-comment-o mx-1 d-flex" aria-hidden="true">
                <sup>
                  <Badge bg="danger" text="dark">
                    1
                  </Badge>
                </sup>
              </i>
            </Nav.Link>
            <Nav.Link href="#" disabled>
              <i className="fa fa-bell-o mx-1 d-flex" aria-hidden="true">
                <sup>
                  <Badge bg="danger" text="dark">
                    1
                  </Badge>
                </sup>
              </i>
            </Nav.Link>
          </Nav>
          <Nav
            className=" my-2 my-lg-0 mx-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <h5 className="d-flex align-items-center">{auth.user}</h5>
            <NavDropdown
              title={<Image src={image} className="dropdown-image"></Image>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4" onClick={navigate("/")}>
                Homepage
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" onClick={handleLogout}>
                SignOut
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
