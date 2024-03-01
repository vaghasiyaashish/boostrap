
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Overview() {

  return (
    <div className='pt-5 w-100'>
      <Container fluid>
        <Row className=' ps-4 ps-lg-4 position-relative d-flex justify-content-start'>
          <Col lg={9} className='p-0 pe-4 '>
            <h1 className='pt-5 '>Overview</h1>
            <h4 className='pt-3 fw-300 ' >Learn how to theme, customize, and extend Bootstrap with Sass, a boatload of global options, an expansive color system, and more.</h4>
            <Container fluid className='mt-5'>
                <Row>
                    <Col lg={6} className='ps-lg-0 pt-4'>
                        <a href="" className='text-decoration-none fs-23 fw-500'>Sass</a>
                        <p>Utilize our source Sass files to take advantage of variables, maps, mixins, and functions </p>
                    </Col>
                    <Col lg={6}className=' pt-4'>
                        <a href="" className='text-decoration-none fs-23 fw-500'>Options</a>  
                        <p>Quickly customize Bootstrap with built-in variables to easily toggle global CSS preferences</p> 
                    </Col>
                    <Col lg={6} className='ps-lg-0 pt-4'>
                        <a href="" className='text-decoration-none fs-23 fw-500'>Color</a>
                        <p>Learn about and customize the color systems that support the entire toolkit.</p>
                    </Col>
                    <Col lg={6} className=' pt-4'>
                        <a href="" className='text-decoration-none fs-23 fw-500'>Color modes</a>
                        <p>Explore our default light mode and the new dark mode, or create custom color modes yourself.</p>
                    </Col>
                    <Col lg={6} className='ps-lg-0 pt-4'>
                        <a href="" className='text-decoration-none fs-23 fw-500'>Components</a>
                        <p>Learn how we build nearly all our components responsively and with base and modifier classes.</p>
                    </Col>
                    <Col lg={6} className=' pt-4'>
                        <a href="" className='text-decoration-none fs-23 fw-500'>CSS variables</a>
                        <p>Use Bootstrap's CSS custom properties for fast and forward-looking design and development.</p>
                    </Col>
                    <Col lg={6} className='ps-lg-0 pt-4'>
                        <a href="" className='text-decoration-none fs-23 fw-500'>Optimize</a>
                        <p>Keep your projects lean, responsive, and maintainable so you can deliver the best experience.</p>
                    </Col>
                </Row>
            </Container>
          </Col>
          
        </Row>
      </Container >
    </div >


  );
}

export default Overview;
