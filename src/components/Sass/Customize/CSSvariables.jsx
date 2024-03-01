
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion ,Dropdown,DropdownButton} from 'react-bootstrap';
import { Link } from 'react-router-dom';



function CSSvariables() {
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


  const Serif = `body {
    font: 1rem/1.5 var(--bs-font-sans-serif);
  }
  a {
    color: var(--bs-blue);
  }`;
  
  const html ='<html>';

  const Focus=`$focus-ring-width:      .25rem;
  $focus-ring-opacity:    .25;
  $focus-ring-color:      rgba($primary, $focus-ring-opacity);
  $focus-ring-blur:       0;
  $focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color;`

  const Prefix =`--#{$prefix}focus-ring-width: #{$focus-ring-width};
  --#{$prefix}focus-ring-opacity: #{$focus-ring-opacity};
  --#{$prefix}focus-ring-color: #{$focus-ring-color};`;


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
                     <Nav.Link href="#Root-variables" className='text-black pt-3'>Root variables</Nav.Link>
                  </a>
                  <a href="" >
                    <Nav.Link href="#Component-variables" className='pt-1 text-black'>Component variables</Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#Prefix" className='pt-1 text-black'>Prefix </Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#Examples" className='pt-1 text-black'>Examples</Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#Focus-variables" className='pt-1 text-black'>Focus variables</Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#Grid-breakpoints" className='pt-1 text-black'>Grid breakpoints</Nav.Link>
                  </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>


            <h1 className='pt-5'>CSS variables</h1>
            <h4 className='pt-3 fw-300 ' >Use Bootstrap’s CSS custom properties for fast and forward-looking design and development.</h4>
            <p className='pt-3'>Bootstrap includes many <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"> CSS custom properties (variables)</a> in its compiled CSS for real-time customization without the need to recompile Sass. These provide easy access to commonly used values like our theme colors, breakpoints, and primary font stacks when working in your browser’s inspector, a code sandbox, or general prototyping.</p>
            <p className='pt-3'> <span className='m-0 fw-bold'>All our custom properties are prefixed with</span> <span className='m-0 text-danger bg-lightgray'>bs-</span>  to avoid conflicts with third party CSS.</p>
            <h3 className='pt-5' id='Root-variables'>Root variables</h3>
            <p className='pt-3'>Here are the variables we include (note that the  <span className='m-0 text-danger bg-lightgray'>:root</span> is required) that can be accessed anywhere Bootstrap’s CSS is loaded. They’re located in our  <span className='m-0 text-danger bg-lightgray'>_root.scss</span> file and included in our compiled dist files.</p>
            <h3 className='pt-5' id='Component-variables'>Component variables</h3>
            <p className='pt-3'>Bootstrap 5 is increasingly making use of custom properties as local variables for various components. This way we reduce our compiled CSS, ensure styles aren’t inherited in places like nested tables, and allow some basic restyling and extending of Bootstrap components after Sass compilation.</p>
            <p className='pt-3'>Have a look at our table documentation for some <a href="#">insight into how we’re using CSS variables</a> . Our <a href="#">navbars also use CSS variables</a> as of v5.2.0. We’re also using CSS variables across our grids—primarily for gutters the <a href="#">new opt-in CSS grid</a>—with more component usage coming in the future.</p>
            <h3 className='pt-5' id='Prefix'>Prefix</h3>
            <p className='pt-3'>Most CSS variables use a prefix to avoid collisions with your own codebase. This prefix is in addition to the -- that’s required on every CSS variable.</p>
            <p className='pt-3'>Customize the prefix via the  <span className='m-0 text-danger bg-lightgray'>$prefix</span> Sass variable. By default, it’s set to  <span className='m-0 text-danger bg-lightgray'>bs-</span> (note the trailing dash).</p>
            <h3 className='pt-5' id='Examples'>Examples</h3>
            <p className='pt-3'>CSS variables offer similar flexibility to Sass’s variables, but without the need for compilation before being served to the browser. For example, here we’re resetting our page’s font and link styles with CSS variables.</p>
            <div className="bootstrap-editor mt-3">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color m-0">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{Serif}</code></div>
                        <div className="col-sm-2 text-sm-end ">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Serif)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            <h3 className='pt-5' id='Focus-variables'>Focus variables</h3>
            <p className='pt-3'>Bootstrap provides custom :focus styles using a combination of Sass and CSS variables that can be optionally added to specific components and elements. We do not yet globally override all :focus styles.</p>
            <p className='pt-3'>In our Sass, we set default values that can be customized before compiling.</p>
            
            <div className='bg-color pb-2 mt-5'>
              <a href="https://github.com/twbs/bootstrap/blob/v5.3.3/scss/_variables.scss" className="text-decoration-none ps-4 text-gray">scss/_variables.scss</a>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{Focus}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Focus)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              </div>
              <p className='pt-3'>Those variables are then reassigned to <span className='m-0 text-danger bg-lightGray'>:root</span> level CSS variables that can be customized in real-time, including with options for <span className='m-0 text-danger bg-lightGray'>x</span> and <span className='m-0 text-danger bg-lightGray'>y</span> offsets (which default to their fallback value of <span className='m-0 text-danger bg-lightGray'>0</span> ).</p>
              <div className='bg-color pb-2 mt-5'>
              <a href="https://github.com/twbs/bootstrap/blob/v5.3.3/scss/_root.scss" className="text-decoration-none ps-4 text-gray">scss/_root.scss</a>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{Prefix}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Prefix)}>
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
            

              <h3 className='pt-5' id='Grid-breakpoints'>Grid breakpoints</h3>
              <p className='pt-3'>While we include our grid breakpoints as CSS variables (except for <span className='m-0 text-danger bg-lightGray'>xs</span> ), be aware that <span className='m-0 fw-bold'> CSS variables do not work in media queries</span>. This is by design in the CSS spec for variables, but may change in coming years with support for env() variables. Check out <a href="https://stackoverflow.com/questions/40722882/css-native-variables-not-working-in-media-queries/47212942#47212942"> this Stack Overflow answer </a> for some helpful links. In the meantime, you can use these variables in other CSS situations, as well as in your JavaScript.</p>
              
              
          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#Root-variables" className='text-black pt-3'>Root variables</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#Component-variables" className='pt-1 text-black'>Component variables</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Prefix" className='pt-1 text-black'>Prefix </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Examples" className='pt-1 text-black'>Examples</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Focus-variables" className='pt-1 text-black'>Focus variables</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Grid-breakpoints" className='pt-1 text-black'>Grid breakpoints</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default CSSvariables;
