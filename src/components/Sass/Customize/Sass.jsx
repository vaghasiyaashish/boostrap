
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';




function Sass() {
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


  const extendDirective  = `your-project/
  ├── scss/
  │   └── custom.scss
  └── node_modules/
  │   └── bootstrap/
  │       ├── js/
  │       └── scss/
  └── index.html`;

  const CssextendDirective =`// Custom.scss
  // Option A: Include all of Bootstrap
  
  // Include any default variable overrides here (though functions won't be available)
  
  @import "../node_modules/bootstrap/scss/bootstrap";
  
  // Then add additional custom code here`;

  const  Customscss =`// Custom.scss
  // Option B: Include parts of Bootstrap
  
  // 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
  @import "../node_modules/bootstrap/scss/functions";
  
  // 2. Include any default variable overrides here
  
  // 3. Include remainder of required Bootstrap stylesheets (including any separate color mode stylesheets)
  @import "../node_modules/bootstrap/scss/variables";
  @import "../node_modules/bootstrap/scss/variables-dark";
  
  // 4. Include any default map overrides here
  
  // 5. Include remainder of required parts
  @import "../node_modules/bootstrap/scss/maps";
  @import "../node_modules/bootstrap/scss/mixins";
  @import "../node_modules/bootstrap/scss/root";
  
  // 6. Optionally include any other parts as needed
  @import "../node_modules/bootstrap/scss/utilities";
  @import "../node_modules/bootstrap/scss/reboot";
  @import "../node_modules/bootstrap/scss/type";
  @import "../node_modules/bootstrap/scss/images";
  @import "../node_modules/bootstrap/scss/containers";
  @import "../node_modules/bootstrap/scss/grid";
  @import "../node_modules/bootstrap/scss/helpers";
  
  // 7. Optionally include utilities API last to generate classes based on the Sass map in '_utilities.scss'
  @import "../node_modules/bootstrap/scss/utilities/api";
  
  // 8. Add additional custom code here `;
   
  const Sassglobally= `
  # Install Sass globally
npm install -g sass

# Watch your custom Sass for changes and compile it to CSS
sass --watch ./scss/custom.scss ./css/custom.css`
  const csslink =`<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Custom Bootstrap</title>
      <link href="/css/custom.css" rel="stylesheet">
    </head>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>`
  const body =`<body>`;
  const Variabledefaults=`// Required
  @import "../node_modules/bootstrap/scss/functions";
  
  // Default variable overrides
  $body-bg: #000;
  $body-color: #111;
  
  // Required
  @import "../node_modules/bootstrap/scss/variables";
  @import "../node_modules/bootstrap/scss/variables-dark";
  @import "../node_modules/bootstrap/scss/maps";
  @import "../node_modules/bootstrap/scss/mixins";
  @import "../node_modules/bootstrap/scss/root";
  
  // Optional Bootstrap components here
  @import "../node_modules/bootstrap/scss/reboot";
  @import "../node_modules/bootstrap/scss/type";
  // etc`

  const themecolors =`$primary: #0074d9;
$danger: #ff4136;`
const themecolors2 =`$theme-colors: (
  "primary": $primary,
  "danger": $danger
);`
const Addtomap =`// Create your own map
$custom-colors: (
  "custom-color": #900
);

// Merge the maps
$theme-colors: map-merge($theme-colors, $custom-colors);`

const Removefrommap =`// Required
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

$theme-colors: map-remove($theme-colors, "info", "light", "dark");

@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Optional
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc`;

const colors =`.custom-element {
  color: $gray-100;
  background-color: $dark;
}`

const colors2 =`// Tint a color: mix a color with white
@function tint-color($color, $weight) {
  @return mix(white, $color, $weight);
}

// Shade a color: mix a color with black
@function shade-color($color, $weight) {
  @return mix(black, $color, $weight);
}

// Shade the color if the weight is positive, else tint it
@function shift-color($color, $weight) {
  @return if($weight > 0, shade-color($color, $weight), tint-color($color, -$weight));
}`
 const parameters =`.custom-element {
  color: tint-color($primary, 10%);
}

.custom-element-2 {
  color: shade-color($danger, 30%);
}

.custom-element-3 {
  color: shift-color($success, 40%);
  background-color: shift-color($success, -60%);
}`
const map =`@each $color, $value in $theme-colors {
  .swatch-#{$color} {
    color: color-contrast($value);
  }
}`
const needs =`.custom-element {
  color: color-contrast(#000); // returns 'color: #fff'
}`
const colormap =`.custom-element {
  color: color-contrast($dark); // returns 'color: #fff'
}`
const Subtract =`$border-radius: .25rem;
$border-width: 1px;

.element {
  // Output calc(.25rem - 1px) is valid
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Output the same calc(.25rem - 1px) as above
  border-radius: subtract($border-radius, $border-width);
}`
const Subtracts =`$border-radius: .25rem;
$border-width: 0;

.element {
  // Output calc(.25rem - 0) is invalid
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Output .25rem
  border-radius: subtract($border-radius, $border-width);
}`;
const colors3 =`@mixin color-scheme($name) {
  @media (prefers-color-scheme: #{$name}) {
    @content;
  }
}`
const customelement =`.custom-element {
  @include color-scheme(light) {
    // Insert light mode styles here
  }

  @include color-scheme(dark) {
    // Insert dark mode styles here
  }
}`
const braket =`<, >`;
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
                     <Nav.Link href="#Filestructure" className='text-black '>File structure</Nav.Link>
                   </a> 
                   <a href="">
                     <Nav.Link href="#Importing" className='text-black '>Importing </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#Compiling" className='text-black '>Compiling </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#Variabledefaults" className='text-black '>Variable defaults </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#Mapsandloops" className='text-black '>Maps and loops </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#Modifymap" className='text-black '>Modify map </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#Addtomap" className='text-black '>Add to map </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#Removefrommap" className='text-black '>Remove from map </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#Requiredkeys" className='text-black '>Required keys </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#Functions" className='text-black '>Functions  </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#Colors" className='text-black '>Colors  </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#Colorcontrast" className='text-black '>Color contrast  </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#EscapeSVG" className='text-black '>Escape SVG </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#AddandSubtractfunctions" className='text-black '>Add and Subtract functions </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#Mixins" className='text-black '>Mixins </Nav.Link>
                   </a>
                   <a href="">
                     <Nav.Link href="#Colorschemes" className='text-black '>Color schemes </Nav.Link>
                   </a>

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5  '>Sass</h1>
            <h4 className='pt-1 fw-300 ' >Utilize our source Sass files to take advantage of variables, maps, mixins, and functions to help you build faster and customize your project.</h4>

             <p className='pt-5'>Utilize our source Sass files to take advantage of variables, maps, mixins, and more.</p>
             <h3 className='pt-5' id='Filestructure'>File structure</h3>
             <p className='pt-3'>Whenever possible, avoid modifying Bootstrap’s core files. For Sass, that means creating your own stylesheet that imports Bootstrap so you can modify and extend it. Assuming you’re using a package manager like npm, you’ll have a file structure that looks like this:</p>
            {/*  */}
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{extendDirective}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(extendDirective)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <p className='pt-3'>If you’ve downloaded our source files and aren’t using a package manager, you’ll want to manually create something similar to that structure, keeping Bootstrap’s source files separate from your own.</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{extendDirective}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(extendDirective)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <h3 className='pt-5' id='Importing'>Importing</h3>
            <p className='pt-3'>In your <span className='m-0 text-danger bg-lightGray'>custom.scss</span>, you’ll import Bootstrap’s source Sass files. You have two options: include all of Bootstrap, or pick the parts you need. We encourage the latter, though be aware there are some requirements and dependencies across our components. You also will need to include some JavaScript for our plugins.</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{CssextendDirective}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(CssextendDirective)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>

            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{Customscss}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(Customscss)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
 
          <p className='pt-3'>With that setup in place, you can begin to modify any of the Sass variables and maps in your <span className='m-0 text-danger bg-lightGray'>custom.scss</span>. You can also start to add parts of Bootstrap under the <span className='m-0 text-danger bg-lightGray'>// Optional</span> section as needed. We suggest using the full import stack from our <span className='m-0 text-danger bg-lightGray'>bootstrap.scss</span> file as your starting point. </p>
          <h3 className='pt-5' id='Compiling'>Compiling</h3>
          <p>In order to use your custom Sass code as CSS in the browser, you need a Sass compiler. Sass ships as a CLI package, but you can also compile it with other build tools like <a href="https://gulpjs.com/">Gulp</a> or <a href="https://webpack.js.org/">Webpack</a> , or with a GUI applications. Some IDEs also have Sass compilers built in or as downloadable extensions.</p>
          <p className='pt-3'>We like to use the CLI to compile our Sass, but you can use whichever method you prefer. From the command line, run the following:</p>
          <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{Sassglobally}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(Sassglobally)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <p>Learn more about your options at <a href="">sass-lang.com/install</a> and <a href="">compiling with VS Code</a>.</p>
            <div className='mt-4 guide pt-4 pb-4 ps-3'>
              <p> <span className='guide-color m-0'>Using Bootstrap with another build tool? </span> Consider reading our guides for compiling with <a href="#">Webpack</a>, <a href="#">Parcel</a>, or <a href="#">Vite</a>. We also have production-ready demos in <a href="https://github.com/twbs/examples">our examples repository on GitHub</a>.</p>
            </div>
            <h3 className='pt-5' id='Including'>Including</h3>
            <p className='pt-3'>Once your CSS is compiled, you can include it in your HTML files. Inside your index.html you’ll want to include your compiled CSS file. Be sure to update the path to your compiled CSS file if you’ve changed it.</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{csslink}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(csslink)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <h3 className='pt-5' id='Variabledefaults'>Variable defaults</h3>
            <p className='pt-3'>Every Sass variable in Bootstrap includes the <span className='m-0 text-danger bg-lightGray'>!default</span> flag allowing you to override the variable’s default value in your own Sass without modifying Bootstrap’s source code. Copy and paste variables as needed, modify their values, and remove the <span className='m-0 text-danger bg-lightGray'>!default</span> flag. If a variable has already been assigned, then it won’t be re-assigned by the default values in Bootstrap.</p>
            <p className='pt-3'>You will find the complete list of Bootstrap’s variables in <span className='m-0 text-danger bg-lightGray'>scss/_variables.scss</span>. Some variables are set to <span className='m-0 text-danger bg-lightGray'>null</span>, these variables don’t output the property unless they are overridden in your configuration.</p>
            <p className='pt-3'>Variable overrides must come after our functions are imported, but before the rest of the imports.</p>
            <p className='pt-3'>Here’s an example that changes the background-color and color for the <code className='bg-danger-light'>{body}</code> when importing and compiling Bootstrap via npm:</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{Variabledefaults}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(Variabledefaults)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <p className='pt-2'>Repeat as necessary for any variable in Bootstrap, including the global options below.</p>
            <div className='mt-4 guide pt-4 pb-4 ps-3'>
              <p> <span className='guide-color m-0'>Get started with Bootstrap via npm with our starter project!</span> Head to the <a href="#">Sass & JS example</a> template repository to see how to build and customize Bootstrap in your own npm project. Includes Sass compiler, Autoprefixer, Stylelint, PurgeCSS, and Bootstrap Icons.</p>
            </div>
            <h3 className='pt-5' id='Mapsandloops'>Maps and loops</h3>
            <p  className='pt-3'>Bootstrap includes a handful of Sass maps, key value pairs that make it easier to generate families of related CSS. We use Sass maps for our colors, grid breakpoints, and more. Just like Sass variables, all Sass maps include the <span className='m-0 text-danger bg-lightGray'>!default</span> flag and can be overridden and extended.</p>
            <p className='pt-3'>Some of our Sass maps are merged into empty ones by default. This is done to allow easy expansion of a given Sass map, but comes at the cost of making removing items from a map slightly more difficult.</p>
            <h3 className='pt-5' id='Modifymap'>Modify map</h3>
            <p className='pt-3'>All variables in the  <span className='m-0 text-danger bg-lightGray'>$theme-colors</span> map are defined as standalone variables. To modify an existing color in our  <span className='m-0 text-danger bg-lightGray'>$theme-colors</span> map, add the following to your custom Sass file:</p>             
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{themecolors}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(themecolors)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
          <p className='pt-3'>Later on, these variables are set in Bootstrap’s  <span className='m-0 text-danger bg-lightGray'>$theme-colors</span> map:</p>
          <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{themecolors2}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(themecolors2)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <h3 className='pt-5' id='Addtomap'>Add to map </h3>
            <p>Add new colors to  <span className='m-0 text-danger bg-lightGray'>$theme-colors</span>, or any other map, by creating a new Sass map with your custom values and merging it with the original map. In this case, we’ll create a new <span className='m-0 text-danger bg-lightGray'> $custom-colors</span> map and merge it with  <span className='m-0 text-danger bg-lightGray'>$theme-colors</span>.</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{Addtomap}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(Addtomap)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>

            <h3 className='pt-5' id='Removefrommap'>Remove from map </h3>
            <p className='pt-3'>To remove colors from <span className='m-0 text-danger bg-lightGray'>$theme-colors</span>, or any other map, use <span className='m-0 text-danger bg-lightGray'>map-remove</span>. Be aware you must insert <span className='m-0 text-danger bg-lightGray'>$theme-colors</span> between our requirements just after its definition in <span className='m-0 text-danger bg-lightGray'>variables</span> and before its usage in <span className='m-0 text-danger bg-lightGray'>maps</span>:</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{Removefrommap}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(Removefrommap)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>

            <h3 className='pt-5' id='Requiredkeys'>Required keys</h3>
            <p className='pt-3'>Bootstrap assumes the presence of some specific keys within Sass maps as we used and extend these ourselves. As you customize the included maps, you may encounter errors where a specific Sass map’s key is being used.</p>
            <p className='pt-3'>For example, we use the <span className='m-0 text-danger bg-lightGray'>primary</span>, <span className='m-0 text-danger bg-lightGray'>success</span>, and <span className='m-0 text-danger bg-lightGray'>danger</span> keys from <span className='m-0 text-danger bg-lightGray'>$theme-colors</span> for links, buttons, and form states. Replacing the values of these keys should present no issues, but removing them may cause Sass compilation issues. In these instances, you’ll need to modify the Sass code that makes use of those values.</p>
            <h3 className='pt-5' id='Functions'>Functions </h3>
            <h3 className='pt-5' id='Colors'>Colors </h3>
            <p className='pt-3'>Next to the <a href="#">Sass maps</a> we have, theme colors can also be used as standalone variables, like <span className='m-0 text-danger bg-lightGray'>$primary</span>.</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{colors}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(colors)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <p className='pt-3'>You can lighten or darken colors with Bootstrap’s <span className='m-0 text-danger bg-lightGray'>tint-color()</span> and <span className='m-0 text-danger bg-lightGray'>shade-color()</span> functions. These functions will mix colors with black or white, unlike Sass’ native <span className='m-0 text-danger bg-lightGray'>lighten()</span> and <span className='m-0 text-danger bg-lightGray'>darken()</span> functions which will change the lightness by a fixed amount, which often doesn’t lead to the desired effect.</p>
            <p className='pt-3'><span className='m-0 text-danger bg-lightGray'>shift-color()</span> combines these two functions by shading the color if the weight is positive and tinting the color if the weight is negative.</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{colors2}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(colors2)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <div className='bg-color pb-2 mt-5'>
              <div className='d-flex justify-content-between pt-3'>
              <a className='ps-4 text-secondary text-decoration-none' href="https://github.com/twbs/bootstrap/blob/v5.3.3/scss/_functions.scss">scss/_functions.scss</a>
              <div className='pe-4'>
              <button className="copy-button actives pe-2 border-0" onClick={() => copyToClipboard(colors2)}>
                <FontAwesomeIcon icon={faCopy} />
              </button>
              </div>
              </div>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor bg-white p-3">
                      <code style={{ width: "100%", display: "block", overflow: "auto" }}>{colors2}</code>
                  </pre>
                </div>
              </div>
            </div>
            <p className='pt-3'>In practice, you’d call the function and pass in the color and weight parameters.</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{parameters}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(parameters)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <h3 className='pt-5' id='Colorcontrast'>Color contrast </h3>
            <p className='pt-3'>In order to meet the <a href="https://www.w3.org/TR/WCAG/">Web Content Accessibility Guidelines (WCAG)</a> contrast requirements, authors <span className='m-0 fw-bold'>must</span> provide a minimum <a href="https://www.w3.org/TR/WCAG/#contrast-minimum">text color contrast of 4.5:1</a> and a minimum <a href="https://www.w3.org/TR/WCAG/#non-text-contrast">non-text color contrast of 3:1</a>, with very few exceptions.</p>
            <p className='pt-3'>To help with this, we included the <span className='m-0 text-danger bg-lightGray'>color-contrast</span> function in Bootstrap. It uses the <a href="https://www.w3.org/TR/WCAG/#dfn-contrast-ratio">WCAG contrast ratio algorithm</a> for calculating contrast thresholds based on <a href="https://www.w3.org/TR/WCAG/#dfn-relative-luminance">relative luminance</a> in an <span className='m-0 text-danger bg-lightGray'>sRGB</span> color space to automatically return a light (<span className='m-0 text-danger bg-lightGray'>#fff</span>), dark (<span className='m-0 text-danger bg-lightGray'>#212529</span>) or black (<span className='m-0 text-danger bg-lightGray'>#000</span>) contrast color based on the specified base color. This function is especially useful for mixins or loops where you’re generating multiple classes.</p>
            <p className='pt-3'>For example, to generate color swatches from our <span className='m-0 text-danger bg-lightGray'>$theme-colors</span> map:</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{map}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(map)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <p className='pt-3'>It can also be used for one-off contrast needs:</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{needs}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(needs)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <p className='pt-3'>You can also specify a base color with our color map functions:</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{colormap}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(colormap)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <h3 className='pt-5' id='EscapeSVG'>Escape SVG </h3>
            <p>We use the <span className='m-0 text-danger bg-lightGray'>escape-svg</span> function to escape the <code className='bg-lightGray'>{braket}</code> and  <span className='m-0 text-danger bg-lightGray'>#</span> characters for SVG background images. When using the <span className='m-0 text-danger bg-lightGray'>escape-svg</span> function, data URIs must be quoted.</p>
            <h3 className='pt-5' id='AddandSubtractfunctions'>Add and Subtract functions </h3>
            <p className='pt-3'>We use the <span className='m-0 text-danger bg-lightGray'>add</span> and <span className='m-0 text-danger bg-lightGray'>subtract</span> functions to wrap the CSS <span className='m-0 text-danger bg-lightGray'>calc</span> function. The primary purpose of these functions is to avoid errors when a “unitless” <span className='m-0 text-danger bg-lightGray'>0</span> value is passed into a <span className='m-0 text-danger bg-lightGray'>calc</span> expression. Expressions like <span className='m-0 text-danger bg-lightGray'>calc(10px - 0)</span> will return an error in all browsers, despite being mathematically correct.</p>
            <p className='pt-3'>Example where the calc is valid:</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{Subtract}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(Subtract)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <p className='pt-3'>Example where the calc is invalid:</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{Subtracts}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(Subtracts)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <h3 className='pt-5' id='Mixins'>Mixins </h3>
            <p className='pt-3'>Our <span className='m-0 text-danger bg-lightGray'>scss/mixins/</span> directory has a ton of mixins that power parts of Bootstrap and can also be used across your own project.</p>
            <h3 className='pt-5' id='Colorschemes'>Color schemes</h3>
            <p className='pt-3'>A shorthand mixin for the <span className='m-0 text-danger bg-lightGray'>prefers-color-scheme</span>  media query is available with support for <span className='m-0 text-danger bg-lightGray'>light</span>  and <span className='m-0 text-danger bg-lightGray'>dark</span>  color schemes. See <a href="#">the color modes documentation</a> for information on our color mode mixin.</p>
            <div className='bg-color pb-2 mt-5'>
              <div className='d-flex justify-content-between pt-3'>
              <a className='ps-4 text-secondary text-decoration-none' href="https://github.com/twbs/bootstrap/blob/v5.3.3/scss/mixins/_color-scheme.scss">scss/mixins/_color-scheme.scss</a>
              <div className='pe-4'>
              <button className="copy-button actives pe-2 border-0" onClick={() => copyToClipboard(colors3)}>
                <FontAwesomeIcon icon={faCopy} />
              </button>
              </div>
              </div>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor bg-white p-3">
                      <code style={{ width: "100%", display: "block", overflow: "auto" }}>{colors3}</code>
                  </pre>
                </div>
              </div>
            </div>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className='container-fluid'>
                    <div className="row">
                      <div className="col-11">
                        <code>{customelement}</code>
                      </div>
                      <div className="col-1">
                        <button className="copy-button actives border-0" onClick={() => copyToClipboard(customelement)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
          </Col>
          
          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
           
            <a href="">
              <Nav.Link href="#Filestructure" className='text-black pt-3'>File structure</Nav.Link>
            </a> 
            <a href="">
              <Nav.Link href="#Importing" className='text-black '>Importing </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Compiling" className='text-black '>Compiling </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Variabledefaults" className='text-black '>Variable defaults </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Mapsandloops" className='text-black '>Maps and loops </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Modifymap" className='text-black '>Modify map </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Addtomap" className='text-black '>Add to map </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Removefrommap" className='text-black '>Remove from map </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Requiredkeys" className='text-black '>Required keys </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Functions" className='text-black '>Functions  </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Colors" className='text-black '>Colors  </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Colorcontrast" className='text-black '>Color contrast  </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#EscapeSVG" className='text-black '>Escape SVG </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#AddandSubtractfunctions" className='text-black '>Add and Subtract functions </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Mixins" className='text-black '>Mixins </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Colorschemes" className='text-black '>Color schemes </Nav.Link>
            </a>

          </Col>
        </Row>
      </Container >
    </div >
  );
}

export default Sass;
