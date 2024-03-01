
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';




function SassString() {
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
                       <Nav.Link href="#SassStringFunctions" className='text-black '>Sass String Functions </Nav.Link>
                     </a>
                     
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 '> Sass String Functions</h1>
            <hr />
            <h3 className='pt-5 ' id='SassStringFunctions'>Sass String Functions</h3>
            <p className='pt-3'>The string functions are used to manipulate and get information about strings.</p>
            <p className='pt-3'>Sass strings are 1-based. The first character in a string is at index 1, not 0.</p>
            <p className='pt-3'>The following table lists all string functions in Sass:</p>
            {/*  */}
            <div className='mt-4'>
              <table className='shadow' style={{"width":"100%"}}>
                <tbody>

                 <tr>
                     <th>Function</th>
                     <th>Description & Example</th>
                 </tr>

                 <tr className='bg-color'>
                    <td className=' '>quote(string)</td>
                    <td>Adds quotes to string, and returns the result. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />quote(Hello world!) <br /> Result: "Hello world!"</td>
                 </tr>

                 <tr>
                  <td>str-index(string, substring)</td>
                  <td>Returns the index of the first occurrence of the substring within string.<br/><br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />str-index("Hello world!", "H") <br /> Result: 1</td>
                 </tr>

                 <tr className='bg-color'>
                    <td className=' '>str-insert(string, insert, index)</td>
                    <td>Returns string with insert inserted at the specified index position. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />str-insert("Hello world!", " wonderful", 6) <br /> Result: "Hello wonderful world!"</td>
                 </tr>

                 <tr>
                  <td>str-length(string)</td>
                  <td>Returns the length of string (in characters). <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />str-length("Hello world!") <br /> Result: 12</td>
                </tr>
                 
                <tr className='bg-color'>
                    <td>str-slice(string, start, end)</td>
                    <td>Extracts characters from string; start at start and end at end, and returns the slice. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />str-slice("Hello world!", 2, 5) <br /> Result: "ello"</td>
                </tr>
                    
                <tr>
                    <td>to-lower-case(string)</td>
                    <td>Returns a copy of string converted to lower case. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />to-lower-case("Hello World!")<br /> Result: "hello world!"</td>
                </tr>

                <tr className='bg-color'>
                    <td>to-upper-case(string)</td>
                    <td>Returns a copy of string converted to upper case.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />to-upper-case("Hello World!")<br />Result: "HELLO WORLD!"</td>
                </tr>
                
                <tr>
                    <td>unique-id()</td>
                    <td>	Returns a unique randomly generated unquoted string (guaranteed to be unique within the current sass session).<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />unique-id()<br />Result: tyghefnsv</td>
                </tr>

                
                <tr className='bg-color'>
                    <td>unquote(string)</td>
                    <td>Removes quotes around string (if any), and returns the result.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />unquote("Hello world!")<br />Result: Hello world!</td>
                </tr>

                </tbody>
              </table>
            </div>

          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#SassStringFunctions" className='text-black pt-3'>Sass String Functions</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default SassString;
