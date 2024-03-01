
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';

function Sassmixin() {
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


  const SassNested  = `
    @mixin name {
    property: value;
    property: value;
    ...
  }`;
  const importanttext =`@mixin important-text {
    color: red;
    font-size: 25px;
    font-weight: bold;
    border: 1px solid blue;
  }`;

  const  includemixin =`selector {
    @include mixin-name;
  }`;
   
  const importanttextmixin = `.danger {
    @include important-text;
    background-color: green;
  }
  `
  const Cssincludemixin = `.danger {
    color: red;
    font-size: 25px;
    font-weight: bold;
    border: 1px solid blue;
    background-color: green;
  }`
  const specialtext =`@mixin special-text {
    @include important-text;
    @include link;
    @include special-border;
  }`
  const PassingVariables=`/* Define mixin with two arguments */
  @mixin bordered($color, $width) {
    border: $width solid $color;
  }
  
  .myArticle {
    @include bordered(blue, 1px);  // Call mixin with two values
  }
  
  .myNotes {
    @include bordered(red, 2px); // Call mixin with two values
  }`;
  const CssVariables=`.myArticle {
    border: 1px solid blue;
  }
  
  .myNotes {
    border: 2px solid red;
  }`

  const mixinborder =`@mixin bordered($color: blue, $width: 1px) {
    border: $width solid $color;
  }`

  const myTips =`.myTips {
    @include bordered($color: orange);
  }`

  const VendorPrefixes=`@mixin transform($property) {
    -webkit-transform: $property;
    -ms-transform: $property;
    transform: $property;
  }
  
  .myBox {
    @include transform(rotate(20deg));
  }`

  const myBox=`.myBox {
    -webkit-transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    transform: rotate(20deg);
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
                    <Nav.Link href="#SassMixins" className='text-black '>Sass Mixins</Nav.Link>
                  </a>
                  <a href="" >
                    <Nav.Link href="#DefiningaMixin" className='pt-1 text-black'>Defining a Mixin</Nav.Link>
                  </a>
                  <a href="" >
                    <Nav.Link href="#UsingaMixin" className='pt-1 text-black'>Using a Mixin</Nav.Link>
                  </a>
                  <a href="" >
                    <Nav.Link href="#PassingVariablestoaMixin" className='pt-1 text-black'>Passing Variables to a Mixin</Nav.Link>
                  </a>
                  <a href="" >
                    <Nav.Link href="#DefaultValuesforaMixin" className='pt-1 text-black'>Default Values for a Mixin</Nav.Link>
                  </a>
                  <a href="" >
                    <Nav.Link href="#UsingaMixinForVendorPrefixes" className='pt-1 text-black'>Using a Mixin For Vendor Prefixes</Nav.Link>
                  </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 '>Sass @mixin and @include</h1>
            <hr />
            <h3 className='pt-5 ' id='SassMixins'>Sass Mixins</h3>
             <p className='pt-3 '>The <span className='text-danger bg-lightGray m-0'>@mixin</span> directive lets you create CSS code that is to be reused throughout the website.</p>
             <p className='pt-3'>The  <span className='text-danger bg-lightGray m-0'>@include</span> directive is created to let you use (include) the mixin.</p>
             <h3 className='pt-5 ' id='DefiningaMixin'>Defining a Mixin</h3>
             <p className='pt-3'>A mixin is defined with the <span className='text-danger bg-lightGray m-0'>@mixin</span> directive.</p>
            {/*  */}
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>Sass @mixin Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor  bg-white ">
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
            <p className='pt-5'>The following example creates a mixin named "important-text":</p>
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>SCSS Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{importanttext}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(importanttext)}>
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
                <span className='fw-bold m-0' >Tip:</span> A tip on hyphens and underscore in Sass: Hyphens and underscores are considered to be the same. This means that @mixin important-text { } and @mixin important_text { } are considered as the same mixin!</p>
            </div>
            <hr />
            <h3 className='pt-5' id='UsingaMixin'>Using a Mixin</h3>
            <p className='pt-3'>The <span className='text-danger bg-lightGray m-0'>@include</span> directive is used to include a mixin.</p>
                <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>Sass @include mixin Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{includemixin}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(includemixin)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
          <p className='pt-3'>So, to include the important-text mixin created above:</p>
          <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>SCSS Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{importanttextmixin}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(importanttextmixin)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-5'>The Sass transpiler will convert the above to normal CSS:</p>
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>CSS output:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{Cssincludemixin}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Cssincludemixin)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-5'>A mixin can also include other mixins:</p>
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>SCSS Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{specialtext}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(specialtext)}>
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
           <h3 className='pt-5' id='PassingVariablestoaMixin'>Passing Variables to a Mixin</h3>
           <p className='pt-3'>Mixins accept arguments. This way you can pass variables to a mixin.</p>
           <p className='pt-3'>Here is how to define a mixin with arguments:</p>
           <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>SCSS Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{PassingVariables}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(PassingVariables)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-3'>Notice that the arguments are set as variables and then used as the values (color and width) of the border property.</p>
            <p className='pt-3'>After compilation, the CSS will look like this:</p>
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>CSS Output:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{CssVariables}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(CssVariables)}>
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
            <h3 className='pt-5' id='DefaultValuesforaMixin'>Default Values for a Mixin</h3>
            <p className='pt-3'>It is also possible to define default values for mixin variables:</p>

            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>SCSS Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{mixinborder}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(mixinborder)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-5'>Then, you only need to specify the values that change when you include the mixin:</p>
            {/*  */}
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>SCSS Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{myTips}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(myTips)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <h3 className='pt-5' id='UsingaMixinForVendorPrefixes'>Using a Mixin For Vendor Prefixes</h3>
            <p className='pt-3'>Another good use of a mixin is for vendor prefixes.</p>
            <p className='pt-3'>Here is an example for transform:</p>
            {/*  */}
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>SCSS Syntax:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{VendorPrefixes}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(VendorPrefixes)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-5'>After compilation, the CSS will look like this:</p>
            {/*  */}
            <div className='bg-color pb-2 mt-5'>
              <h5 className='pt-2 ps-3'>CSS Output:</h5>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{myBox}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(myBox)}>
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
              <Nav.Link href="#SassMixins" className='text-black pt-3'>Sass Mixins</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#DefiningaMixin" className='pt-1 text-black'>Defining a Mixin</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#UsingaMixin" className='pt-1 text-black'>Using a Mixin</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#PassingVariablestoaMixin" className='pt-1 text-black'>Passing Variables to a Mixin</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#DefaultValuesforaMixin" className='pt-1 text-black'>Default Values for a Mixin</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#UsingaMixinForVendorPrefixes" className='pt-1 text-black'>Using a Mixin For Vendor Prefixes</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default Sassmixin;
