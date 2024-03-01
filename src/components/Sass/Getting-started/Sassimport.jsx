
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';




function Sassimport() {
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
    
  const SassImport =`@import filename;` 
  const ImportEx = `@import "variables";
  @import "colors";
  @import "reset";`
  const resetscss=`html,
  body,
  ul,
  ol {
    margin: 0;
    padding: 0;
  }`
  const standardscss=`@import "reset";

  body {
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    color: red;
  }`
  const CSSImport =`
  html, body, ul, ol {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    color: red;
  }`;
  const SassPartial =`
  _filename;
  `;
  const colorsscss =`
  $myPink: #EE82EE;
  $myBlue: #4169E1;
  $myGreen: #8FBC8F;
  `
  const Importcolor =`@import "colors";

  body {
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    color: $myBlue;
  }`
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
                       <Nav.Link href="#SassImportingFiles" className='text-black '>Sass Importing Files</Nav.Link>
                     </a>
                     <a href="" >
                       <Nav.Link href="#SassPartials" className='pt-1 text-black'>Sass Partials</Nav.Link>
                     </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 '>Sass @import and Partials</h1>
            <hr />
             <p className='pt-3'>Sass keeps the CSS code DRY (Don't Repeat Yourself). One way to write DRY code is to keep related code in separate files.</p>
             <p className='pt-3'>You can create small files with CSS snippets to include in other Sass files. Examples of such files can be: reset file, variables, colors, fonts, font-sizes, etc. </p>
             <h3 className='pt-5' id='SassImportingFiles'>Sass Importing Files</h3>
             <p className='pt-3'>Just like CSS, Sass also supports the <span className='m-0 text-danger bg-lightGray'>@import</span> directive.</p>
             <p className='pt-3'>The <span className='m-0 text-danger bg-lightGray'>@import</span> directive allows you to include the content of one file in another.</p>
             <p className='pt-3'>The CSS <span className='m-0 text-danger bg-lightGray'>@import</span> directive has a major drawback due to performance issues; it creates an extra HTTP request each time you call it. However, the Sass <span className='m-0 text-danger bg-lightGray'>@import</span> directive includes the file in the CSS; so no extra HTTP call is required at runtime!</p>
              
            {/*  */}
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>Sass Import Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{SassImport }</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(SassImport)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-3'> <span className='fw-bold m-0'>Tip:</span>You do not need to specify a file extension, Sass automatically assumes that you mean a .sass or .scss file. You can also import CSS files. The <span className='m-0 text-danger bg-lightGray'>@import</span> directive imports the file and any variables or mixins defined in the imported file can then be used in the main file.</p>
            <p className='pt-3'>You can import as many files as you need in the main file:</p>
            {/*  */}
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>Example</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{ImportEx}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(ImportEx)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
           <p className='pt-5'>Let's look at an example: Let's assume we have a reset file called "reset.scss", that looks like this:</p>
           <div className='bg-color pb-2 mt-5'>
              <h3 className='pt-4 ps-3'>Example</h3>
              <h5 className='pt-2 ps-3'>SCSS Syntax (reset.scss):</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{resetscss}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(resetscss)}>
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
            <p className='pt-5'>and now we want to import the "reset.scss" file into another file called "standard.scss".</p>
            <p className='pt-3'>Here is how we do it: It is normal to add the <span className='m-0 text-danger bg-lightGray'>@import</span> directive at the top of a file; this way its content will have a global scope:</p>
            {/*  */}
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>SCSS Syntax (standard.scss):</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{standardscss}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(standardscss)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-3'>So, when the "standard.css" file is transpiled, the CSS will look like this:</p>
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>CSS output:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{CSSImport}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(CSSImport)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <h3 className='pt-5' id='SassPartials'>Sass Partials</h3>
            <p className='pt-3'>By default, Sass transpiles all the .scss files directly. However, when you want to import a file, you do not need the file to be transpiled directly.</p>
            <p className='pt-3'>Sass has a mechanism for this: If you start the filename with an underscore, Sass will not transpile it. Files named this way are called partials in Sass.</p>
            <p className='pt-3'>So, a partial Sass file is named with a leading underscore:</p>
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>Sass Partial Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-1 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{SassPartial}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(SassPartial)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-3'>The following example shows a partial Sass file named "_colors.scss". (This file will not be transpiled directly to "colors.css"):</p>
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>"_colors.scss":</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-1 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{colorsscss}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(colorsscss)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
          <p className='pt-3'>Now, if you import the partial file, omit the underscore. Sass understands that it should import the file "_colors.scss":</p>
          <div className='bg-color pb-2 mt-5'>
            <h5 className='pt-2 ps-3'>Example</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-1 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{Importcolor}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Importcolor)}>
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


          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0  '>
            <a href="">
              <Nav.Link href="#SassImportingFiles" className='text-black pt-3'>Sass Importing Files</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#SassPartials" className='pt-1 text-black'>Sass Partials</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default Sassimport;
;
