
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';




function AddProduct() {
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


  const npm = `npm install -g sass`;
  
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
                       <Nav.Link href="#SystemRequirementsforSass" className='text-black '>System Requirements for Sass</Nav.Link>
                     </a>
                     <a href="" >
                       <Nav.Link href="#OfficialSassWebSite" className='pt-1 text-black'>Official Sass Web Site</Nav.Link>
                     </a>
                     <a href="">
                       <Nav.Link href="#InstallSass" className='pt-1 text-black'>Install Sass</Nav.Link>
                     </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 '> Sass Installation</h1>
            <hr />
            <h3 className='pt-5 ' id='SystemRequirementsforSass'>System Requirements for Sass</h3>
          <ul className='ps-5 pt-4'>
            <li><span className='fw-bold m-0'> Operating system</span> - Sass is platform independent</li>
            <li><span className='fw-bold m-0'> Browser support</span> - Sass works in Edge/IE (from IE 8), Firefox, Chrome, Safari, Opera</li>
            <li><span className='fw-bold m-0'> Programming language</span> - Sass is based on Ruby</li>
          </ul>
          <h3 className='pt-5 ' id='OfficialSassWebSite'>Official Sass Web Site</h3>
          <p className='pt-4 pb-4'>Read more about Sass at the official Sass web site: <a href=" https://sass-lang.com/" target='_blank'> https://sass-lang.com/</a></p>
           <hr />
            {/*  */}
            <h3 className='pt-5 pb-3 ' id='InstallSass' >Install Sass</h3>
            <div className="bootstrap-editor mt-5">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code style={{ width: "100%", display: "block",overflow:"auto" }}>{npm}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(npm)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <p className='pt-3'>There are several ways to install Sass in your system. There are many applications that will get you up and running with Sass in a few minutes for Mac, Windows, and Linux. Some of these are free, but some are paid apps.</p>
            <p className='pt-3'>You can read more about them here: <a href="sass-lang.com/install" target='_blank'>sass-lang.com/install</a></p>

          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#SystemRequirementsforSass" className='text-black pt-3'>System Requirements for Sass</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#OfficialSassWebSite" className='pt-1 text-black'>Official Sass Web Site</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#InstallSass" className='pt-1 text-black'>Install Sass</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default AddProduct;
