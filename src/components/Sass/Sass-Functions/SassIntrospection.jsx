
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';




function SassIntrospection() {
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
                       <Nav.Link href="#SassIntrospectionFunctions" className='text-black '>Sass Introspection Functions </Nav.Link>
                     </a>
                     
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 '> Sass Introspection Functions</h1>
            <hr />
            <h3 className='pt-5 ' id='SassIntrospectionFunctions'>Sass Introspection Functions</h3>
            <p className='pt-3'>The introspection functions are rarely used when building a stylesheet. However, they are valuable if something does not work properly - to figure out what's going on: like debugging functions.</p>
            <p className='pt-3'>The following table lists all introspection functions in Sass:</p>
            {/*  */}
            <div className='mt-4'>
              <table className='shadow' style={{"width":"100%"}}>
                <tbody>

                 <tr>
                     <th>Function</th>
                     <th>Description & Example</th>
                 </tr>

                 <tr className='bg-color'>
                    <td>call(function, arguments...)</td>
                    <td>Calls a function with arguments, and returns the result.</td>
                 </tr>

                 <tr>
                  <td>content-exists()</td>
                  <td>checks whether the current mixin was passed a @content block.</td>
                 </tr>

                 <tr className='bg-color'>
                    <td className=' '>feature-exists(feature)	</td>
                    <td>Checks whether feature is supported by the current Sass implementation. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />feature-exists("at-error"); <br /> Result: true</td>
                 </tr>

                 <tr>
                  <td>function-exists(functionname)	</td>
                  <td>	Checks whether the specified function exists.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />function-exists("nonsense")<br /> Result: false</td>
                </tr>
                 
                <tr className='bg-color'>
                    <td>get-function(functionname, css: false)	</td>
                    <td>Returns the specified function. If css is true, it returns a plain CSS function instead.</td>
                </tr>
                    
                <tr>
                    <td>global-variable-exists(variablename)	</td>
                    <td>Checks whether the specified global variable exists. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />variable-exists(a)<br /> Result: true</td>
                </tr>

                <tr className='bg-color'>
                    <td>inspect(value)</td>
                    <td>Returns a string representation of value.</td>
                </tr>
                
                <tr>
                    <td>mixin-exists(mixinname)</td>
                    <td>Checks whether the specified mixin exists.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />mixin-exists("important-text")<br />Result: true</td>
                </tr>

                
                <tr className='bg-color'>
                    <td>type-of(value)</td>
                    <td>Returns the type of value. Can be number, string, color, list, map, bool, null, function, arglist.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />type-of(15px)<br />Result: number <br />type-of(#ff0000)<br />Result: color</td>
                </tr>

                <tr>
                    <td>unit(number)	</td>
                    <td>Returns the unit associated with a number.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />unit(15px)<br />Result: px</td>
                </tr>

                <tr className='bg-color'>
                  <td>unitless(number)</td>
                  <td>Checks whether the specified number has a unit associated with it. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />unitless(15px) <br />Result: false <br />unitless(15) <br />Result: true</td>
                </tr>

                <tr>
                    <td>variable-exists(variablename)	</td>
                    <td>Checks whether the specified variable exists in the current scope.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />variable-exists(b)<br />Result: true</td>
                </tr>

                </tbody>
              </table>
            </div>

          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#SassIntrospectionFunctions" className='text-black pt-3'>Sass Introspection Functions</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default SassIntrospection;
