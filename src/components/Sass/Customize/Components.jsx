
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion ,Dropdown,DropdownButton} from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Components() {
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


  const Example = `// Generate contextual modifier classes for colorizing the alert
  @each $state in map-keys($theme-colors) {
    .alert-#{$state} {
      --#{$prefix}alert-color: var(--#{$prefix}#{$state}-text-emphasis);
      --#{$prefix}alert-bg: var(--#{$prefix}#{$state}-bg-subtle);
      --#{$prefix}alert-border-color: var(--#{$prefix}#{$state}-border-subtle);
      --#{$prefix}alert-link-color: var(--#{$prefix}#{$state}-text-emphasis);
    }
  }`;
  
  const html ='<html>';

  const Listgroup=`// List group contextual variants
  //
  // Add modifier classes to change text and background color on individual items.
  // Organizationally, this must come after the ':hover' states.
  
  @each $state in map-keys($theme-colors) {
    .list-group-item-#{$state} {
      --#{$prefix}list-group-color: var(--#{$prefix}#{$state}-text-emphasis);
      --#{$prefix}list-group-bg: var(--#{$prefix}#{$state}-bg-subtle);
      --#{$prefix}list-group-border-color: var(--#{$prefix}#{$state}-border-subtle);
      --#{$prefix}list-group-action-hover-color: var(--#{$prefix}emphasis-color);
      --#{$prefix}list-group-action-hover-bg: var(--#{$prefix}#{$state}-border-subtle);
      --#{$prefix}list-group-action-active-color: var(--#{$prefix}emphasis-color);
      --#{$prefix}list-group-action-active-bg: var(--#{$prefix}#{$state}-border-subtle);
      --#{$prefix}list-group-active-color: var(--#{$prefix}#{$state}-bg-subtle);
      --#{$prefix}list-group-active-bg: var(--#{$prefix}#{$state}-text-emphasis);
      --#{$prefix}list-group-active-border-color: var(--#{$prefix}#{$state}-text-emphasis);
    }
  }`

  const Responsive =`// We deliberately hardcode the 'bs-' prefix because we check
  // this custom property in JS to determine Popper's positioning
  
  @each $breakpoint in map-keys($grid-breakpoints) {
    @include media-breakpoint-up($breakpoint) {
      $infix: breakpoint-infix($breakpoint, $grid-breakpoints);
  
      .dropdown-menu#{$infix}-start {
        --bs-position: start;
  
        &[data-bs-popper] {
          right: auto;
          left: 0;
        }
      }
  
      .dropdown-menu#{$infix}-end {
        --bs-position: end;
  
        &[data-bs-popper] {
          right: 0;
          left: auto;
        }
      }
    }
  }`;

  const gridbreakpoints=` $grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px
  );`;

  const  mediaquery =`<div class="callout">...</div>`

  const Base =`// Base class
  .callout {}
  
  // Modifier classes
  .callout-info {}
  .callout-warning {}
  .callout-danger {}`

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
                    <Nav.Link href="#Base-classes" className='text-black pt-3'>Base classes</Nav.Link>
                  </a>
                  <a href="" >
                    <Nav.Link href="#Modifiers" className='pt-1 text-black'>Modifiers</Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#Responsive" className='pt-1 text-black'>Responsive </Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#Creating-your-own " className='pt-1 text-black'>Creating your own</Nav.Link>
                  </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>


            <h1 className='pt-5 '>Components</h1>
            <h4 className='pt-3 fw-300 ' >Learn how and why we build nearly all our components responsively and with base and modifier classes.</h4>
            <h3 className='pt-5' id='Base-classes'>Base classes</h3>
            <p className='pt-3'>Bootstrap’s components are largely built with a base-modifier nomenclature. We group as many shared properties as possible into a base class, like  <span className='text-danger bg-lightGray m-0'>.btn</span>, and then group individual styles for each variant into modifier classes, like  <span className='text-danger bg-lightGray m-0'>.btn-primary</span> or <span className='text-danger bg-lightGray m-0'>.btn-success</span>.</p>
            <p className='pt-3'>To build our modifier classes, we use Sass’s  <span className='text-danger bg-lightGray m-0'>@each</span> loops to iterate over a Sass map. This is especially helpful for generating variants of a component by our  <span className='text-danger bg-lightGray m-0'>$theme-colors</span> and creating responsive variants for each breakpoint. As you customize these Sass maps and recompile, you’ll automatically see your changes reflected in these loops.</p>
            <p className='pt-3'>Check out <a href="#Mapsandloops">our Sass maps and loops docs</a>for how to customize these loops and extend Bootstrap’s base-modifier approach to your own code.</p>
            <h3 className='pt-5' id='Modifiers'>Modifiers</h3>
            <p className='pt-3'>Many of Bootstrap’s components are built with a base-modifier class approach. This means the bulk of the styling is contained to a base class (e.g.,  <span className='text-danger bg-lightGray m-0'>.btn</span>) while style variations are confined to modifier classes (e.g.,  <span className='text-danger bg-lightGray m-0'>.btn-danger</span>). These modifier classes are built from the  <span className='text-danger bg-lightGray m-0'>$theme-colors</span>  map to make customizing the number and name of our modifier classes.</p>
            <p className='pt-3'>Here are two examples of how we loop over the  <span className='text-danger bg-lightGray m-0'>$theme-colors</span>  map to generate modifiers to the  <span className='text-danger bg-lightGray m-0'>.alert</span>  and <span className='text-danger bg-lightGray m-0'>.list-group</span> components.</p>
            
            <div className='bg-color pb-2 mt-5'>
              <a href="https://github.com/twbs/bootstrap/blob/v5.3.3/scss/_alert.scss" className="text-decoration-none ps-4 text-gray">scss/_alert.scss</a>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
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
              <div className='bg-color pb-2 mt-5'>
              <a href="https://github.com/twbs/bootstrap/blob/v5.3.3/scss/_list-group.scss" className="text-decoration-none ps-4 text-gray">scss/_list-group.scss</a>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{Listgroup}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Listgroup)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              </div>
              <h3 className='pt-5' id='Responsive'>Responsives</h3>
              <p className='pt-3'>These Sass loops aren’t limited to color maps, either. You can also generate responsive variations of your components. Take for example our responsive alignment of the dropdowns where we mix an <span className='text-danger bg-lightGray m-0'>@each</span> loop for the <span className='text-danger bg-lightGray m-0'>$grid-breakpoints</span> Sass map with a media query include.</p>
              <div className='bg-color pb-2 mt-5'>
              <a href="https://github.com/twbs/bootstrap/blob/v5.3.3/scss/_dropdown.scss" className="text-decoration-none ps-4 text-gray">scss/_dropdown.scss</a>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{Responsive}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Responsive)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              </div>
              <p className='pt-3'>Should you modify your <span className='text-danger bg-lightGray m-0'>$grid-breakpoints</span>, your changes will apply to all the loops iterating over that map.</p>
              <div className='bg-color pb-2 mt-3'>
              <a href="https://github.com/twbs/bootstrap/blob/v5.3.3/scss/_variables.scss" className="text-decoration-none ps-4 text-gray">scss/_variables.scss</a>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{gridbreakpoints}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(gridbreakpoints)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              </div>
              <p className='pt-3'>For more information and examples on how to modify our Sass maps and variables, please refer to <a href="#">the CSS section of the Grid documentation.</a></p>
              <h3 className='pt-5' id='Creating-your-own'>Creating your own </h3>
              <p className='pt-3'>We encourage you to adopt these guidelines when building with Bootstrap to create your own components. We’ve extended this approach ourselves to the custom components in our documentation and examples. Components like our callouts are built just like our provided components with base and modifier classes.</p>
             <div className='border pt-3 pb-3 ps-3 pe-3 mt-3'>
               <div className=' pt-4 pb-4 ps-3 ' style={{backgroundColor:"#f8f9fa"}}>
                <p> <span className=' m-0 fw-bold' >This is a callout.</span> We built it custom for our docs so our messages to you stand out. It has three variants via modifier classes. </p>
              </div>
             </div>
             <div className="bootstrap-editor mt-3">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color m-0">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{mediaquery}</code></div>
                        <div className="col-sm-2 text-sm-end ">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(mediaquery)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>

              <p className='pt-3'>In your CSS, you’d have something like the following where the bulk of the styling is done via <span className='text-danger bg-lightGray m-0'>.callout</span>. Then, the unique styles between each variant is controlled via modifier class.</p>
        
              <div className="bootstrap-editor mt-3">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color m-0">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{Base}</code></div>
                        <div className="col-sm-2 text-sm-end ">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Base)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>

              <p className='pt-3'>For the callouts, that unique styling is just a <span className='text-danger bg-lightGray m-0'>border-left-color</span>. When you combine that base class with one of those modifier classes, you get your complete component family:</p>
              
              <div className='mt-3 pt-4 pb-4 ps-3 bg-info-subtle'>
                <p> <span className='text-info-emphasis fw-bold m-0'>This is an info callout.</span> Example text to show it in action.</p>
              </div>
              <div className='mt-3 pt-4 pb-4 ps-3 bg-warning-subtle'>
                <p> <span className='text-warning-emphasis fw-bold m-0'>This is a warning callout.</span> Example text to show it in action.</p>
              </div>
              <div className='mt-3 pt-4 pb-4 ps-3 bg-danger-subtle'>
                <p> <span className='text-danger-emphasis fw-bold m-0'>This is a danger callout. </span> Example text to show it in action.</p>
              </div>

          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#Base-classes" className='text-black pt-3'>Base classes</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#Modifiers" className='pt-1 text-black'>Modifiers</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Responsive" className='pt-1 text-black'>Responsive </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Creating-your-own " className='pt-1 text-black'>Creating your own</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default Components;
