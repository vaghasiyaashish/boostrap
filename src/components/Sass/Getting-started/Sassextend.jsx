
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';




function Sassextend() {
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


  const extendDirective  = `.button-basic  {
    border: none;
    padding: 15px 30px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
  }
  
  .button-report  {
    @extend .button-basic;
    background-color: red;
  }
  
  .button-submit  {
    @extend .button-basic;
    background-color: green;
    color: white;
  }`;
  const CssextendDirective =`.button-basic, .button-report, .button-submit {
    border: none;
    padding: 15px 30px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
  }
  
  .button-report  {
    background-color: red;
  }
  
  .button-submit  {
    background-color: green;
    color: white;
  }`;

  const  Button =`<button class="button-basic button-report">Report this</button>`;
   

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
                    <Nav.Link href="#Sass@extendDirective" className='text-black '>Sass @extend Directive</Nav.Link>
                  </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 '>Sass @extend and Inheritance</h1>
            <hr />
            <h3 className='pt-5 ' id='Sass@extendDirective'>Sass @extend Directive</h3>
             <p className='pt-3'>The <span className='m-0 text-danger bg-lightGray'>@extend</span> directive lets you share a set of CSS properties from one selector to another.</p>
             <p className='pt-3'>The <span className='m-0 text-danger bg-lightGray'>@extend</span> directive is useful if you have almost identically styled elements that only differ in some small details.</p>
             <p className='pt-3'>The following Sass example first creates a basic style for buttons (this style will be used for most buttons). Then, we create one style for a "Report" button and one style for a "Submit" button. Both "Report" and "Submit" button inherit all the CSS properties from the .button-basic class, through the <span className='m-0 text-danger bg-lightGray'>@extend</span> directive. In addition, they have their own colors defined:</p>
            {/*  */}
            <div className='bg-color pb-2 mt-5'>
              
              <h5 className='pt-2 ps-3'>SCSS Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{extendDirective}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(extendDirective)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-3'>After compilation, the CSS will look like this:</p>
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>CSS Output:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{CssextendDirective}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(CssextendDirective)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
           <p className='pt-4 pb-4'>By using the <span className='m-0 text-danger bg-lightGray'>@extend</span> directive, you do not need to specify several classes for an element in your HTML code, like this: {Button}. You just need to specify .button-report to get both sets of styles.</p>
          <p>The <span className='m-0 text-danger bg-lightGray'>@extend</span>@extend directive helps keep your Sass code very DRY.</p>
          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#Sass@extendDirective" className='text-black pt-3'>Sass @extend Directive</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default Sassextend;
