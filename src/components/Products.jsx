import React from "react";
import { Link, Outlet } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { useState } from "react";
function Products() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
     <div>
     <div className=" d-flex">
      <div className="position-relative w-xxl-22  d-lg-block d-none">
        <div className="position-sticky position">
    <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" >
            <Accordion.Header  style={{paddingTop:"4rem"}}>Getting started</Accordion.Header>
            <Accordion.Body className="pt-0 pb-0">
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/search" className=' text-decoration-none fw-medium text-black '>Introduction</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
              <Link to="/products/list" className='text-decoration-none fw-medium text-black' id='WhyReact-Bootstrap?'>Scss Intro</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/add" className='text-decoration-none fw-medium text-black'>Sass Installation</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/SassVariables" className="text-decoration-none fw-medium text-black">Sass Variables</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/SassNested" className="text-decoration-none fw-medium text-black">Sass Nested</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/Sassimport" className="text-decoration-none fw-medium text-black">Sass @import </Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/Sassmixin" className="text-decoration-none fw-medium text-black">Sass @mixin  </Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/Sassextend" className="text-decoration-none fw-medium text-black">Sass @extend </Link>
            </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Sass Functions</Accordion.Header>
            <Accordion.Body className="pt-0 pb-0">
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/SassString" className='text-decoration-none fw-medium text-black '>Sass String</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/SassNumeric" className='text-decoration-none fw-medium text-black '>Sass Numeric</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/SassList" className=' text-decoration-none fw-medium text-black '>Sass List</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/Sassmap" className=' text-decoration-none fw-medium text-black '>Sass Map</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/SassSelector" className=' text-decoration-none fw-medium text-black '>Sass Selector</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/SassIntrospection" className=' text-decoration-none fw-medium text-black '>Sass Introspection</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/SassColor" className=' text-decoration-none fw-medium text-black '>Sass Color</Link>
            </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Customize</Accordion.Header>
            <Accordion.Body className="pt-0 pb-0">
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/Overview" className='text-decoration-none fw-medium text-black '>Overview</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/Sass" className='text-decoration-none fw-medium text-black '>Sass</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/Options" className='text-decoration-none fw-medium text-black '>Options</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/Color" className='text-decoration-none fw-medium text-black '>Color</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/Colormodes" className='text-decoration-none fw-medium text-black '>Color modes</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/Components" className='text-decoration-none fw-medium text-black '>Components</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/CSSvariables" className='text-decoration-none fw-medium text-black '>CSS variables</Link>
            </p>
            <p className="pt-2 pb-2 ps-2 Link-actives">
            <Link to="/products/Optimize" className='text-decoration-none fw-medium text-black '>Optimize</Link>
            </p>
          
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
        </div>
     
      <Outlet />
    </div>
    </div>
  );
}

export default Products;
