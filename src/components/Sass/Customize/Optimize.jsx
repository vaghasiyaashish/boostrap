
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion ,Dropdown,DropdownButton} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Optimizes() {
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


  const Serif = `// Configuration
  @import "functions";
  @import "variables";
  @import "variables-dark";
  @import "maps";
  @import "mixins";
  @import "utilities";
  
  // Layout & components
  @import "root";
  @import "reboot";
  @import "type";
  @import "images";
  @import "containers";
  @import "grid";
  @import "tables";
  @import "forms";
  @import "buttons";
  @import "transitions";
  @import "dropdown";
  @import "button-group";
  @import "nav";
  @import "navbar";
  @import "card";
  @import "accordion";
  @import "breadcrumb";
  @import "pagination";
  @import "badge";
  @import "alert";
  @import "progress";
  @import "list-group";
  @import "close";
  @import "toasts";
  @import "modal";
  @import "tooltip";
  @import "popover";
  @import "carousel";
  @import "spinners";
  @import "offcanvas";
  @import "placeholders";
  
  // Helpers
  @import "helpers";
  
  // Utilities
  @import "utilities/api";`;
  
  const html ='<html>';

  const bootstrap=`// Import just what we need

  // import 'bootstrap/js/dist/alert';
  // import 'bootstrap/js/dist/button';
  // import 'bootstrap/js/dist/carousel';
  // import 'bootstrap/js/dist/collapse';
  // import 'bootstrap/js/dist/dropdown';
  import 'bootstrap/js/dist/modal';
  // import 'bootstrap/js/dist/offcanvas';
  // import 'bootstrap/js/dist/popover';
  // import 'bootstrap/js/dist/scrollspy';
  // import 'bootstrap/js/dist/tab';
  // import 'bootstrap/js/dist/toast';
  // import 'bootstrap/js/dist/tooltip';`

  const Prefix =`import Modal from 'bootstrap/js/dist/modal'
  const modal = new Modal(document.getElementById('myModal'))`;

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
                    <Nav.Link href="#Lean-Sass-imports " className='text-black pt-3'>Lean Sass imports</Nav.Link>
                  </a>
                  <a href="" >
                    <Nav.Link href="#Lean-JavaScript" className='pt-1 text-black'>Lean JavaScript</Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#Autoprefixer-.browserslistrc" className='pt-1 text-black'>Autoprefixer .browserslistrc</Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#Unused-CSS" className='pt-1 text-black'>Unused CSS </Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#Minify-and-gzip" className='pt-1 text-black'>Minify and gzip</Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#Non-blocking-files" className='pt-1 text-black'>Non-blocking files</Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#Always-use-HTTPS" className='pt-1 text-black'>Always use HTTPS</Nav.Link>
                  </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>


            <h1 className='pt-5'>Optimizes</h1>
            <h4 className='pt-3 fw-300 ' >Keep your projects lean, responsive, and maintainable so you can deliver the best experience and focus on more important jobs.</h4>
            <h3 className='pt-5' id='Lean-Sass-imports'>Lean Sass imports</h3>
            <p className='pt-3'>When using Sass in your asset pipeline, make sure you optimize Bootstrap by only <span className='m-0 text-danger'>@import</span>ing the components you need. Your largest optimizations will likely come from the <span className='m-0 text-danger bg-bg-lightGray'>Layout & Components</span> section of our <span className='m-0 text-danger bg-lightGray'>bootstrap.scss.</span></p>
            
            <div className='bg-color pb-2 mt-5'>
              <a href="https://github.com/twbs/bootstrap/blob/v5.3.3/scss/_variables.scss" className="text-decoration-none ps-4 text-gray">scss/_variables.scss</a>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{Serif}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Serif)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              </div>
              <p className='pt-3'>If you’re not using a component, comment it out or delete it entirely. For example, if you’re not using the carousel, remove that import to save some file size in your compiled CSS. Keep in mind there are some dependencies across Sass imports that may make it more difficult to omit a file.</p>
              <h3 className='pt-5' id='Lean-JavaScript'>Lean JavaScript</h3>
              <p className='pt-3'>Bootstrap’s JavaScript includes every component in our primary dist files (<span className='m-0 text-danger bg-lightGray'>bootstrap.js</span> and <span className='m-0 text-danger bg-lightGray'>bootstrap.min.js</span> ), and even our primary dependency (Popper) with our bundle files (<span className='m-0 text-danger bg-lightGray'>bootstrap.bundle.js</span> and <span className='m-0 text-danger bg-lightGray'></span> bootstrap.bundle.min.js). While you’re customizing via Sass, be sure to remove related JavaScript.</p>
              <p className='pt-3'>For instance, assuming you’re using your own JavaScript bundler like Webpack, Parcel, or Vite, you’d only import the JavaScript you plan on using. In the example below, we show how to just include our modal JavaScript:</p>
              <div className="bootstrap-editor mt-3">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color m-0">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{bootstrap}</code></div>
                        <div className="col-sm-2 text-sm-end ">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(bootstrap)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              <p className='pt-0'>This way, you’re not including any JavaScript you don’t intend to use for components like buttons, carousels, and tooltips. If you’re importing dropdowns, tooltips or popovers, be sure to list the Popper dependency in your <span className='m-0 text-danger bg-lightGray'>package.json</span> file.</p>
              <div className='mt-3 pt-4 pb-4 ps-3 pe-3 bg-info-subtle'>
                <p className='ps-3'><span className='m-0 text-info-emphasis fw-bold'>Heads up!</span> Files in <span className='m-0 text-danger'>bootstrap/js/dist</span> use the <span className='text-info-emphasis fw-bold'>default export</span>. To use them, do the following:</p>
              <div className="bootstrap-editor mt-3">
                <div className="code-container">
                  <pre className="code-editor p-4 border m-0">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{Prefix}</code></div>
                        <div className="col-sm-2 text-sm-end ">
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
             <h3 className='pt-5' id='Autoprefixer-.browserslistrc'>Autoprefixer .browserslistrc</h3>
             <p>Bootstrap depends on Autoprefixer to automatically add browser prefixes to certain CSS properties. Prefixes are dictated by our <span className='m-0 text-danger bg-lightGray'>.browserslistrc</span> file, found in the root of the Bootstrap repo. Customizing this list of browsers and recompiling the Sass will automatically remove some CSS from your compiled CSS, if there are vendor prefixes unique to that browser or version.</p>
            <h3 className='pt-5' id='Unused-CSS'>Unused CSS</h3>
            <p className='PT-3 fst-italic'>Help wanted with this section, please consider opening a PR. Thanks!</p>
            <p className='pt-3'>While we don’t have a prebuilt example for using <a href="https://github.com/FullHuman/purgecss">PurgeCSS</a> with Bootstrap, there are some helpful articles and walkthroughs that the community has written. Here are some options:</p>
            <ul className='ps-4'>
              <li className='pt-3'><a href="https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772">https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772</a></li>
              <li className='pt-3'><a href="https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/">https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/</a></li>
            </ul>
            <p className='pt-3'>Lastly, this <a href="https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/">CSS Tricks article on unused CSS</a> shows how to use PurgeCSS and other similar tools.</p>
            <h3 className='pt-5' id='Minify-and-gzip'>Minify and gzip</h3>
            <p>Whenever possible, be sure to compress all the code you serve to your visitors. If you’re using Bootstrap dist files, try to stick to the minified versions (indicated by the <span className='m-0 text-danger bg-lightGray'>.min.css</span> and  <span className='m-0 text-danger bg-lightGray'>.min.js</span> extensions). If you’re building Bootstrap from the source with your own build system, be sure to implement your own minifiers for HTML, CSS, and JS.</p>
            <h3 className='pt-5' id='Non-blocking-files'>Non-blocking files</h3>
            <p className='pt-3'>While minifying and using compression might seem like enough, making your files non-blocking ones is also a big step in making your site well-optimized and fast enough.</p>
            <p className='pt-3'>If you are using a <a href="https://developer.chrome.com/docs/lighthouse/overview/">Lighthouse</a>  plugin in Google Chrome, you may have stumbled over FCP. <a href="https://web.dev/articles/fcp">The First Contentful Paint</a> metric measures the time from when the page starts loading to when any part of the page’s content is rendered on the screen.</p>
            <p className='pt-3'>You can improve FCP by deferring non-critical JavaScript or CSS. What does that mean? Simply, JavaScript or stylesheets that don’t need to be present on the first paint of your page should be marked with <span className='m-0 text-danger bg-lightGray'>async</span>  or <span className='m-0 text-danger bg-lightGray'>defer</span> attributes.</p>
            <p className='pt-3'>This ensures that the less important resources are loaded later and not blocking the first paint. On the other hand, critical resources can be included as inline scripts or styles.</p>         
            <p className='pt-3'>If you want to learn more about this, there are already a lot of great articles about it:</p>
             <ul className='ps-3 pt-3'>
              <li><a href="https://web.dev/render-blocking-resources/">https://web.dev/render-blocking-resources/</a></li>
              <li><a href="https://web.dev/defer-non-critical-css/">https://web.dev/defer-non-critical-css/</a></li>
             </ul>
             <h3 className='pt-5' id='Always-use-HTTPS'>Always use HTTPS </h3>
             <p className='pt-3'>Your website should only be available over HTTPS connections in production. HTTPS improves the security, privacy, and availability of all sites, and <a href="https://https.cio.gov/everything/">there is no such thing as non-sensitive web traffic</a>. The steps to configure your website to be served exclusively over HTTPS vary widely depending on your architecture and web hosting provider, and thus are beyond the scope of these docs.</p>
             <p className='pt-3'>Sites served over HTTPS should also access all stylesheets, scripts, and other assets over HTTPS connections. Otherwise, you’ll be sending users <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content">mixed active content</a>, leading to potential vulnerabilities where a site can be compromised by altering a dependency. This can lead to security issues and in-browser warnings displayed to users. Whether you’re getting Bootstrap from a CDN or serving it yourself, ensure that you only access it over HTTPS connections.</p>
          
         
          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#Lean-Sass-imports " className='text-black pt-3'>Lean Sass imports</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#Lean-JavaScript" className='pt-1 text-black'>Lean JavaScript</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Autoprefixer-.browserslistrc" className='pt-1 text-black'>Autoprefixer .browserslistrc</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Unused-CSS" className='pt-1 text-black'>Unused CSS </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Minify-and-gzip" className='pt-1 text-black'>Minify and gzip</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Non-blocking-files" className='pt-1 text-black'>Non-blocking files</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Always-use-HTTPS" className='pt-1 text-black'>Always use HTTPS</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default Optimizes;
