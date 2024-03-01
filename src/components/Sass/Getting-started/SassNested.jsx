
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';




function SassNested() {
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


  const SassNested  = `nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li {
      display: inline-block;
    }
    a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }
  }`;
  const CssNested =`{
    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      nav li {
        display: inline-block;
      }
      nav a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
      }
  }`;

  const  NestedProperties =`font: {
    family: Helvetica, sans-serif;
    size: 18px;
    weight: bold;
  }
  
  text: {
    align: center;
    transform: lowercase;
    overflow: hidden;
  }`;
   
  const CssProperties = `font-family: Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  
  text-align: center;
  text-transform: lowercase;
  text-overflow: hidden;`
  return (
    <div className='pt-5 w-100'>
      <Container fluid>
        <Row className=' ps-lg-5 ps-4'>
          <Col lg={9} className='p-0 pe-4 '>
            <div className='d-lg-none mt-4 '>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className='accordions '>On this page</Accordion.Header>
                  <Accordion.Body className='accordions'>
                    <a href="">
                     <Nav.Link href="#SassNestedRules" className='text-black '>Sass Nested Rules</Nav.Link>
                   </a>
                   <a href="" >
                     <Nav.Link href="#SassNestedProperties" className='pt-1 text-black'>Sass Nested Properties</Nav.Link>
                   </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 '>Sass Nested Rules and Properties</h1>
            <hr />
            <h3 className='pt-5 ' id='SassNestedRules'>Sass Nested Rules</h3>
             <p className='pt-3'>Sass lets you nest CSS selectors in the same way as HTML.</p>
             <p className='pt-3'>Look at an example of some Sass code for a site's navigation:</p>

            {/*  */}
            <div className='bg-color pb-2 mt-5'>
              <h3 className='pt-4 ps-3'>Example</h3>
              <h5 className='pt-2 ps-3'>SCSS Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{SassNested}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(SassNested)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-3'>Notice that in Sass, the <span className='m-0 text-danger bg-lightGray'> ul</span> , <span className='m-0 text-danger bg-lightGray'> li</span>, and <span className='m-0 text-danger bg-lightGray'>a</span> selectors are nested inside the nav selector.</p>
            <p className='pt-3'>While in CSS, the rules are defined one by one (not nested):</p>
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>CSS Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{CssNested}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(CssNested)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
           <p className='pt-4 pb-4'>Because you can nest properties in Sass, it is cleaner and easier to read than standard CSS.</p>
           <hr />
           <h3 className='pt-5' id='SassNestedProperties'>Sass Nested Properties</h3>
           <p className='pt-3'>Many CSS properties have the same prefix, like font-family, font-size and font-weight or text-align, text-transform and text-overflow.</p>
           <p className='pt-3'>With Sass you can write them as nested properties:</p>
           <div className='bg-color pb-2 mt-5'>
              <h3 className='pt-4 ps-3'>Example</h3>
              <h5 className='pt-2 ps-3'>SCSS Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{NestedProperties}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(NestedProperties)}>
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
            <p className='pt-5'>The Sass transpiler will convert the above to normal CSS:</p>
            {/*  */}
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>CSS Output:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{CssProperties}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(CssProperties)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#SassNestedRules" className='text-black pt-3'>Sass Nested Rules</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#SassNestedProperties" className='pt-1 text-black'>Sass Nested Properties</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default SassNested;
