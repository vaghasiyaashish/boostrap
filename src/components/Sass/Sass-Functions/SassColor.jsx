
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';



function SassColor() {
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


  const npm = `npm install -g sass`;
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
                    <Nav.Link href="#SassColorFunctions" className='text-black '>Sass Color Functions</Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#SassGetColorFunctions" className='text-black '>Sass Get Color Functions</Nav.Link>
                  </a>
                  <a href="">
                    <Nav.Link href="#SassManipulateColorFunctions" className='text-black '>Sass Manipulate Color Functions</Nav.Link>
                  </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 '> Sass Color Functions</h1>
            <hr />
            <h3 className='pt-5 ' id='SassColorFunctions'>Sass Color Functions</h3>
            <p className='pt-3'>We have divided the color functions in Sass into three parts: Set color functions, Get color functions, and Manipulate color functions:</p>
             <h4 className='pt-3 fw-400' >Sass Set Color Functions</h4>
            {/*  */}
            <div className='mt-4'>
              <table className='shadow' style={{"width":"100%"}}>
                <tbody>

                 <tr>
                     <th>Function</th>
                     <th>Description & Example</th>
                 </tr>

                 <tr className='bg-color'>
                    <td className=' '>rgb(red, green, blue)	</td>
                    <td>	Sets a color using the Red-Green-Blue (RGB) model. An RGB color value is specified with: rgb(red, green, blue). Each parameter defines the intensity of that color and can be an integer between 0 and 255, or a percentage value (from 0% to 100%).<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />rgb(0, 0, 255); // rendered as blue because the blue parameter is set to its highest value (255) and the others are set to 0</td>
                 </tr>

                 <tr>
                  <td>rgba(red, green, blue, alpha)	</td>
                  <td>Sets a color using the Red-Green-Blue-Alpha (RGBA) model. RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity of the color. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).<br/><br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />rgba(0, 0, 255, 0.3); // rendered as blue with opacity</td>
                 </tr>

                 <tr className='bg-color'>
                    <td className=' '>hsl(hue, saturation, lightness)</td>
                    <td>Sets a color using the Hue-Saturation-Lightness (HSL) model - and represents a cylindrical-coordinate representation of colors. Hue is a degree on the color wheel (from 0 to 360) - 0 or 360 is red, 120 is green, 240 is blue. Saturation is a percentage value; 0% means a shade of gray and 100% is the full color. Lightness is also a percentage; 0% is black, 100% is white.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />hsl(120, 100%, 50%); // green<br />hsl(120, 100%, 75%); // light green<br />hsl(120, 100%, 25%); // dark green <br />hsl(120, 60%, 70%); // pastel green</td>
                 </tr>

                 <tr>
                  <td>hsla(hue, saturation, lightness, alpha)	</td>
                  <td>Sets a color using the Hue-Saturation-Lightness-Alpha (HSLA) model. HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity of the color. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />hsl(120, 100%, 50%, 0.3); // green with opacity<br />hsl(120, 100%, 75%, 0.3); // light green with opacity</td>
                </tr>
                 
                <tr className='bg-color'>
                    <td>grayscale(color)</td>
                    <td>Sets a gray color with the same lightness as color. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />grayscale(#7fffd4); <br /> Result: #c6c6c6</td>
                </tr>
                    
                <tr>
                    <td>complement(color)</td>
                    <td>Sets a color that is the complementary color of color.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />complement(#7fffd4);<br />Result: #ff7faa</td>
                </tr>
                 
                 <tr className='bg-color'>
                    <td >invert(color, weight)</td>
                    <td>Sets a color that is the inverse or negative color of color. The weight parameter is optional and must be a number between 0% and 100%. Default is 100%.<br /><br /><span className='m-0 fw-bold mt-5'>Example:</span><br />invert(white); <br />Result: black</td>
                 </tr>
                </tbody>
              </table>
              </div>
            <h3 className='pt-5 ' id='SassGetColorFunctions'>Sass Get Color Functions</h3>
            <div className='mt-5'>
              <table className='shadow' style={{"width":"100%"}}>
                <tbody>

                 <tr>
                     <th>Function</th>
                     <th>Description & Example</th>
                 </tr>

                 <tr className='bg-color'>
                    <td className=' '>red(color)	</td>
                    <td>Returns the red value of color as a number between 0 and 255. <br /><br /><span className='m-0 fw-bold mt-5'>Example:</span><br />red(#7fffd4); <br />Result: 127<br />red(red);<br />Result: 255</td>
                 </tr>

                 <tr>
                  <td>green(color)</td>
                  <td>Returns the green value of color as a number between 0 and 255.<br/><br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />green(#7fffd4);<br />Result: 255 <br />green(blue);<br />Result: 0</td>
                 </tr>

                 <tr className='bg-color'>
                    <td>blue(color)</td>
                    <td> Returns the blue value of color as a number between 0 and 255.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />blue(#7fffd4);<br />Result: 212<br />blue(blue); <br />Result: 255</td>
                 </tr>

                 <tr>
                  <td>hue(color)	</td>
                  <td>Returns the hue of color as a number between 0deg and 360deg.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />hue(#7fffd4);<br />Result: 160deg</td>
                </tr>
                 
                <tr className='bg-color'>
                    <td>saturation(color)</td>
                    <td>Returns the HSL saturation of color as a number between 0% and 100%.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />saturation(#7fffd4);<br /> Result: 100%</td>
                </tr>
                    
                <tr>
                    <td>lightness(color)</td>
                    <td>Returns the HSL lightness of color as a number between 0% and 100%.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />lightness(#7fffd4);<br />Result: 74.9%</td>
                </tr>
                 
                 <tr className='bg-color'>
                    <td >alpha(color)</td>
                    <td>Returns the alpha channel of color as a number between 0 and 1.<br /><br /><span className='m-0 fw-bold mt-5'>Example:</span><br />alpha(#7fffd4);<br />Result: 1</td>
                 </tr>

                 <tr>
                    <td >opacity(color)	</td>
                    <td>Returns the alpha channel of color as a number between 0 and 1.<br /><br /><span className='m-0 fw-bold mt-5'>Example:</span><br />opacity(rgba(127, 255, 212, 0.5));<br />Result: 0.5</td>
                 </tr>

                </tbody>
              </table>
              </div>
              <h3 className='pt-5 ' id='SassManipulateColorFunctions'>Sass Manipulate Color Functions</h3>
              <div className='mt-5'>
              <table className='shadow' style={{"width":"100%"}}>
                <tbody>

                 <tr>
                     <th>Function</th>
                     <th>Description & Example</th>
                 </tr>

                 <tr className='bg-color'>
                    <td>mix(color1, color2, weight)	</td>
                    <td>Creates a color that is a mix of color1 and color2. The weight parameter must be between 0% and 100%. A larger weight means that more of color1 should be used. A smaller weight means that more of color2 should be used. Default is 50%.</td>
                 </tr>

                 <tr>
                  <td>adjust-hue(color, degrees)</td>
                  <td>Adjusts the color's hue with a degree from -360deg to 360deg.<br/><br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />adjust-hue(#7fffd4, 80deg);<br />adjust-hue(#7fffd4, 80deg);</td>
                 </tr>

                 <tr className='bg-color'>
                    <td>adjust-color(color, red, green, blue, hue, saturation, lightness, alpha)</td>
                    <td> Adjusts one or more parameters by the specified amount. This function adds or subtracts the specified amount to/from the existing color value.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />adjust-color(#7fffd4, blue: 25);<br />Result: </td>
                 </tr>

                 <tr>
                  <td>change-color(color, red, green, blue, hue, saturation, lightness, alpha)</td>
                  <td>Sets one or more parameters of a color to new values.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />change-color(#7fffd4, red: 255);<br />Result: #ffffd4</td>
                </tr>
                 
                <tr className='bg-color'>
                    <td>scale-color(color, red, green, blue,  saturation, lightness, alpha)</td>
                    <td>Scales one or more parameters of color.</td>
                </tr>
                    
                <tr>
                    <td>rgba(color, alpha)</td>
                    <td>Creates a new color of color with the given alpha channel.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />rgba(#7fffd4, 30%);<br />Result: rgba(127, 255, 212, 0.3)</td>
                </tr>
                 
                 <tr className='bg-color'>
                    <td >lighten(color, amount)	</td>
                    <td>Creates a lighter color of color with an amount between 0% and 100%. The amount parameter increases the HSL lightness by that percent.</td>
                 </tr>

                 <tr>
                    <td >darken(color, amount)	</td>
                    <td>Creates a darker color of color with an amount between 0% and 100%. The amount parameter decreases the HSL lightness by that percent.</td>
                 </tr>

                 <tr className='bg-color'>
                    <td >saturate(color, amount)	</td>
                    <td>Creates a more saturated color of color with an amount between 0% and 100%. The amount parameter increases the HSL saturation by that percent.</td>
                 </tr>

                 <tr>
                    <td >desaturate(color, amount)		</td>
                    <td>Creates a less saturated color of color with an amount between 0% and 100%. The amount parameter decreases the HSL saturation by that percent.</td>
                 </tr>

                 <tr className='bg-color'>
                    <td >opacify(color, amount)		</td>
                    <td>Creates a more opaque color of color with an amount between 0 and 1. The amount parameter increases the alpha channel by that amount.</td>
                 </tr>

                 <tr>
                    <td >fade-in(color, amount)		</td>
                    <td>Creates a more opaque color of color with an amount between 0 and 1. The amount parameter increases the alpha channel by that amount.</td>
                 </tr>

                 <tr className='bg-color'>
                    <td >transparentize(color, amount)		</td>
                    <td>Creates a more transparent color of color with an amount between 0 and 1. The amount parameter decreases the alpha channel by that amount.</td>
                 </tr>

                 <tr>
                    <td >fade-out(color, amount)		</td>
                    <td>Creates a darker color of color with an amount between 0% and 100%. The amount parameter decreases the HSL lightness by that percent.</td>
                 </tr>

                </tbody>
              </table>
              </div>

          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#SassColorFunctions" className='text-black pt-3'>Sass Color Functions</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#SassGetColorFunctions" className='text-black '>Sass Get Color Functions</Nav.Link>
            </a>
            <a href="">
              <Nav.Link href="#SassManipulateColorFunctions" className='text-black '>Sass Manipulate Color Functions</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default SassColor;
