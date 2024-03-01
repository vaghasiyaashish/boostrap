import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import CODESQUARE from "./Logo/logo.svg";

function Navbars() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Navbar expand="lg" className="position-fixed z-3 p-0">
        <Container fluid className="p-0">
          <Navbar.Brand href="/">
            <img src={CODESQUARE} alt="" width={200} className="ps-5" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="p-0 pe-3 me-3 shadow-none "
          />
          <Navbar.Collapse className="d-none d-lg-block ps-5 ms-5  d-flex justify-content-center">
            <Nav className="pb-2 ms-5 ps-5">
              <Link
                to="products/search"
                className="menu-bars text-decoration-none m-0 fw-medium text-black fs-20 pt-0"
              >
                {" "}
                Scss{" "}
              </Link>
              <Link
                to="login"
                className="menu-bars text-decoration-none m-0 fw-medium text-black fs-20 pt-0 ps-4"
              >
                {" "}
                React{" "}
              </Link>
              {/* <Link to="/" className="menu-bars text-decoration-none m-0 text-white fs-20"> Home </Link> */}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-block d-lg-none nav-menus  ">
              <div>
                <Link
                  to="products/search"
                  className="menu-bars text-decoration-none m-0 fw-medium text-dark fs-20 ps-5"
                >
                  {" "}
                  Scss{" "}
                </Link>
              </div>
              <div>
                <Link
                  to="login"
                  className="menu-bars text-decoration-none m-0 fw-medium text-dark fs-20 ps-5"
                >
                  {" "}
                  React{" "}
                </Link>
              </div>
              {/* <Link to="/" className="menu-bars text-decoration-none m-0 text-white fs-20"> Home </Link> */}
                <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" >
            <Accordion.Header className="ps-4">Getting started</Accordion.Header>
            <Accordion.Body className="p-0 ps-5">
              <p className="pt-2">
              <Link to="/products/search" className=' text-decoration-none fw-medium text-black '>Introduction</Link>
              </p>
              <p className="pt-2">
                <Link to="/products/list" className='text-decoration-none fw-medium text-black' id='WhyReact-Bootstrap?'>Scss Intro</Link>
              </p>
              <p className="pt-2">
              <Link to="/products/add" className='text-decoration-none fw-medium text-black'>Sass Installation</Link>
              </p>
              <p className="pt-2">
              <Link to="/products/SassVariables" className="text-decoration-none fw-medium text-black">Sass Variables</Link>
              </p>
              <p className="pt-2">
              <Link to="/products/SassNested" className="text-decoration-none fw-medium text-black">Sass Nested</Link>
              </p>
              <p className="pt-2">
              <Link to="/products/Sassimport" className="text-decoration-none fw-medium text-black">Sass @import </Link>
              </p>
              <p className="pt-2">
              <Link to="/products/Sassmixin" className="text-decoration-none fw-medium text-black">Sass @mixin  </Link>
              </p>
              <p className="pt-2">
              <Link to="/products/Sassextend" className="text-decoration-none fw-medium text-black">Sass @extend </Link>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="ps-4">Sass Functions</Accordion.Header>
            <Accordion.Body className="ps-5">
            <p className="pt-2 ">
            <Link to="/products/SassString" className=' text-decoration-none fw-medium text-black '>Sass String</Link>
            </p>
            <p className="pt-2">
            <Link to="/products/SassNumeric" className=' text-decoration-none fw-medium text-black '>Sass Numeric</Link>
            </p>
            <p className="pt-2">
            <Link to="/products/SassList" className=' text-decoration-none fw-medium text-black '>Sass List</Link>
            </p>
            <p className="pt-2">
            <Link to="/products/Sassmap" className=' text-decoration-none fw-medium text-black '>Sass Map</Link>
            </p>
            <p className="pt-2">
            <Link to="/products/SassSelector" className=' text-decoration-none fw-medium text-black '>Sass Selector</Link>
            </p>
             <p className="pt-2">
            <Link to="/products/SassIntrospection" className=' text-decoration-none fw-medium text-black '>Sass Introspection</Link>
            </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="ps-4">Customize</Accordion.Header>
            <Accordion.Body className="ps-5">
            <p className="pt-2 ">
            <Link to="/products/Overview" className=' text-decoration-none fw-medium text-black '>Overview</Link>
            </p>
            <p className="pt-2">
            <Link to="/products/Sass" className=' text-decoration-none fw-medium text-black '>Sass</Link>
            </p>
            <p className="pt-2  Link-actives">
            <Link to="/products/Options" className='text-decoration-none fw-medium text-black '>Options</Link>
            </p>
            <p className="pt-2  Link-actives">
            <Link to="/products/Color" className='text-decoration-none fw-medium text-black '>Color</Link>
            </p> 
            <p className="pt-2  Link-actives">
            <Link to="/products/Colormodes" className='text-decoration-none fw-medium text-black '>Color modes</Link>
            </p>
            <p className="pt-2  Link-actives">
            <Link to="/products/Components" className='text-decoration-none fw-medium text-black '>Components</Link>
            </p>
            <p className="pt-2  Link-actives">
            <Link to="/products/CSSvariables" className='text-decoration-none fw-medium text-black '>CSS variables</Link>
            </p>
            <p className="pt-2  Link-actives">
            <Link to="/products/Optimize" className='text-decoration-none fw-medium text-black '>Optimize</Link>
            </p>
            <p className="pt-2  Link-actives">
            <Link to="/products/Containers" className='text-decoration-none fw-medium text-black '>Containers</Link>
            </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;