
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';




function SassVariables() {
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


  const Variable = `$variablename: value;`;
  
  const Syntax =`$myFont: Helvetica, sans-serif;
  $myColor: red;
  $myFontSize: 18px;
  $myWidth: 680px;
  
  body {
    font-family: $myFont;
    font-size: $myFontSize;
    color: $myColor;
  }
  
  #container {
    width: $myWidth;
  }`;

  const CSSOutput1=`body {
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    color: red;
  }
  
  #container {
    width: 680px;
  }`

  const VariableScope =`$myColor: red;

  h1 {
    $myColor: green;
    color: $myColor;
  }
  
  p {
    color: $myColor;
  }`;

  const CSSOutput2=` h1 {
    color: green;
  }
  
  p {
    color: red;
  }`;
  const p =`<p>`
  const h1 =`<h1>`

  const  Sassglobal =`$myColor: red;

  h1 {
    $myColor: green !global;
    color: $myColor;
  }
  
  p {
    color: $myColor;
  }`
  const CSSOutput3 =`h1 {
    color: green;
  }
  
  p {
    color: green;
  }`
  return (
    <div className='pt-5 w-100'>
      <Container fluid>
        <Row className='ps-4 ps-lg-0 position-relative d-flex justify-content-center'>
          <Col lg={9} className='p-0 pe-4 '>
            <div className='d-lg-none mt-4 '>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className='accordions '>On this page</Accordion.Header>
                  <Accordion.Body className='accordions'>
                  <a href="">
                    <Nav.Link href="#SassVariables" className='text-black '>Sass Variables</Nav.Link>
                  </a>
                  <a href="" >
                    <Nav.Link href="#SassVariableScope" className='pt-1 text-black'>Sass Variable Scope</Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#UsingSass!global" className='pt-1 text-black'>Using Sass !global</Nav.Link>
                  </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 '> Sass Variables</h1>
            <hr />
            <h3 className='pt-5 ' id='SassVariables'>Sass Variables</h3>
            <p className='pt-3'>Variables are a way to store information that you can re-use later.</p>
            <p className='pt-3'>With Sass, you can store information in variables, like:</p>

          <ul className='ps-5 pt-4'>
            <li>strings</li>
            <li>numbers</li>
            <li>colors</li>
            <li>booleans</li>
            <li>lists</li>
            <li>nulls</li>
          </ul>

          <p className='pt-4'>Sass uses the $ symbol, followed by a name, to declare variables:</p>
            {/*  */}

            <div className='bg-color pb-2 mt-5'>
              <h4 className='pt-4 ps-3'>Sass Variable Syntax:</h4>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-2 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{Variable}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Variable)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-3'>The following example declares 4 variables named myFont, myColor, myFontSize, and myWidth. After the variables are declared, you can use the variables wherever you want:</p>
            <div className='bg-color pb-2 mt-5'>
              <h4 className='pt-4 ps-3'>SCSS Syntax:</h4>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{Syntax}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Syntax)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-3 '>So, when the Sass file is transpiled, it takes the variables (myFont, myColor, etc.) and outputs normal CSS with the variable values placed in the CSS, like this:</p>
            <div className='bg-color pb-2 mt-5 mb-5'>
              <h4 className='pt-4 ps-3'>CSS Output:</h4>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white "> 
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{CSSOutput1}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(CSSOutput1)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
             <hr />
             <h3 className='pt-5' id='SassVariableScope'>Sass Variable Scope</h3>
             <p className='pt-3'>Sass variables are only available at the level of nesting where they are defined.</p>
             <p className='pt-3'>Look at the following example:</p>
             <div className='bg-color pb-2 mt-5 mb-5'>
              <h4 className='pt-4 ps-3'>SCSS Syntax:</h4>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white "> 
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{VariableScope}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(VariableScope)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-3'>Will the color of the text inside a <code className='bg-danger-light'>{p}</code> tag be red or green? It will be red!</p>
            <p className='pt-3'>The other definition, $myColor: green; is inside the <code className='bg-danger-light'>{h1}</code> rule, and will only be available there!</p>
            <p className='pt-3'>So, the CSS output will be:</p>
            {/*  */}
            <div className='bg-color pb-2 mt-5 mb-5'>
              <h4 className='pt-4 ps-3'>CSS Output:</h4>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white "> 
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{CSSOutput2}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(CSSOutput2)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-3 pb-3'>Ok, that is the default behavior for variable scope.</p>
            <hr />
            <h3 className='pt-5' id='UsingSass!global'>Using Sass !global</h3>
            <p className='pt-3'>The default behavior for variable scope can be overridden by using the <span className='m-0 text-danger bg-lightGray' >!global</span> switch.</p>
            <p className='pt-3'><span className='m-0 text-danger bg-lightGray' >!global</span> indicates that a variable is global, which means that it is accessible on all levels.</p>
            <p className='pt-3'>Look at the following example (same as above; but with <span className='m-0 text-danger bg-lightGray' >!global</span> added):</p>
             
            <div className='bg-color pb-2 mt-5'>
              <h4 className='pt-4 ps-3'>SCSS Syntax:</h4>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{ Sassglobal}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Sassglobal)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-3'>Now the color of the text inside a  <code className='bg-danger-light'>{p}</code> tag will be green!</p>
            <p className='pt-3'>So, the CSS output will be:</p>

            <div className='bg-color pb-2 mt-5'>
              <h4 className='pt-4 ps-3'>CSS Output:</h4>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{CSSOutput3}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(CSSOutput3)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: "#ffffcc" }} className='pt-3 pb-3 ps-3 mt-4'>
              <p>
                <span className='fw-bold m-0' >Tip:</span> Global variables should be defined outside any rules. It could be wise to define all global variables in its own file, named "_globals.scss", and include the file with the @include keyword.</p>
            </div>
          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#SassVariables" className='text-black pt-3'>Sass Variables</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#SassVariableScope" className='pt-1 text-black'>Sass Variable Scope</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#UsingSass!global" className='pt-1 text-black'>Using Sass !global</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default SassVariables;
