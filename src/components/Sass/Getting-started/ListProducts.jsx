
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';




function ListProducts() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (codeText) => {
    try {
      navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Unable to copy to clipboard using Clipboard API:', error);
      fallbackCopyToClipboard(codeText);
    }
  };

  const fallbackCopyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Example = `/* define variables for the primary colors */
  $primary_1: #a2b9bc;
  $primary_2: #b2ad7f;
  $primary_3: #878f99;
  
  /* use the variables */
  .main-header {
    background-color: $primary_1;
  }
  
  .menu-left {
    background-color: $primary_2;
  }
  
  .menu-right {
    background-color: $primary_3;
  }`;

  const Comments = `/* define primary colors */
$primary_1: #a2b9bc;
$primary_2: #b2ad7f;

/* use the variables */
.main-header {
  background-color: $primary_1; // here you can put an inline comment
}`;

  return (
    <div className='pt-5 w-100'>
      <Container fluid>
        <Row className=' ps-4 ps-lg-0 position-relative d-flex justify-content-center'>
          <Col lg={9} className='p-0 pe-4 '>
            <div className='d-lg-none mt-4 '>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className='accordions '>On this page</Accordion.Header>
                  <Accordion.Body className='accordions'>
                  <a href="">
              <Nav.Link href="#WhatYouShouldAlreadyKnow" className='text-black '>What You Should Already Know</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#WhatisSass?" className='pt-1 text-black'>What is Sass?</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#WhyUseSass?" className='pt-1 text-black'>Why Use Sass?</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#ASimpleExamplewhySassisUsefulples" className='pt-1 text-black'>A Simple Example why Sass is Useful</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#HowDoesSassWork?" className='pt-1 text-black'>How Does Sass Work?</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#SassFileType" className='pt-1 text-black'>Sass File Type</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#SassComments" className='pt-1 text-black'>Sass Comments</Nav.Link>
            </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 ' id=''>Sass Introduction</h1>
            <h3 className='pb-3 pt-5' id='WhatYouShouldAlreadyKnow'>What You Should Already Know</h3>
            <p>Before you continue you should have a basic understanding of the following:</p>

            <ul className='ps-5 pt-3'>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <p className='pt-4'>If you want to study these subjects first, find the tutorials on our Home page.</p>
            {/*  */}
            <h3 className='pt-5 pb-3' id='WhatisSass?'>What is Sass?</h3>
            <ul className='ps-5'>
              <li>Sass stands for Syntactically Awesome Stylesheet</li>
              <li>Sass is an extension to CSS</li>
              <li>Sass is a CSS pre-processor</li>
              <li>Sass is completely compatible with all versions of CSS</li>
              <li>Sass reduces repetition of CSS and therefore saves time</li>
              <li>Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006</li>
              <li>Sass is free to download and use</li>
            </ul>

            <h3 className='pt-5 pb-3' id='WhyUseSass?' >Why Use Sass?</h3>
            <p>Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help.</p>
            <p className='mt-3'>Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.</p>
            <h3 className='pt-5 pb-3' id='ASimpleExamplewhySassisUsefulples'>A Simple Example why Sass is Useful</h3>
            <p>Let's say we have a website with three main colors:</p>
            <div style={{ backgroundColor: "#a2b9bc" }} className='pt-3 pb-3 ps-3 mt-4'>
              <p>#a2b9bc</p>
            </div>
            <div style={{ backgroundColor: "#b2ad7f" }} className='pt-3 pb-3 ps-3'>
              <p>#b2ad7f</p>
            </div>
            <div>
              <p style={{ backgroundColor: "#878f99" }} className='pt-3 pb-3 ps-3'>#878f99</p>
            </div>
            <p className='pt-4'>So, how many times do you need to type those HEX values? A LOT of times. And what about variations of the same colors?</p>
            <p className='pt-4'>Instead of typing the above values a lot of times, you can use Sass and write this:</p>
            {/*  */}
            <div className='bg-color pb-2 mt-5'>
              <h4 className='pt-4 ps-3'>Sass Example</h4>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{Example}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Example)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            {/*  */}
            <p className='pt-5 pb-3 '>So, when using Sass, and the primary color changes, you only need to change it in one place.</p>
            <h3 className='pt-5' id='HowDoesSassWork?'>How Does Sass Work?</h3>
            <p className='pt-3'>A browser does not understand Sass code. Therefore, you will need a Sass pre-processor to convert Sass code into standard CSS.</p>
            <p className='pt-4'>This process is called transpiling. So, you need to give a transpiler (some kind of program) some Sass code and then get some CSS code back.</p>
            <div style={{ backgroundColor: "#ffffcc" }} className='pt-3 pb-3 ps-3 mt-4'>
              <p>
                <span className='fw-bold m-0' >Tip:</span> Transpiling is a term for taking a source code written in one language and transform/translate it into another language.</p>
            </div>
            <hr />
            <h3 className='pt-5 pb-3' id='SassFileType'>Sass File Type</h3>
            <p >Sass files has the ".scss" file extension.</p>
            <hr />
            <h3 className='pt-5 pb-3' id='SassComments'>Sass Comments</h3>
            <p >Sass supports standard CSS comments <span className='text-danger bg-lightGray m-0'> /* comment */ </span> , and in addition it supports inline comments <span className='text-danger bg-lightGray m-0 '>// comment:</span> </p>

            <div className='bg-color pb-2 mt-5'>
              <h4 className='pt-4 ps-3'>Sass Example</h4>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{Comments}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Comments)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>

            {/*  */}
          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0  '>
            <a href="">
              <Nav.Link href="#WhatYouShouldAlreadyKnow" className='text-black  pt-3'>What You Should Already Know</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#WhatisSass?" className='pt-1 text-black'>What is Sass?</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#WhyUseSass?" className='pt-1 text-black'>Why Use Sass?</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#ASimpleExamplewhySassisUsefulples" className='pt-1 text-black'>A Simple Example why Sass is Useful</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#HowDoesSassWork?" className='pt-1 text-black'>How Does Sass Work?</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#SassFileType" className='pt-1 text-black'>Sass File Type</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#SassComments" className='pt-1 text-black'>Sass Comments</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default ListProducts;
