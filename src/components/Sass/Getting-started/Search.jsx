
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
import flame from '../../Icon/flame.png'
import warning from '../../Icon/warning.png'
import { Accordion } from 'react-bootstrap';




function Search() {

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

  const npm = `npm install react-bootstrap bootstrap`;
  const Importing = `import Button from 'react-bootstrap/Button';
    // or less ideally
import { Button } from 'react-bootstrap';`;
  const bootstrapCode = `<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
    
      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>
      
      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>
      
      <script>var Alert = ReactBootstrap.Alert;</script>`;

  const CSSS = `  {
      /* The following line can be included in your src/index.js or App.js file */
      }
      import 'bootstrap/dist/css/bootstrap.min.css';`;

  const links = `<link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />`;

  const Scss = `/* The following line can be included in a src/App.scss */
    @import '~bootstrap/scss/bootstrap';`;

  const Scsss = `/* The following line can be included in your src/index.js or App.js file */
    import './App.scss';`;

  const Customize = `/* The following block can be included in a custom.scss */
    
      /* make the customizations */
      $theme-colors: (
        'info': tomato,
        'danger': teal
      );
      
      /* import bootstrap to set changes */
      @import '~bootstrap/scss/bootstrap';`

  const custom = `/* The following line can be included in a src/App.scss */
      @import 'custom';`

  const button = `<Stack direction="horizontal" gap={2}>
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
    </Stack>;`

  const heading = `import Badge from 'react-bootstrap/Badge';
    import Button from 'react-bootstrap/Button';
    
    function Example() {
      return (
        <div>
          <h1>
            Example heading
            <Badge bg="secondary" as={Button}>
              New
            </Badge>
          </h1>
        </div>
      );
    }
    
    export default Example;`

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
                      <Nav.Link href="#Installation" className='text-black '>Installation</Nav.Link>
                    </a>
                    <a href="" >
                      <Nav.Link href="#ImportingComponents" className='pt-1 text-black'>Importing Components</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Browserglobals" className='pt-1 text-black'>Browser globals</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Examples" className='pt-1 text-black'>Examples</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Stylesheets" className='pt-1 text-black'>Stylesheets</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#CSS" className='pt-1 text-black'>CSS</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Sass" className='pt-1 text-black'>Sass</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#CustomizeBootstrap" className='pt-1 text-black'>Customize Bootstrap</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Advancedusage" className='pt-1 text-black'>Advanced usage</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#asPropAPI" className='pt-1 text-black'><button className='border-0 text-danger rounded-2'>as</button>Prop API</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Themes" className='pt-1 text-black'>Themes</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Browsersupport" className='pt-1 text-black'>Browser support</Nav.Link>
                    </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 ps-2'> Introduction</h1>
            <p>Learn how to include React Bootstrap in your project.</p>
            <h3 className='pt-5' id='Installation'>Installation</h3>
            <p>The best way to consume React-Bootstrap is via the npm package which you can install with <span className='text-danger m-0'>npm</span>  (or <span className='text-danger m-0'>yarn</span> if you prefer).</p>
            <p className='pt-4'>If you plan on customizing the Bootstrap Sass files, or don't want to use a CDN for the stylesheet, it may be helpful to install <a href="https://getbootstrap.com/docs/5.3/getting-started/download/#npm" target='_blank'>vanilla Bootstrap</a>  as well.</p>


            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{npm}</code>
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
            {/*  */}
            <h3 className='pt-5 pb-3' id='ImportingComponents' >Importing Components</h3>
            <p>You should import individual components like: <span className=' text-danger m-0'>react-bootstrap/Button</span> rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.</p>
            <div className="bootstrap-editor mt-3">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code style={{ width: "100%", display: "block",overflow:"auto" }}>{Importing}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(Importing)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            {/*  */}
            <h3 className='pt-5 pb-3' id='Browserglobals'>Browser globals</h3>
            <p>We provide react-bootstrap.js and react-bootstrap.min.js bundles with all components exported on the window.ReactBootstrap object. These bundles are available on <a href="https://www.jsdelivr.com/package/npm/react-bootstrap" target='_blank'>jsDelivr</a> , as well as in the npm package.</p>
            <div className="bootstrap-editor mt-3">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row d-flex">
                      <div className="col-11 col-sm-10">
                        <code style={{ width: "100%", display: "block",overflow:"auto" }}>{bootstrapCode}</code>
                      </div>
                      <div className="col-1 col-sm-2 text-center">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(bootstrapCode)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            {/*  */}
            <h3 className='pt-5 pb-3 ' id='Examples'>Examples</h3>
            <p>React-Bootstrap has started a repo with a few basic CodeSandbox examples. <a href="https://github.com/react-bootstrap/code-sandbox-examples/blob/master/README.md" target='_blank'>Click here</a> to check them out.</p>
            <h3 className='pt-5 pb-3' id='Stylesheets'>Stylesheets</h3>
            <p>Because React-Bootstrap doesn't depend on a very precise version of Bootstrap, we don't ship with any included CSS. However, some stylesheet <span className='m-0 fw-bold'>is required</span>  to use these components.</p>
            <h3 className='pt-5 pb-3' id='CSS'>CSS</h3>

            <div className="bootstrap-editor mt-3">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11 ">
                        <code  style={{ width: "100%", display: "block",overflow:"auto" }}>{CSSS}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(CSSS)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <p className='pt-3 pb-3'>How and which Bootstrap styles you include is up to you, but the simplest way is to include the latest styles from the CDN. A little more information about the benefits of using a CDN can be found <a href="https://www.w3schools.com/bootstrap/bootstrap_get_started.asp" target='_blank'>here</a>.</p>
            {/*  */}
            <div className="bootstrap-editor mt-3">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code style={{ width: "100%", display: "block",overflow:"auto" }}>{links}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(links)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            {/*  */}
            <h3 className='pt-5 pb-3' id='Sass'>Sass</h3>
            <p>In case you are using <span className='fw-bold m-0'>Sass</span> the simplest way is to include the Bootstrap’s source Sass files in your main Sass file and then require it on your src/index.js or App.js file. This applies to a typical create-react-app application in other use cases you might have to setup the bundler of your choice to compile Sass/SCSS stylesheets to CSS.</p>
            <div className="bootstrap-editor mt-3">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code style={{ width: "100%", display: "block",overflow:"auto" }}>{Scss}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(Scss)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            {/*  */}
            <div className="bootstrap-editor mt-5">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code style={{ width: "100%", display: "block",overflow:"auto" }}>{Scsss}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(Scsss)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            {/*  */}
            <h3 className='pt-5 pb-3 ' id='CustomizeBootstrap'>Customize Bootstrap</h3>
            <p>If you wish to customize the Bootstrap theme or any Bootstrap variables you can create a custom Sass file:</p>
            <div className="bootstrap-editor">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code style={{ width: "100%", display: "block",overflow:"auto" }}>{Customize}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(Customize)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            {/*  */}

            <p className='pt-3 pb-3'>... And import it on the main Sass file.</p>
            <div className="bootstrap-editor mt-3">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code style={{ width: "100%", display: "block",overflow:"auto" }}>{custom}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(custom)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>

            <h3 className='pt-5 pb-3' id='Advancedusage'>Advanced usage</h3>


            <p>See <a href="https://getbootstrap.com/docs/5.3/customize/overview/" target='_blank'>the Bootstrap docs</a> for more advanced use cases and details about customizing stylesheets.</p>
            <h1 className=' pt-5 pb-3 ' id='asPropAPI'> <button className='border-0 text-danger rounded-2'>as</button>Prop API</h1>
            <p>With certain React-Bootstrap components, you may want to modify the component or HTML tag that is rendered.</p>
            <p className=' pt-3 pb-3'>
              If you want to keep all the styling of a particular React-Bootstrap component but switch the component that is finally rendered (whether it's a different React-Bootstrap component, a different custom component, or a different HTML tag) you can use the <button className='border-0 text-danger rounded-2'>as</button> prop to do so.
            </p>
            <p>The example below passes an anchor to the <button className='border-0 text-danger rounded-2'>as</button> prop in a <button className='border-0 text-danger rounded-2'>Button</button> component. This ultimately causes a <button className='border-0 text-danger rounded-2'>a</button> tag to be rendered but with the same styles as a <button className='border-0 text-danger rounded-2'>Button</button> component.</p>
            {/*  */}
            <div className='mt-5'>
              <h6 className='bg-colors pt-3 pb-3 ps-3 mb-0 rounded-top-3'>RESULT</h6>
              <div className='bg-color'>
                <Button as="a" variant="primary" className='ms-3 mt-3 mb-3'>
                  Button as link
                </Button>
                <Button as="a" variant="success" className='ms-3 mt-3 mb-3'>
                  Button as link
                </Button>
              </div>
              <div>
                <h5 className='editor-bg-color fw-bold pt-3 pb-3 ps-3 m-0'>
                  Live Editor
                </h5>
              </div>
              <div className="bootstrap-editor ">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color rounded-bottom-3">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{button}</code></div>
                        <div className="col-sm-2 text-sm-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(button)}>
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
            <p className='pt-3'>Below is an illustration of passing a React Bootstrap component. It contains a <button className='border-0 text-danger rounded-2'>Badge</button>  component and a <button className='border-0 text-danger rounded-2'>Button</button>  component that have been supplied to the <button className='border-0 text-danger rounded-2'>as</button> prop. This finally results in the rendering of a <button className='border-0 text-danger rounded-2'>Button</button>  component with the same styles as a <button className='border-0 text-danger rounded-2'>Badge</button>  component</p>

            {/*  */}
            <div className='mt-5'>
              <h6 className='bg-colors pt-3 pb-3 ps-3 mb-0 rounded-top-3'>RESULT</h6>
              <div className='bg-color'>
                <h1 className='mb-0 pt-3 pb-5 ps-3'>  Example heading  <Badge bg="secondary" as={Button}> New  </Badge> </h1>
              </div>
              <div>
                <h5 className='editor-bg-color fw-bold pt-3 pb-3 ps-3 m-0'>
                  Live Editor
                </h5>
              </div>
              <div className="bootstrap-editor ">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color rounded-bottom-3">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{heading}</code></div>
                        <div className="col-sm-2 text-sm-end ">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(heading)}>
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
            <h3 className='pt-5' id='Themes'>Themes</h3>
            <p>React-Bootstrap is compatible with existing Bootstrap themes. Just follow the installation instructions for your theme of choice.</p>
            {/*  */}
            <div className='thems-bg-color mt-5 rounded-3'>
              <h3 className='pt-3 ps-3'> <span className='m-0'><img src={flame} alt="" /></span> Watch out!</h3>
              <p className='ps-3 pb-3 pt-2'>Because React-Bootstrap completely reimplements Bootstrap's JavaScript, it's not automatically compatible with themes that extend the default JavaScript behaviors.</p>
            </div>
            {/*  */}
            <div className='warning-bg-color mt-3 rounded-3'>
              <h3 className='pt-3 ps-3'> <span className='m-0'><img src={warning} alt="" /></span> Create React App</h3>
              <p className='ps-3 pb-3 pt-2'>If you would like to add a custom theme on your app using Create React App, they have additional documentation for Create React App and Bootstrap <a href="https://create-react-app.dev/docs/adding-bootstrap/#using-a-custom-theme" target='_blank'>here</a> </p>
            </div>
            {/*  */}
            <h3 className='pt-5 pb-4' id='Browsersupport'>Browser support</h3>

            <p>We aim to support all browsers supported by both <a href="https://legacy.reactjs.org/docs/refs-and-the-dom.html" target='_blank'>React</a>  and <a href="https://getbootstrap.com/docs/5.3/getting-started/browsers-devices/#supported-browsers" target='_blank'>Bootstrap</a> .</p>

            <div className='d-flex justify-content-end'>
              <div className='border rounded-3 w-40  ps-3 pt-4 pe-5 pb-4 mt-5 d-flex justify-content-center'>
                <a href="" className='text-decoration-none'>
                <Link to="/products/list" className='text-decoration-none fw-medium text-black fs-22'>Scss Intro</Link>
                </a>
              </div>
            </div>


          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#Installation" className='text-black pt-3'>Installation</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#ImportingComponents" className='pt-1 text-black'>Importing Components</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Browserglobals" className='pt-1 text-black'>Browser globals</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Examples" className='pt-1 text-black'>Examples</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Stylesheets" className='pt-1 text-black'>Stylesheets</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#CSS" className='pt-1 text-black'>CSS</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Sass" className='pt-1 text-black'>Sass</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#CustomizeBootstrap" className='pt-1 text-black'>Customize Bootstrap</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Advancedusage" className='pt-1 text-black'>Advanced usage</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#asPropAPI" className='pt-1 text-black'><button className='border-0 text-danger rounded-2'>as</button>Prop API</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Themes" className='pt-1 text-black'>Themes</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Browsersupport" className='pt-1 text-black'>Browser support</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default Search;
