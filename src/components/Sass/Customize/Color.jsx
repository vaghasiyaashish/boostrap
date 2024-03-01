import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

function Color() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (codeText) => {
    try {
      navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Unable to copy to clipboard using Clipboard API:", error);
      fallbackCopyToClipboard(codeText);
    }
  };

  const fallbackCopyToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const primary = `<div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
  Example element with utilities
</div>`;

  const variablecolor = `  $theme-colors: (
    "primary":    $primary,
    "secondary":  $secondary,
    "success":    $success,
    "info":       $info,
    "warning":    $warning,
    "danger":     $danger,
    "light":      $light,
    "dark":       $dark
  );`;

  const variablecolor2=`$colors: (
    "blue":       $blue,
    "indigo":     $indigo,
    "purple":     $purple,
    "pink":       $pink,
    "red":        $red,
    "orange":     $orange,
    "yellow":     $yellow,
    "green":      $green,
    "teal":       $teal,
    "cyan":       $cyan,
    "black":      $black,
    "white":      $white,
    "gray":       $gray-600,
    "gray-dark":  $gray-800
  );`

 

  const SassExample = `.alpha { color: $purple; }
  .beta {
    color: $yellow-300;
    background-color: $indigo-900;
  }`;
  const Generatingutilities = `@import "bootstrap/scss/functions";
  @import "bootstrap/scss/variables";
  @import "bootstrap/scss/variables-dark";
  @import "bootstrap/scss/maps";
  @import "bootstrap/scss/mixins";
  @import "bootstrap/scss/utilities";
  
  $all-colors: map-merge-multiple($blues, $indigos, $purples, $pinks, $reds, $oranges, $yellows, $greens, $teals, $cyans);
  
  $utilities: map-merge(
    $utilities,
    (
      "color": map-merge(
        map-get($utilities, "color"),
        (
          values: map-merge(
            map-get(map-get($utilities, "color"), "values"),
            (
              $all-colors
            ),
          ),
        ),
      ),
    )
  );
  
  @import "bootstrap/scss/utilities/api";`;
  const colors = `{Colors}`;
  const braket = `<, >`;
  const level ='{color}-{level}'
  return (
    <div className="pt-5 w-100">
      <Container fluid>
        <Row className=" ps-4 ps-lg-0 position-relative d-flex justify-content-center">
          <Col lg={9} className="p-0 pe-4 ">
            <div className="d-lg-none mt-4 ">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordions ">
                    On this page
                  </Accordion.Header>
                  <Accordion.Body className="accordions">
                  <a href="">
                       <Nav.Link href="#Colors" className="text-black ">
                         Colors 
                       </Nav.Link>
                     </a>
                     <a href="">
                       <Nav.Link href="#Usingthenewcolors" className="text-black ">
                       Using the new colors
                       </Nav.Link>
                     </a>
                     <a href="">
                       <Nav.Link href="#theme-colors" className="text-black ">
                       Theme colors
                       </Nav.Link>
                     </a>
                     <a href="">
                       <Nav.Link href="#Allcolors" className="text-black ">
                       All colors
                       </Nav.Link>
                     </a>
                     <a href="">
                       <Nav.Link href="#NotesonSass" className="text-black ">
                       Notes on Sass
                       </Nav.Link>
                     </a>
                     <a href="">
                       <Nav.Link href="#Example" className="text-black ">
                       Example
                       </Nav.Link>
                     </a>
                     <a href="">
                       <Nav.Link href="#Generatingutilities" className="text-black ">
                       Generating utilities
                       </Nav.Link>
                     </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>{/* <Link to="/"> Home</Link> */}</div>
            <h1 className="pt-5  ">Sass</h1>
            <h4 className="pt-1 fw-300 ">
              Bootstrap is supported by an extensive color system that themes
              our styles and components. This enables more comprehensive
              customization and extension for any project.
            </h4>
            <h3 className="pt-5" id="Colors">
              Colors
            </h3>
            <p className="pt-3">
              Bootstrap’s color palette has continued to expand and become more
              nuanced in v5.3.0. We’ve added new variables for
              <span className="m-0 text-danger bg-lightGray">secondary</span>
              and <span className="m-0 text-danger bg-lightGray">tertiary</span>
              text and background colors, plus{" "}
              <span className="m-0 text-danger bg-lightGray">
                <code>{colors}</code> -bg-subtle
              </span>{" "}
              ,
              <span className="m-0 text-danger bg-lightGray">
                <code>{colors}</code>-border-subtle
              </span>
              , and
              <span className="m-0 text-danger bg-lightGray">
                <code>{colors}</code>-text-emphasis
              </span>
              for our theme colors. These new colors are available through Sass
              and CSS variables (but not our color maps or utility classes) with
              the express goal of making it easier to customize across multiple
              colors modes like light and dark. These new variables are globally
              set on <span className="m-0 text-danger bg-lightGray">:root</span>
              and are adapted for our new dark color mode while our original
              theme colors remain unchanged.
            </p>
            <p className="pt-3">
              Colors ending in
              <span className="m-0 text-danger bg-lightGray">-rgb</span> provide
              the
              <span className="m-0 text-danger bg-lightGray">
                red, green, blue
              </span>
              values for use in
              <span className="m-0 text-danger bg-lightGray">rgb()</span>and{" "}
              <span className="m-0 text-danger bg-lightGray">rgba()</span> color
              modes. For example,{" "}
              <span className="m-0 text-danger bg-lightGray">
                rgba(var(--bs-secondary-bg-rgb), .5)
              </span>
              .
            </p>
            <div className="mt-4 Heads pt-4 pb-4 ps-3">
              <p>
                {" "}
                <span className="Heads-color m-0">Heads up! </span> There’s some
                potential confusion with our new secondary and tertiary colors,
                and our existing secondary theme color, as well as our light and
                dark theme colors. Expect this to be ironed out in v6.
              </p>
            </div>
            <table>
              <tbody>
                <tr className="border-bottom">
                  <th style={{ width: "40%" }}>Description</th>
                  <th style={{ width: "20%" }}>Swatch</th>
                  <th style={{ width: "40%" }}>Variables</th>
                </tr>
                <tr>
                  <td rowspan="2" className="p-0 pt-2">
                    <span className="m-0 fw-bold">Body —</span>{" "}
                    Default foreground (color) and background, including
                    components.
                  </td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-bottom">
                    <div className="bg-black border pt-4 pb-4 ps-2 pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-bottom">
                    {" "}
                    <p>--bs-body-color</p>
                    <p>--bs-body-color-rgb</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4">
                    <div className="bg-white border pt-4 pb-4  pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger">
                    <p>--bs-body-color</p>
                    <p>--bs-body-color-rgb</p>
                  </td>
                </tr>
                {/*  */}

                <tr className="border-top ">
                  <td rowspan="2" className="p-0 pt-2">
                    <span className="m-0 fw-bold">
                      Secondary —
                    </span>{" "}
                    Use the <span className="text-danger m-0">color</span>{" "}
                    option for lighter text. Use the{" "}
                    <span className="text-danger m-0">bg</span> option for
                    dividers and to indicate disabled component states.
                  </td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-bottom">
                    <div className="bg-secondary border pt-4 pb-4 ps-2 pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-bottom">
                    {" "}
                    <p>--bs-secondary-color</p>
                    <p>--bs-secondary-color-rgb</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4">
                    <div className="bg-secondary-subtle border pt-4 pb-4  pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger">
                    <p>--bs-secondary-bg</p>
                    <p>--bs-secondary-bg-rgb</p>
                  </td>
                </tr>
                {/*  */}
                <tr className="border-top ">
                  <td rowspan="2" className="p-0 pt-2">
                    <span className="m-0 fw-bold">
                      Tertiary —
                    </span>{" "}
                    Use the <span className="text-danger m-0">color</span>{" "}
                    option for even lighter text. Use the{" "}
                    <span className="text-danger m-0">bg</span> option to style
                    backgrounds for hover states, accents, and wells.
                  </td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className=" bg-tertiarys border pt-4 pb-4 ps-2 pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                    {" "}
                    <p>--bs-tertiary-color</p>
                    <p>--bs-tertiary-color-rgb</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className="bg-body-tertiary border pt-4 pb-4  pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                    <p>--bs-tertiary-bg</p>
                    <p>--bs-tertiary-bg-rgb</p>
                  </td>
                </tr>
                {/*  */}
                <tr className="border-top ">
                  <td className="p-0 pt-2">
                    <span className="m-0 fw-bold">
                      Emphasis —
                    </span>{" "}
                    For higher contrast text. Not applicable for backgrounds.
                  </td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className=" bg-black border pt-4 pb-4 ps-2 pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                    <p>--bs-emphasis-color</p>
                    <p>--bs-emphasis-color-rgb</p>
                  </td>
                </tr>
                <tr className="border-top ">
                  <td className="p-0 pt-2">
                    {" "}
                    <span className="m-0 fw-bold">
                      Border —
                    </span>{" "}
                    For component borders, dividers, and rules. Use{" "}
                    <span className="text-danger m-0">
                      --bs-border-color-translucent
                    </span>{" "}
                    to blend with backgrounds with an{" "}
                    <span className="text-danger m-0">rgba()</span> value.
                  </td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className="bg-body-tertiary border pt-4 pb-4  pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                    <p>--bs-border-color</p>
                    <p>--bs-border-color-rgb</p>
                  </td>
                </tr>
                {/*  */}
                <tr className="border-top">
                  <td rowspan="2" className="p-0 pt-2">
                    <span className="m-0 fw-bold">
                      Primary —
                    </span>
                    Main theme color, used for hyperlinks, focus styles, and
                    component and form active states.
                  </td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className=" bg-primary border pt-4 pb-4 ps-2 pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                    <p>--bs-primary</p>
                    <p>--bs-primary-rgb</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className="bg-primary-subtle border pt-4 pb-4  pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">--bs-primary-bg-subtle</td>
                </tr>
                <tr>
                  <td rowspan="2"></td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div  className=" border-primary-subtle pt-4 pb-4  pe-2 rounded-2 "  style={{ border: "5px solid" }}></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                    --bs-primary-border-subtle
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <h3 className="text-primary-emphasis">Text</h3>
                  </td>
                  <td className="p-0 text-danger border-top">
                  --bs-primary-text-emphasis
                  </td>
                </tr>
                {/*  */}
                <tr className="border-top">
                  <td rowspan="2" className="p-0 pt-2">
                    <span className="m-0 fw-bold">
                    Success —</span>{" "} Theme color used for positive or successful actions and information.	
                  </td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className=" bg-success border pt-4 pb-4 ps-2 pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                    <p>--bs-success</p>
                    <p>--bs-success-rgb</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className="bg-success-subtle border pt-4 pb-4  pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">--bs-success-bg-subtle</td>
                </tr>
                <tr>
                  <td rowspan="2"></td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div  className=" border-success-subtle pt-4 pb-4  pe-2 rounded-2 "  style={{ border: "5px solid" }}></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                  --bs-success-border-subtle
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <h3 className="text-success-emphasis">Text</h3>
                  </td>
                  <td className="p-0 text-danger border-top">
                  --bs-success-text-emphasis
                  </td>
                </tr>
                {/*  */}
                <tr className="border-top">
                  <td rowspan="2" className="p-0 pt-2">
                    <span className="m-0 fw-bold">
                    Danger —</span>{" "}  Theme color used for errors and dangerous actions.		
                  </td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className=" bg-danger border pt-4 pb-4 ps-2 pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                    <p>	--bs-danger</p>
                    <p>--bs-danger-rgb</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className="bg-danger-subtle border pt-4 pb-4  pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger">--bs-danger-bg-subtle</td>
                </tr>
                <tr>
                  <td rowspan="2"></td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div  className=" border-danger-subtle pt-4 pb-4  pe-2 rounded-2 "  style={{ border: "5px solid" }}></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                  --bs-danger-border-subtle
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <h3 className="text-danger-emphasis">Text</h3>
                  </td>
                  <td className="p-0 text-danger border-top">
                  --bs-danger-text-emphasis
                  </td>
                </tr>
               {/*  */}
               <tr className="border-top">
                  <td rowspan="2" className="p-0 pt-2">
                    <span className="m-0 fw-bold">Warning —</span>{" "}   Theme color used for non-destructive warning messages.	
		
                  </td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className=" bg-warning border pt-4 pb-4 ps-2 pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                    <p>	--bs-Warning</p>
                    <p>--bs-Warning-rgb</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className="bg-warning-subtle border pt-4 pb-4  pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">--bs-Warning-bg-subtle</td>
                </tr>
                <tr>
                  <td rowspan="2"></td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div  className=" border-warning-subtle pt-4 pb-4  pe-2 rounded-2 "  style={{ border: "5px solid" }}></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                  --bs-Warning-border-subtle
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <h3 className="text-warning-emphasis">Text</h3>
                  </td>
                  <td className="p-0 text-danger border-top">
                  --bs-Warning-text-emphasis
                  </td>
                </tr>
                {/*  */}
                <tr className="border-top">
                  <td rowspan="2" className="p-0 pt-2">
                    <span className="m-0 fw-bold">Info — </span>Theme color used for neutral and informative content.	
                  </td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className=" bg-info border pt-4 pb-4 ps-2 pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                    <p>	--bs-info</p>
                    <p>--bs-info-rgb</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className="bg-info-subtle border pt-4 pb-4  pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">--bs-info-bg-subtle</td>
                </tr>
                <tr>
                  <td rowspan="2"></td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div  className=" border-info-subtle pt-4 pb-4  pe-2 rounded-2 "  style={{ border: "5px solid" }}></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                  --bs-info-border-subtle
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <h3 className="text-info-emphasis">Text</h3>
                  </td>
                  <td className="p-0 text-danger border-top">
                  --bs-info-text-emphasis
                  </td>
                </tr>
                {/*  */}
                <tr className="border-top">
                  <td rowspan="2" className="p-0 pt-2">
                    <span className="m-0 fw-bold">Light — </span>Additional theme option for less contrasting colors.	

                  </td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className=" bg-light border pt-4 pb-4 ps-2 pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                    <p>	--bs-light</p>
                    <p>--bs-light-rgb</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className="bg-light-subtle border pt-4 pb-4  pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">--bs-info-bg-subtle</td>
                </tr>
                <tr>
                  <td rowspan="2"></td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div  className=" border-light-subtle pt-4 pb-4  pe-2 rounded-2 "  style={{ border: "5px solid" }}></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                  --bs-light-border-subtle
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <h3 className="text-light-emphasis">Text</h3>
                  </td>
                  <td className="p-0 text-danger border-top">
                  --bs-light-text-emphasis
                  </td>
                </tr>
               {/*  */}
               <tr className="border-top">
                  <td rowspan="2" className="p-0 pt-2">
                    <span className="m-0 fw-bold">Dark — </span> Additional theme option for higher contrasting colors.	
	
                  </td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className=" bg-dark border pt-4 pb-4 ps-2 pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                    <p>	--bs-dark</p>
                    <p>--bs-dark-rgb</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div className="bg-dark-subtle border pt-4 pb-4  pe-2 rounded-2"></div>
                  </td>
                  <td className="p-0 text-danger border-top">--bs-dark-bg-subtle</td>
                </tr>
                <tr>
                  <td rowspan="2"></td>
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <div  className=" border-dark-subtle pt-4 pb-4  pe-2 rounded-2 "  style={{ border: "5px solid" }}></div>
                  </td>
                  <td className="p-0 text-danger border-top">
                  --bs-dark-border-subtle
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td className="p-0 pt-2 pb-2 pe-4 border-top">
                    <h3 className="text-dark-emphasis">Text</h3>
                  </td>
                  <td className="p-0 text-danger border-top">
                  --bs-dark-text-emphasis
                  </td>
                </tr>
              </tbody>
            </table>

            {/*  */}
            <h3 className="pt-5" id="Usingthenewcolors">Using the new colors</h3>
            <p>These new colors are accessible via CSS variables and utility classes—like <span className="m-0 text-danger bg-lightGray">--bs-primary-bg-subtle</span>  and <span className="m-0 text-danger bg-lightGray">.bg-primary-subtle</span>—allowing you to compose your own CSS rules with the variables, or to quickly apply styles via classes. The utilities are built with the color’s associated CSS variables, and since we customize those CSS variables for dark mode, they are also adaptive to color mode by default.</p>
           
           
            <div className='mt-5 bg-white border rounded-3'>
              <div class="p-3 text-primary-emphasis bg-primary-subtle m-3 border border-primary-subtle rounded-3">
                  Example element with utilities
              </div>
              <div>
                <p className='bg-color fw-bold pt-3 pb-3 ps-3 m-0 border-bottom'>HTML</p>
              </div>
              <div className="bootstrap-editor ">
                <div className="code-container">
                  <pre className="code-editor p-4 bg-color m-0 rounded-bottom-3">
                    <div className="container-fluid">
                      <div className="row d-flex ">
                        <div className="col-sm-10"><code>{primary}</code></div>
                        <div className="col-sm-2 text-sm-end ">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(primary)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
            <h3 className="pt-5" id="theme-colors">Theme colors</h3>
            <p className="pt-3">We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Bootstrap’s <span className="m-0 text-danger bg-lightGray">scss/_variables.scss</span> file.</p>
             <div className="container-fluid mt-3">
              <div className="row">
                <div className="col-md-4 p-0 pt-2 "><div className="me-md-1 pt-3 pb-3 rounded-3 bg-primary"> <p className="text-white ps-3">Primary</p>  </div> </div>
                <div className="col-md-4 p-0 pt-2 "><div className="ms-md-2 me-md-2 pt-3 pb-3 rounded-3 bg-secondary"> <p className="text-white ps-3">Secondary</p></div> </div>
                <div className="col-md-4 p-0 pt-2 "><div className="ms-md-1  pt-3 pb-3 rounded-3 bg-success"> <p className="text-white ps-3">Success</p>  </div> </div>

                <div className="col-md-4 p-0 pt-2 "><div className="me-md-1 pt-3 pb-3 rounded-3 bg-danger"> <p className="text-white ps-3">Danger</p>  </div> </div>
                <div className="col-md-4 p-0 pt-2 "><div className="ms-md-2 me-md-2 pt-3 pb-3 rounded-3 bg-warning"> <p className="text-black ps-3">Warning</p></div> </div>
                <div className="col-md-4 p-0 pt-2 "><div className="ms-md-1  pt-3 pb-3 rounded-3 bg-info"> <p className="text-black ps-3">info</p>  </div> </div>

                <div className="col-md-4 p-0 pt-2 "><div className="me-md-1 pt-3 pb-3 rounded-3 bg-light border"> <p className="text-black ps-3">Light</p>  </div> </div>
                <div className="col-md-4 p-0 pt-2 "><div className="ms-md-2 me-md-2 pt-3 pb-3 rounded-3 bg-dark"> <p className="text-white ps-3">Dark</p></div> </div>
                {/* <div className="col-md-4 p-0 pt-2 "><div className="ms-md-1  pt-3 pb-3 rounded-3 bg-success"> <p className="text-white ps-3">Success</p>  </div> </div> */}
              </div> 
             </div>
           {/*  */}
          
            <p className="pt-3">
            All these colors are available as a Sass map,<span className="m-0 text-danger bg-lightGray">$theme-colors</span>.
            </p>
  
            <div className='bg-color pb-2 mt-5'>
              <a href="https://github.com/twbs/bootstrap/blob/v5.3.3/scss/_variables.scss" className="text-decoration-none ps-4 text-gray">scss/_variables.scss</a>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{variablecolor}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(variablecolor)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              </div>
              <p>Check <a href="https://getbootstrap.com/docs/5.3/customize/sass/#maps-and-loops">out our Sass maps and loops docs</a> for how to modify these colors.</p>
              <h3 className="pt-5" id="Allcolors">All colors</h3>
              <p className="pt-3">All Bootstrap colors are available as Sass variables and a Sass map in <span className="m-0 text-danger bg-lightGray">scss/_variables.scss</span>  file. To avoid increased file sizes, we don’t create text or background color classes for each of these variables. Instead, we choose a subset of these colors for a <a href="#theme-colors">theme palette</a>.</p>
              <p className="pt-3">Be sure to monitor contrast ratios as you customize colors. As shown below, we’ve added three contrast ratios to each of the main colors—one for the swatch’s current colors, one for against white, and one for against black.</p>
              
              <div className="container-fluid mt-3">
              <div className="row">
                <div className="col-md-4 p-0 ps-md-2 pe-md-2 ">
                  <div className=" pt-3 pb-3 bg-blue"> <p className="text-white  fw-medium ps-3">$blue</p> <p className="text-white fw-medium ps-3">#0d6efd</p></div> 
                  <div className=" mt-3 pt-3 pb-3 bg-blue-100"> <p className="text-black fw-medium ps-3">$blue-100</p></div> 
                  <div className=" pt-3 pb-3 bg-blue-200"> <p className="text-black fw-medium ps-3">$blue-200</p></div> 
                  <div className=" pt-3 pb-3 bg-blue-300"> <p className="text-black fw-medium ps-3">$blue-300</p></div> 
                  <div className=" pt-3 pb-3 bg-blue-400"> <p className="text-black fw-medium ps-3">$blue-400</p></div> 
                  <div className=" pt-3 pb-3 bg-blue-500"> <p className="text-white fw-medium ps-3">$blue-500</p></div> 
                  <div className=" pt-3 pb-3 bg-blue-600"> <p className="text-white fw-medium ps-3">$blue-600</p></div> 
                  <div className=" pt-3 pb-3 bg-blue-700"> <p className="text-white fw-medium ps-3">$blue-700</p></div> 
                  <div className=" pt-3 pb-3 bg-blue-800"> <p className="text-white fw-medium ps-3">$blue-800</p></div> 
                  <div className=" pt-3 pb-3 bg-blue-900"> <p className="text-white fw-medium ps-3">$blue-900</p></div> 
                  </div>
                <div className="col-md-4 p-0 ps-md-2 pe-md-2 ">
                  <div className="  pt-3 pb-3 bg-indigo"> <p className="text-white  fw-medium ps-3">$indigo</p><p className="text-white fw-medium ps-3">#6610f2</p></div> 
                  <div className=" pt-3 mt-3 pb-3 bg-indigo-100"> <p className="text-black  fw-medium ps-3">$indigo-100</p></div> 
                  <div className=" pt-3 pb-3 bg-indigo-200"> <p className="text-black fw-medium ps-3">$indigo-200</p></div> 
                  <div className=" pt-3 pb-3 bg-indigo-300"> <p className="text-black fw-medium ps-3">$indigo-300</p></div> 
                  <div className=" pt-3 pb-3 bg-indigo-400"> <p className="text-white fw-medium ps-3">$indigo-400</p></div> 
                  <div className=" pt-3 pb-3 bg-indigo-500"> <p className="text-white fw-medium ps-3">$indigo-500</p></div> 
                  <div className=" pt-3 pb-3 bg-indigo-600"> <p className="text-white fw-medium ps-3">$indigo-600</p></div> 
                  <div className=" pt-3 pb-3 bg-indigo-700"> <p className="text-white fw-medium ps-3">$indigo-700</p></div> 
                  <div className=" pt-3 pb-3 bg-indigo-800"> <p className="text-white fw-medium ps-3">$indigo-800</p></div> 
                  <div className=" pt-3 pb-3 bg-indigo-900"> <p className="text-white fw-medium ps-3">$indigo-900</p></div> 

                  </div>
                <div className="col-md-4 p-0 ps-md-2 pe-md-2 ">
                  <div className="  pt-3 pb-3 bg-purple"> <p className="text-white  fw-medium ps-3">$purple</p><p className="text-white fw-medium ps-3">#6f42c1</p>  </div> 
                  <div className=" mt-3 pt-3 pb-3 bg-purple-100"><p className="text-black fw-medium ps-3">$purple-100</p></div> 
                  <div className="  pt-3 pb-3 bg-purple-200"><p className="text-black fw-medium ps-3">$purple-200</p></div> 
                  <div className="  pt-3 pb-3 bg-purple-300"><p className="text-black fw-medium ps-3">$purple-300</p></div> 
                  <div className="  pt-3 pb-3 bg-purple-400"><p className="text-black fw-medium ps-3">$purple-400</p></div> 
                  <div className="  pt-3 pb-3 bg-purple-500"><p className="text-white fw-medium ps-3">$purple-500</p></div> 
                  <div className="  pt-3 pb-3 bg-purple-600"><p className="text-white fw-medium ps-3">$purple-600</p></div> 
                  <div className="  pt-3 pb-3 bg-purple-700"><p className="text-white fw-medium ps-3">$purple-700</p></div> 
                  <div className="  pt-3 pb-3 bg-purple-800"><p className="text-white fw-medium ps-3">$purple-800</p></div> 
                  <div className="  pt-3 pb-3 bg-purple-900"><p className="text-white fw-medium ps-3">$purple-900</p></div> 
                  </div>
                  {/*  */}
                  <div className="col-md-4 p-0 ps-md-2 pe-md-2 ">
                  <div className=" mt-3 pt-3 pb-3 bg-pink"> <p className="text-white  fw-medium ps-3">$pink</p><p className="text-white fw-medium ps-3">#d63384</p></div> 
                  <div className=" mt-3 pt-3 pb-3 bg-pink-100"><p className="text-black fw-medium ps-3">$pink-100</p></div> 
                  <div className=" pt-3 pb-3 bg-pink-200"><p className="text-black fw-medium ps-3">$pink-200</p></div> 
                  <div className=" pt-3 pb-3 bg-pink-300"><p className="text-black fw-medium ps-3">$pink-300</p></div> 
                  <div className=" pt-3 pb-3 bg-pink-400"><p className="text-black fw-medium ps-3">$pink-400</p></div> 
                  <div className=" pt-3 pb-3 bg-pink-500"><p className="text-white fw-medium ps-3">$pink-500</p></div> 
                  <div className=" pt-3 pb-3 bg-pink-600"><p className="text-white fw-medium ps-3">$pink-600</p></div> 
                  <div className=" pt-3 pb-3 bg-pink-700"><p className="text-white fw-medium ps-3">$pink-700</p></div> 
                  <div className=" pt-3 pb-3 bg-pink-800"><p className="text-white fw-medium ps-3">$pink-800</p></div> 
                  <div className=" pt-3 pb-3 bg-pink-900"><p className="text-white fw-medium ps-3">$pink-900</p></div> 

                  </div>
                  <div className="col-md-4 p-0 ps-md-2 pe-md-2">
                  <div className=" mt-3 pt-3 pb-3 bg-red"> <p className="text-white  fw-medium ps-3">$red</p><p className="text-white fw-medium ps-3">#dc3545</p></div> 
                  <div className=" mt-3 pt-3 pb-3 bg-red-100"><p className="text-black fw-medium ps-3">$red-100</p></div> 
                  <div className=" pt-3 pb-3 bg-red-200"><p className="text-black fw-medium ps-3">$red-200</p></div>
                  <div className=" pt-3 pb-3 bg-red-300"><p className="text-black fw-medium ps-3">$red-300</p></div>
                  <div className=" pt-3 pb-3 bg-red-400"><p className="text-black fw-medium ps-3">$red-400</p></div>
                  <div className=" pt-3 pb-3 bg-red-500"><p className="text-white fw-medium ps-3">$red-500</p></div>
                  <div className=" pt-3 pb-3 bg-red-600"><p className="text-white fw-medium ps-3">$red-600</p></div>
                  <div className=" pt-3 pb-3 bg-red-700"><p className="text-white fw-medium ps-3">$red-700</p></div>
                  <div className=" pt-3 pb-3 bg-red-800"><p className="text-white fw-medium ps-3">$red-800</p></div>
                  <div className=" pt-3 pb-3 bg-red-900"><p className="text-white fw-medium ps-3">$red-900</p></div>
                  </div>
                  <div className="col-md-4 p-0 ps-md-2 pe-md-2 ">
                  <div className=" mt-3 pt-3 pb-3 bg-orange"> <p className="text-black  fw-medium ps-3">$orange</p><p className="text-black  fw-medium ps-3">#fd7e14</p>  </div> 
                  <div className=" mt-3 pt-3 pb-3 bg-orange-100"><p className="text-black fw-medium ps-3">$orange-100</p></div> 
                  <div className=" pt-3 pb-3 bg-orange-200"><p className="text-black fw-medium ps-3">$orange-200</p></div>
                  <div className=" pt-3 pb-3 bg-orange-300"><p className="text-black fw-medium ps-3">$orange-300</p></div>
                  <div className=" pt-3 pb-3 bg-orange-400"><p className="text-black fw-medium ps-3">$orange-400</p></div>
                  <div className=" pt-3 pb-3 bg-orange-500"><p className="text-black fw-medium ps-3">$orange-500</p></div>
                  <div className=" pt-3 pb-3 bg-orange-600"><p className="text-black fw-medium ps-3">$orange-600</p></div>
                  <div className=" pt-3 pb-3 bg-orange-700"><p className="text-white fw-medium ps-3">$orange-700</p></div>
                  <div className=" pt-3 pb-3 bg-orange-800"><p className="text-white fw-medium ps-3">$orange-800</p></div>
                  <div className=" pt-3 pb-3 bg-orange-900"><p className="text-white fw-medium ps-3">$orange-900</p></div>
                  </div>
                  {/*  */}
                  <div className="col-md-4 p-0 ps-md-2 pe-md-2 ">
                  <div className=" mt-3 pt-3 pb-3 bg-yellow"> <p className="text-black  fw-medium ps-3">$yellow</p><p className="text-black  fw-medium ps-3">#ffc107</p></div> 
                  <div className=" mt-3 pt-3 pb-3 bg-yellow-100"><p className="text-black fw-medium ps-3">$yellow-100</p></div> 
                  <div className=" pt-3 pb-3 bg-yellow-200"><p className="text-black fw-medium ps-3">$yellow-200</p></div> 
                  <div className=" pt-3 pb-3 bg-yellow-300"><p className="text-black fw-medium ps-3">$yellow-300</p></div> 
                  <div className=" pt-3 pb-3 bg-yellow-400"><p className="text-black fw-medium ps-3">$yellow-400</p></div> 
                  <div className=" pt-3 pb-3 bg-yellow-500"><p className="text-black fw-medium ps-3">$yellow-500</p></div> 
                  <div className=" pt-3 pb-3 bg-yellow-600"><p className="text-black fw-medium ps-3">$yellow-600</p></div> 
                  <div className=" pt-3 pb-3 bg-yellow-700"><p className="text-black fw-medium ps-3">$yellow-700</p></div> 
                  <div className=" pt-3 pb-3 bg-yellow-800"><p className="text-white fw-medium ps-3">$yellow-800</p></div> 
                  <div className=" pt-3 pb-3 bg-yellow-900"><p className="text-white fw-medium ps-3">$yellow-900</p></div> 

                  </div>
                  <div className="col-md-4 p-0 ps-md-2 pe-md-2">
                  <div className=" mt-3 pt-3 pb-3 bg-green"> <p className="text-white  fw-medium ps-3">$green</p><p className="text-white  fw-medium ps-3">#198754</p></div> 
                  <div className=" mt-3 pt-3 pb-3 bg-green-100"><p className="text-black fw-medium ps-3">$green-100</p></div> 
                  <div className=" pt-3 pb-3 bg-green-200"><p className="text-black fw-medium ps-3">$green-200</p></div>
                  <div className=" pt-3 pb-3 bg-green-300"><p className="text-black fw-medium ps-3">$green-300</p></div>
                  <div className=" pt-3 pb-3 bg-green-400"><p className="text-black fw-medium ps-3">$green-400</p></div>
                  <div className=" pt-3 pb-3 bg-green-500"><p className="text-white fw-medium ps-3">$green-500</p></div>
                  <div className=" pt-3 pb-3 bg-green-600"><p className="text-white fw-medium ps-3">$green-600</p></div>
                  <div className=" pt-3 pb-3 bg-green-700"><p className="text-white fw-medium ps-3">$green-700</p></div>
                  <div className=" pt-3 pb-3 bg-green-800"><p className="text-white fw-medium ps-3">$green-800</p></div>
                  <div className=" pt-3 pb-3 bg-green-900"><p className="text-white fw-medium ps-3">$green-900</p></div>
                  </div>
                  <div className="col-md-4 p-0 ps-md-2 pe-md-2 ">
                  <div className=" mt-3 pt-3 pb-3 bg-teal"> <p className="text-black  fw-medium ps-3">$teal</p><p className="text-black ps-3 fw-medium">#20c997</p> </div> 
                  <div className=" mt-3 pt-3 pb-3 bg-teal-100"><p className="text-black fw-medium ps-3">$teal-100</p></div> 
                  <div className=" pt-3 pb-3 bg-teal-200"><p className="text-black fw-medium ps-3">$teal-200</p></div>
                  <div className=" pt-3 pb-3 bg-teal-300"><p className="text-black fw-medium ps-3">$teal-300</p></div>
                  <div className=" pt-3 pb-3 bg-teal-400"><p className="text-black fw-medium ps-3">$teal-400</p></div>
                  <div className=" pt-3 pb-3 bg-teal-500"><p className="text-black fw-medium ps-3">$teal-500</p></div>
                  <div className=" pt-3 pb-3 bg-teal-600"><p className="text-black fw-medium ps-3">$teal-600</p></div>
                  <div className=" pt-3 pb-3 bg-teal-700"><p className="text-white fw-medium ps-3">$teal-700</p></div>
                  <div className=" pt-3 pb-3 bg-teal-800"><p className="text-white fw-medium ps-3">$teal-800</p></div>
                  <div className=" pt-3 pb-3 bg-teal-900"><p className="text-white fw-medium ps-3">$teal-900</p></div>
                  </div>
                  {/*  */}
                  <div className="col-md-4 p-0 ps-md-2 pe-md-2 ">
                  <div className=" mt-3 pt-3 pb-3 bg-cyan"> <p className="text-white  fw-medium ps-3">$cyan</p><p className="text-white fw-medium ps-3">#0dcaf0</p></div> 
                  <div className=" mt-3 pt-3 pb-3 bg-cyan-100"><p className="text-black fw-medium ps-3">$cyan-100</p></div> 
                  <div className=" pt-3 pb-3 bg-cyan-200"><p className="text-black fw-medium ps-3">$cyan-200</p></div> 
                  <div className=" pt-3 pb-3 bg-cyan-300"><p className="text-black fw-medium ps-3">$cyan-300</p></div> 
                  <div className=" pt-3 pb-3 bg-cyan-400"><p className="text-black fw-medium ps-3">$cyan-400</p></div> 
                  <div className=" pt-3 pb-3 bg-cyan-500"><p className="text-white fw-medium ps-3">$cyan-500</p></div> 
                  <div className=" pt-3 pb-3 bg-cyan-600"><p className="text-white fw-medium ps-3">$cyan-600</p></div> 
                  <div className=" pt-3 pb-3 bg-cyan-700"><p className="text-white fw-medium ps-3">$cyan-700</p></div> 
                  <div className=" pt-3 pb-3 bg-cyan-800"><p className="text-white fw-medium ps-3">$cyan-800</p></div> 
                  <div className=" pt-3 pb-3 bg-cyan-900"><p className="text-white fw-medium ps-3">$cyan-900</p></div> 

                  </div>
                  <div className="col-md-4 p-0 ps-md-2 pe-md-2">
                  <div className=" mt-3 pt-3 pb-3 bg-gray-500"> <p className="text-white  fw-medium ps-3">$gray-500</p><p className="text-white ps-3  fw-medium">#adb5bd</p></div> 
                  <div className=" mt-3 pt-3 pb-3 bg-gray-100"><p className="text-black fw-medium ps-3">$gray-100</p></div> 
                  <div className=" pt-3 pb-3 bg-gray-200"><p className="text-black fw-medium ps-3">$gray-200</p></div>
                  <div className=" pt-3 pb-3 bg-gray-300"><p className="text-black fw-medium ps-3">$gray-300</p></div>
                  <div className=" pt-3 pb-3 bg-gray-400"><p className="text-black fw-medium ps-3">$gray-400</p></div>
                  <div className=" pt-3 pb-3 bg-gray-500"><p className="text-white fw-medium ps-3">$gray-500</p></div>
                  <div className=" pt-3 pb-3 bg-gray-600"><p className="text-white fw-medium ps-3">$gray-600</p></div>
                  <div className=" pt-3 pb-3 bg-gray-700"><p className="text-white fw-medium ps-3">$gray-700</p></div>
                  <div className=" pt-3 pb-3 bg-gray-800"><p className="text-white fw-medium ps-3">$gray-800</p></div>
                  <div className=" pt-3 pb-3 bg-gray-900"><p className="text-white fw-medium ps-3">$gray-900</p></div>
                  </div>
                  <div className="col-md-4 p-0 ps-md-2 pe-md-2 ">
                  <div className=" mt-3 pt-3 pb-3 bg-black"> <p className="text-white  fw-medium ps-3">$black</p><p className="text-white ps-3  fw-medium">#000</p></div> 
                  <div className=" mt-3 pt-3 pb-3 bg-white border"> <p className="text-black  fw-medium ps-3">$white</p><p className="text-black  fw-medium ps-3">#fff</p>  </div> 
                  </div>
              </div> 
             </div>
             <h3 className="pt-5" id="NotesonSass" >Notes on Sass </h3>
             <p className="pt-3">Sass cannot programmatically generate variables, so we manually created variables for every tint and shade ourselves. We specify the midpoint value (e.g.,<span className="m-0 text-danger bg-lightGray">$blue-500</span> ) and use custom color functions to tint (lighten) or shade (darken) our colors via Sass’s <span className="m-0 text-danger bg-lightGray"> mix()</span> color function.</p>
             <p className="pt-3">Using <span className="m-0 text-danger bg-lightGray">mix()</span>  is not the same as <span className="m-0 text-danger bg-lightGray">lighten()</span>  and <span className="m-0 text-danger bg-lightGray">darken()</span> —the former blends the specified color with white or black, while the latter only adjusts the lightness value of each color. The result is a much more complete suite of colors, as <a href="https://codepen.io/emdeoh/pen/zYOQOPB"> shown in this CodePen demo</a></p>
             <p className="pt-3">Our <span className="m-0 text-danger bg-lightGray"> tint-color()</span> and <span className="m-0 text-danger bg-lightGray">shade-color()</span>  functions use <span className="m-0 text-danger bg-lightGray">mix()</span>  alongside our <span className="m-0 text-danger bg-lightGray"> $theme-color-interval</span> variable, which specifies a stepped percentage value for each mixed color we produce. See the <span className="m-0 text-danger bg-lightGray">scss/_functions.scss</span>  and <span className="m-0 text-danger bg-lightGray">scss/_variables.scss</span> files for the full source code</p>
             <h3 className="pt-5" >Color Sass maps</h3>
             <p>Bootstrap’s source Sass files include three maps to help you quickly and easily loop over a list of colors and their hex values.</p>
             <ul className="ps-3 pt-3">
              <li><span className="m-0 text-danger">$colors</span> lists all our available base (<span className="m-0 text-danger">500</span>) colors</li>
              <li><span className="m-0 text-danger">$theme-colors</span> lists all semantically named theme colors (shown below)</li>
              <li><span className="m-0 text-danger">$grays</span> lists all tints and shades of gray</li>
             </ul>
             <p className="pt-3">Within <span className="m-0 text-danger bg-lightGray">scss/_variables.scss</span> , you’ll find Bootstrap’s color variables and Sass map. Here’s an example of the <span className="m-0 text-danger bg-lightGray">$colors</span>  Sass map:</p>
             <div className='bg-color pb-2 mt-5'>
              <a href="https://github.com/twbs/bootstrap/blob/v5.3.3/scss/_variables.scss" className="text-decoration-none ps-4 text-gray">scss/_variables.scss</a>
              <div className="bootstrap-editor mt-3 ms-3 me-3 ">
                <div className="code-container">
                  <pre className="code-editor p-3 bg-white ">
                    <div className='container-fluid'>
                      <div className="row d-flex">
                        <div className="col-11 col-sm-10">
                          <code style={{ width: "100%", display: "block", overflow: "auto" }}>{variablecolor2}</code>
                        </div>
                        <div className="col-1 col-sm-2 text-end">
                          <button className="copy-button actives border-0" onClick={() => copyToClipboard(variablecolor2)}>
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </pre>
                </div>
              </div>
              </div>
           
           

            <p className="pt-3">
              Add, remove, or modify values within the map to update how they’re used in many other components. Unfortunately at this time, not every component utilizes this Sass map. Future updates will strive to improve upon this. Until then, plan on making use of the <span className="m-0 text-danger bg-lightGray"> $<code>{colors}</code></span> variables and this Sass map.
            </p>
            <h3 className="pt-5" id="Example">
            Example
            </h3>
            <p className="pt-3">Here’s how you can use these in your Sass:</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-11">
                        <code>{SassExample}</code>
                      </div>
                      <div className="col-1">
                        <button
                          className="copy-button actives border-0"
                          onClick={() => copyToClipboard(SassExample)}
                        >
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
             <p className="pt-3"><a href="#">Color</a>  and <a href="#">background</a>  utility classes are also available for setting <span className="m-0 text-danger bg-lightGray">color</span> and <span className="m-0 text-danger bg-lightGray">background-color</span> using the 500 color values.</p>
            <h3 className="pt-5" id="Generatingutilities"> Generating utilities  </h3>
            <ol className="pt-3 ps-3">
              <li>To start, make sure you’ve imported our functions, variables, mixins, and utilities.</li>
              <li>Use our <span className="m-0 text-danger bg-lightGray">map-merge-multiple()</span>  function to quickly merge multiple Sass maps together in a new map.</li>
              <li>Merge this new combined map to extend any utility with a <code>{level}</code>  class name.</li>
            </ol>
            <p className="pt-3">Here’s an example that generates text color utilities (e.g., <span className="m-0 text-danger bg-lightGray">.text-purple-500</span>) using the above steps.</p>
            <div className="bootstrap-editor mt-4">
              <div className="code-container">
                <pre className="code-editor p-4 bg-color">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-11">
                        <code>{Generatingutilities}</code>
                      </div>
                      <div className="col-1">
                        <button
                          className="copy-button actives border-0"
                          onClick={() => copyToClipboard(Generatingutilities)}
                        >
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                    </div>
                  </div>
                </pre>
              </div>
            </div>
            <p className="pt-3">This will generate new <code>.text-{level}</code> utilities for every color and level. You can do the same for any other utility and property as well.</p>
          </Col>

          <Col
            lg={2}
            className="position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 "
          >
            <a href="">
              <Nav.Link href="#Colors" className="text-black pt-3">
                Colors 
              </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Usingthenewcolors" className="text-black ">
              Using the new colors
              </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#theme-colors" className="text-black ">
              Theme colors
              </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Allcolors" className="text-black ">
              All colors
              </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#NotesonSass" className="text-black ">
              Notes on Sass
              </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Example" className="text-black ">
              Example
              </Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#Generatingutilities" className="text-black ">
              Generating utilities
              </Nav.Link>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Color;
