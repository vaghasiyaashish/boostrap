import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './css/btn/btn.css'

function Home() {
  return (
    <div className="pt-5 text-center accordion-item">
       <h1 className="text-center mt-5 pt-5">React Bootstrap</h1>
       <p className="fs-25 mt-4">The most popular front-end framework, rebuilt for React.</p>
      <div className="pt-4 d-flex justify-content-center btn_sec">
     
          <Link to="products/search" className="text-decoration-none click-btn btn-style510 colorse"> Get started </Link>
          <Link to="login" className="text-decoration-none click-btn btn-style510 colorse"> Components </Link>
          
         {/* <Button className="ps-4 pe-4 pt-2 pb-2 fs-22 fw-bold ms-2  mt-2 btn-home">
         <Link to="products/search" className="text-decoration-none text-dark"> Get started </Link>
         </Button> */}
         {/* <Button className="ps-3 pe-3 pt-2 pb-2 fs-22 fw-bold ms-2 mt-2  btn-home">
         <Link to="login" className="text-decoration-none text-dark"> Components </Link>
         </Button> */}
     

      </div>
      <p className="pt-3">Current version: 2.10.0</p>

      <div className="container mt-5">
        <div className="row text-start d-flex justify-content-center">
          <div className="col-12 col-sm-6 col-lg-3 mt-3 ">
            <h3>Rebuilt with React </h3>
            <p>React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.</p>
            <p className="pt-3">As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 ms-lg-5 me-lg-5 mt-3">
            <h3>Bootstrap at its core</h3>
            <p>Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem.</p>
            <p className="pt-3">By relying entirely on the Bootstrap stylesheet, React-Bootstrap just works with the thousands of Bootstrap themes you already love.</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mt-3">
            <h3> Accessible by default</h3>
            <p>The React component model gives us more control over form and function of each component.</p>
            <p className="pt-3">Each component is implemented with accessibility in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
