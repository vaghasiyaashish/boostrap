
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion ,Dropdown,DropdownButton} from 'react-bootstrap';




function Colormodes() {
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


  const Example = `import Dropdown from 'react-bootstrap/Dropdown';
  import DropdownButton from 'react-bootstrap/DropdownButton';
  
  function ButtonDarkExample() {
    return (
      <>
      <div className='container'>
      <div className="row">
        <div className="col">
        <Dropdown data-bs-theme="dark " className='mt-3 mb-3'>
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
        <div className="col">
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          title="Dropdown button"
          data-bs-theme="dark"
          className='mt-3 mb-3'
        >
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </DropdownButton>
        </div>
       </div>
     </div>
      </>
    );
  }
  
  export default ButtonDarkExample;`;
  
  const html ='<html>';

  const CSSOutput1=`// Color mode variables in _root.scss
  @include color-mode(dark) {
    // CSS variable overrides here...
  }`

  const VariableScope =`$color-mode-type: data;

  @include color-mode(dark) {
    .element {
      color: var(--bs-primary-text-emphasis);
      background-color: var(--bs-primary-bg-subtle);
    }
  }`;

  const CSSOutput2=` [data-bs-theme=dark] .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }`;

  const  mediaquery =`$color-mode-type: media-query;

  @include color-mode(dark) {
    .element {
      color: var(--bs-primary-text-emphasis);
      background-color: var(--bs-primary-bg-subtle);
    }
  }`
  const CSSOutput3 =`@media (prefers-color-scheme: dark) {
    .element {
      color: var(--bs-primary-text-emphasis);
      background-color: var(--bs-primary-bg-subtle);
    }
  }`
  const Custom =`[data-bs-theme="blue"] {
  --bs-body-color: var(--bs-white);
  --bs-body-color-rgb: #{to-rgb($white)};
  --bs-body-bg: var(--bs-blue);
  --bs-body-bg-rgb: #{to-rgb($blue)};
  --bs-tertiary-bg: #{$blue-600};

  .dropdown-menu {
    --bs-dropdown-bg: #{mix($blue-500, $blue-600)};
    --bs-dropdown-link-active-bg: #{$blue-700};
  }

  .btn-secondary {
    --bs-btn-bg: #{mix($gray-600, $blue-400, .5)};
    --bs-btn-border-color: #{rgba($white, .25)};
    --bs-btn-hover-bg: #{darken(mix($gray-600, $blue-400, .5), 5%)};
    --bs-btn-hover-border-color: #{rgba($white, .25)};
    --bs-btn-active-bg: #{darken(mix($gray-600, $blue-400, .5), 10%)};
    --bs-btn-active-border-color: #{rgba($white, .5)};
    --bs-btn-focus-border-color: #{rgba($white, .5)};
    --bs-btn-focus-box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .2);
  }
}`
const customdata =`<div data-bs-theme="blue">
...
</div>`
const Adding =`// Required
@import "functions";
@import "variables";
@import "variables-dark";

// Add a custom color to $theme-colors
$custom-colors: (
  "custom-color": #712cf9
);
$theme-colors: map-merge($theme-colors, $custom-colors);

@import "maps";
@import "mixins";
@import "utilities";

// Add a custom color to new theme maps

// Light mode
$custom-colors-text: ("custom-color": #712cf9);
$custom-colors-bg-subtle: ("custom-color": #e1d2fe);
$custom-colors-border-subtle: ("custom-color": #bfa1fc);

$theme-colors-text: map-merge($theme-colors-text, $custom-colors-text);
$theme-colors-bg-subtle: map-merge($theme-colors-bg-subtle, $custom-colors-bg-subtle);
$theme-colors-border-subtle: map-merge($theme-colors-border-subtle, $custom-colors-border-subtle);

// Dark mode
$custom-colors-text-dark: ("custom-color": #e1d2f2);
$custom-colors-bg-subtle-dark: ("custom-color": #8951fa);
$custom-colors-border-subtle-dark: ("custom-color": #e1d2f2);

$theme-colors-text-dark: map-merge($theme-colors-text-dark, $custom-colors-text-dark);
$theme-colors-bg-subtle-dark: map-merge($theme-colors-bg-subtle-dark, $custom-colors-bg-subtle-dark);
$theme-colors-border-subtle-dark: map-merge($theme-colors-border-subtle-dark, $custom-colors-border-subtle-dark);

// Remainder of Bootstrap imports
@import "root";
@import "reboot";
// etc`

const datas =`--#{$prefix}body-color: #{$body-color-dark};
--#{$prefix}body-color-rgb: #{to-rgb($body-color-dark)};
--#{$prefix}body-bg: #{$body-bg-dark};
--#{$prefix}body-bg-rgb: #{to-rgb($body-bg-dark)};

--#{$prefix}emphasis-color: #{$body-emphasis-color-dark};
--#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color-dark)};

--#{$prefix}secondary-color: #{$body-secondary-color-dark};
--#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color-dark)};
--#{$prefix}secondary-bg: #{$body-secondary-bg-dark};
--#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg-dark)};

--#{$prefix}tertiary-color: #{$body-tertiary-color-dark};
--#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color-dark)};
--#{$prefix}tertiary-bg: #{$body-tertiary-bg-dark};
--#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg-dark)};

@each $color, $value in $theme-colors-text-dark {
  --#{$prefix}#{$color}-text-emphasis: #{$value};
}

@each $color, $value in $theme-colors-bg-subtle-dark {
  --#{$prefix}#{$color}-bg-subtle: #{$value};
}

@each $color, $value in $theme-colors-border-subtle-dark {
  --#{$prefix}#{$color}-border-subtle: #{$value};
}

--#{$prefix}heading-color: #{$headings-color-dark};

--#{$prefix}link-color: #{$link-color-dark};
--#{$prefix}link-hover-color: #{$link-hover-color-dark};
--#{$prefix}link-color-rgb: #{to-rgb($link-color-dark)};
--#{$prefix}link-hover-color-rgb: #{to-rgb($link-hover-color-dark)};

--#{$prefix}code-color: #{$code-color-dark};
--#{$prefix}highlight-color: #{$mark-color-dark};
--#{$prefix}highlight-bg: #{$mark-bg-dark};

--#{$prefix}border-color: #{$border-color-dark};
--#{$prefix}border-color-translucent: #{$border-color-translucent-dark};

--#{$prefix}form-valid-color: #{$form-valid-color-dark};
--#{$prefix}form-valid-border-color: #{$form-valid-border-color-dark};
--#{$prefix}form-invalid-color: #{$form-invalid-color-dark};
--#{$prefix}form-invalid-border-color: #{$form-invalid-border-color-dark};`

const responsive =`@mixin color-mode($mode: light, $root: false) {
    @if $color-mode-type == "media-query" {
      @if $root == true {
        @media (prefers-color-scheme: $mode) {
          :root {
            @content;
          }
        }
      } @else {
        @media (prefers-color-scheme: $mode) {
          @content;
        }
      }
    } @else {
      [data-bs-theme="#{$mode}"] {
        @content;
      }
    }
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
                      <Nav.Link href="#Dark-mode" className='text-black '>Dark mode</Nav.Link>
                    </a>
                    <a href="" >
                      <Nav.Link href="#Example" className='pt-1 text-black'>Example</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#How-it-works" className='pt-1 text-black'>How it works </Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Usage" className='pt-1 text-black'>Usage </Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Enable-dark-mode" className='pt-1 text-black'>Enable dark mode</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Building-with-Sass" className='pt-1 text-black'>Building with Sass </Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Custom-color-modes" className='pt-1 text-black'>Custom color modes</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#JavaScript" className='pt-1 text-black'>JavaScript</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Adding-theme-colors " className='pt-1 text-black'>Adding theme colors</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#CSS" className='pt-1 text-black'>CSS</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Variables" className='pt-1 text-black'>Variables</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Sass-variables" className='pt-1 text-black'>Sass variables</Nav.Link>
                    </a>
                    <a href="">
                      <Nav.Link href="#Sass-mixins" className='pt-1 text-black'>Sass mixins</Nav.Link>
                    </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>


            <h1 className='pt-5 ' id=''>Color modes</h1>
            <h4 className='pt-3 fw-300 ' >Bootstrap now supports color modes, or themes, as of v5.3.0. Explore our default light color mode and the new dark mode, or create your own using our styles as your template.</h4>
            <div className='mt-4 guide pt-4 pb-4 ps-3'>
              <p> <span className='guide-color m-0'>Try it yourself! </span> Download the source code and working demo for using Bootstrap with Stylelint, and the color modes from the <a href="https://github.com/twbs/examples/tree/main/color-modes"> twbs/examples repository</a> You can also <a href="https://stackblitz.com/github/twbs/examples/tree/main/color-modes?file=index.html">open the example in StackBlitz.</a> </p>
            </div>
             <h3 className='pt-5' id='Dark-mode'>Dark mode</h3>
            <p className='pt-3'><span className='m-0 fw-bold'>Bootstrap now supports color modes, starting with dark mode!</span>  With v5.3.0 you can implement your own color mode toggler (see below for an example from Bootstrap’s docs) and apply the different color modes as you see fit. We support a light mode (default) and now dark mode. Color modes can be toggled globally on the <code>{html}</code> element, or on specific components and elements, thanks to the <span className='text-danger bg-lightGray m-0'> data-bs-theme</span>  attribute.</p>
            <p className='pt-3'>Alternatively, you can also switch to a media query implementation thanks to our color mode mixin—see <a href="#">the usage section for details</a>. Heads up though—this eliminates your ability to change themes on a per-component basis as shown below.</p>
            <h3 className='pt-5' id='Example'>Example</h3>
            <p>For example, to change the color mode of a dropdown menu, add <span className='text-danger bg-lightGray m-0'>data-bs-theme="light"</span>  or <span className='text-danger bg-lightGray m-0'>data-bs-theme="dark"</span> data-bs-theme="dark" to the parent <span className='text-danger bg-lightGray m-0'>.dropdown</span> . Now, no matter the global color mode, these dropdowns will display with the specified theme value.</p>
            {/*  */}
            <div className='mt-5 border rounded-3'>
              <div className='bg-color d-flex justify-content-around'>
                <div className='container'>
                      <div className="row">
                        <div className="col">
                        <Dropdown data-bs-theme="dark " className='mt-4 mb-4'>
                          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                            Dropdown Button
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" active>
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        </div>
                        <div className="col">
                        <DropdownButton
                          id="dropdown-button-dark-example2"
                          variant="secondary"
                          title="Dropdown button"
                          data-bs-theme="dark"
                          className='mt-4 mb-4'
                        >
                          <Dropdown.Item href="#/action-1" active>
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                        </DropdownButton>
                        </div>
                    </div>
                </div>
              </div>
              <div>
                <p className='editor-bg-color pt-3 pb-3 ps-3 m-0'>
                HTML
                </p>
              </div>
              <div className="bootstrap-editor ">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color m-0">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{Example}</code></div>
                        <div className="col-sm-2 text-sm-end ">
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
          
            <h3 className='pt-5' id='How-it-works'>How it works</h3>
            <ul>
                <li className='pt-3'>As shown above, color mode styles are controlled by the <span className='text-danger bg-lightGray m-0'>data-bs-theme</span> attribute. This attribute can be applied to the <code>{html}</code> element, or to any other element or Bootstrap component. If applied to the <code>{html}</code> element, it will apply to everything. If applied to a component or element, it will be scoped to that specific component or element.</li>
                <li className='pt-3'>For each color mode you wish to support, you’ll need to add new overrides for the shared global CSS variables. We do this already in our <span className='text-danger bg-lightGray m-0'>_root.scss</span> stylesheet for dark mode, with light mode being the default values. In writing color mode specific styles, use the mixin:</li>
            </ul>
            <div className="bootstrap-editor mt-5">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color rounded-bottom-3">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{CSSOutput1}</code></div>
                        <div className="col-sm-2 text-sm-end ">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(CSSOutput1)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              <ul>
                <li>We use a custom <span className='text-danger bg-lightGray m-0'>_variables-dark.scss</span> to power those shared global CSS variable overrides for dark mode. This file isn’t required for your own custom color modes, but it’s required for our dark mode for two reasons. First, it’s better to have a single place to reset global colors. Second, some Sass variables had to be overridden for background images embedded in our CSS for accordions, form components, and more.</li>
              </ul>
              <h3 className='pt-5' id='Usage'>Usage</h3>
              <h3 className='pt-5' id='Enable-dark-mode'>Enable dark mode</h3>
              <p className='pt-3'>Enable the built in dark color mode across your entire project by adding the <span className='text-danger bg-lightGray m-0'>data-bs-theme="dark"</span> attribute to the <code>{html}</code>  element. This will apply the dark color mode to all components and elements, other than those with a specific <span className='text-danger bg-lightGray m-0'>data-bs-theme</span> attribute applied. Building on the <a href="#">quick start template:</a></p>
              <p className='pt-3'>Bootstrap does not yet ship with a built-in color mode picker, but you can use the one from our own documentation if you like. <a href="#JavaScript">Learn more in the JavaScript section.</a></p>
              <h3 className='pt-5' id='Building-with-Sass'>Building with Sass </h3>
              <p className='pt-3'>Our new dark mode option is available to use for all users of Bootstrap, but it’s controlled via data attributes instead of media queries and does not automatically toggle your project’s color mode. You can disable our dark mode entirely via Sass by changing <span className='text-danger bg-lightGray m-0'>$enable-dark-mode</span>  to <span className='text-danger bg-lightGray m-0'>false</span>.</p>
              <p className='pt-3'>We use a custom Sass mixin,<span className='text-danger bg-lightGray m-0'>color-mode()</span> , to help you control how color modes are applied. By default, we use a <span className='text-danger bg-lightGray m-0'>data</span> data attribute approach, allowing you to create more user-friendly experiences where your visitors can choose to have an automatic dark mode or control their preference (like in our own docs here). This is also an easy and scalable way to add different themes and more custom color modes beyond light and dark.</p>
              <p className='pt-3'>In case you want to use media queries and only make color modes automatic, you can change the mixin’s default type via Sass variable. Consider the following snippet and its compiled CSS output.</p>
              <div className="bootstrap-editor mt-5">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color m-0">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{VariableScope}</code></div>
                        <div className="col-sm-2 text-sm-end ">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(VariableScope)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              <p className='pt-3'>Outputs to:</p>
              <div className="bootstrap-editor mt-3">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color m-0">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{CSSOutput2}</code></div>
                        <div className="col-sm-2 text-sm-end ">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(CSSOutput2)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              <p className='pt-3'>And when setting to <span className='text-danger bg-lightGray m-0'>media-query:</span></p>
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
              <p className='pt-3'>Outputs to:</p>
              <div className="bootstrap-editor mt-3">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color m-0">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{CSSOutput3}</code></div>
                        <div className="col-sm-2 text-sm-end ">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(CSSOutput3)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              <h3 className='pt-5' id='Custom-color-modes'>Custom color modes</h3>
              <p className='pt-3'>While the primary use case for color modes is light and dark mode, custom color modes are also possible. Create your own <span className='text-danger bg-lightGray m-0'>data-bs-theme</span> selector with a custom value as the name of your color mode, then modify our Sass and CSS variables as needed. We opted to create a separate <span className='text-danger bg-lightGray m-0'>_variables-dark.scss</span> stylesheet to house Bootstrap’s dark mode specific Sass variables, but that’s not required for you.</p>
              <p className='pt-3'>For example, you can create a “blue theme” with the selector <span className='text-danger bg-lightGray m-0'>data-bs-theme="blue"</span>. In your custom Sass or CSS file, add the new selector and override any global or component CSS variables as needed. If you’re using Sass, you can also use Sass’s functions within your CSS variable overrides.</p>
             
              <div className='bg-color pb-2 mt-5'>
              <a href="https://github.com/twbs/bootstrap/blob/v5.3.3/site/assets/scss/_content.scss" className="text-decoration-none ps-4 text-gray">site/assets/scss/_content.scss</a>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{Custom}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Custom)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              </div>
              <div className="bootstrap-editor mt-5">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color rounded-bottom-3">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{customdata}</code></div>
                        <div className="col-sm-2 text-sm-end ">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(customdata)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              <h3 className='pt-5' id='JavaScript'>JavaScript</h3>
              <p className='pt-3'>To allow visitors or users to toggle color modes, you’ll need to create a toggle element to control the <span className='text-danger bg-lightGray m-0'>data-bs-theme</span> attribute on the root element, <code>{html}</code>. We’ve built a toggler in our documentation that initially defers to a user’s current system color mode, but provides an option to override that and pick a specific color mode.</p>
              <p className='pt-3'>Here’s a look at the JavaScript that powers it. Feel free to inspect our own documentation navbar to see how it’s implemented using HTML and CSS from our own components. It is suggested to include the JavaScript at the top of your page to reduce potential screen flickering during reloading of your site. Note that if you decide to use media queries for your color modes, your JavaScript may need to be modified or removed if you prefer an implicit control.</p>
              <div className="bootstrap-editor mt-5">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color rounded-bottom-3">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{customdata}</code></div>
                        <div className="col-sm-2 text-sm-end ">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(customdata)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              <h3 className='pt-5' id='Adding-theme-colors'>Adding theme colors</h3>
              <p className='pt-3'>Adding a new color in $theme-colors is not enough for some of our components like alerts and list groups. New colors must also be defined in $theme-colors-text, $theme-colors-bg-subtle, and $theme-colors-border-subtle for light theme; but also in $theme-colors-text-dark, $theme-colors-bg-subtle-dark, and $theme-colors-border-subtle-dark for dark theme.</p>
              <p className='pt-3'>This is a manual process because Sass cannot generate its own Sass variables from an existing variable or map. In future versions of Bootstrap, we’ll revisit this setup to reduce the duplication.</p>
              <div className="bootstrap-editor mt-5">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color rounded-bottom-3">
                    <div className="container-fluid">
                      <div className="row d-flex">
                        <div className="col-sm-10"><code>{Adding}</code></div>
                        <div className="col-sm-2 text-sm-end ">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(Adding)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              <h3 className='pt-5' id='CSS'>CSS</h3>
              <h3 className='pt-5' id='Variables'>Variables </h3>
              <p className= 'pt-3'>Dozens of root level CSS variables are repeated as overrides for dark mode. These are scoped to the color mode selector, which defaults to <span className='text-danger bg-lightGray m-0'>data-bs-theme</span> but <a href="#">can be configured</a>  to use a <span className='text-danger bg-lightGray m-0'>prefers-color-schem</span> e media query. Use these variables as a guideline for generating your own new color modes.</p>
              <div className='bg-color pb-2 mt-5'>
              <a href="https://github.com/twbs/bootstrap/blob/v5.3.3/scss/_root.scss" className="text-decoration-none ps-4 text-gray">scss/_root.scss</a>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{datas}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(datas)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              </div>

              <h3 className='pt-5' id='Sass-variables'>Sass variables</h3>
              <p className='pt-3'>CSS variables for our dark color mode are partially generated from dark mode specific Sass variables in <span className='text-danger bg-lightGray m-0'>_variables-dark.scss</span> . This also includes some custom overrides for changing the colors of embedded SVGs used throughout our components.</p>
              <h3 className='pt-5' id='Sass-mixins'>Sass mixins </h3>    
              <p>Styles for dark mode, and any custom color modes you create, can be scoped appropriately to the  <span className='text-danger bg-lightGray m-0'>data-bs-theme</span> attribute selector or media query with the customizable <span className='text-danger bg-lightGray m-0'>color-mode()</span>  mixin. See the <a href="#Building-with-Sass">Sass usage section</a>  for more details.</p>

              <div className='bg-color pb-2 mt-5'>
              <a href="https://github.com/twbs/bootstrap/blob/v5.3.3/scss/mixins/_color-mode.scss" className="text-decoration-none ps-4 text-gray">scss/mixins/_color-mode.scss</a>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{responsive}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(responsive)}>
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
              <Nav.Link href="#Dark-mode" className='text-black pt-3'>Dark mode</Nav.Link>
            </a>
            <a href="" >
              <Nav.Link href="#Example" className='pt-1 text-black'>Example</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#How-it-works" className='pt-1 text-black'>How it works </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Usage" className='pt-1 text-black'>Usage </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Enable-dark-mode" className='pt-1 text-black'>Enable dark mode</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Building-with-Sass" className='pt-1 text-black'>Building with Sass </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Custom-color-modes" className='pt-1 text-black'>Custom color modes</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#JavaScript" className='pt-1 text-black'>JavaScript</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Adding-theme-colors " className='pt-1 text-black'>Adding theme colors</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#CSS" className='pt-1 text-black'>CSS</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Variables" className='pt-1 text-black'>Variables</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Sass-variables" className='pt-1 text-black'>Sass variables</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Sass-mixins" className='pt-1 text-black'>Sass mixins</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default Colormodes;
