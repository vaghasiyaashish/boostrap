
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';




function SassNumeric() {
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
                       <Nav.Link href="#SassNumericFunctions" className='text-black '>Sass Numeric Functions </Nav.Link>
                     </a>
                     
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 '> Sass Numeric Functions</h1>
            <hr />
            <h3 className='pt-5 ' id='SassNumericFunctions'>Sass Numeric Functions</h3>
            <p className='pt-3'>The numeric functions are used to manipulate numeric values.</p>
            <p className='pt-3'>The following table lists all numeric functions in Sass:</p>
            {/*  */}
            <div className='mt-4'>
              <table className='shadow' style={{"width":"100%"}}>
                <tbody>

                 <tr>
                     <th>Function</th>
                     <th>Description & Example</th>
                 </tr>

                 <tr className='bg-color'>
                    <td >abs(number)</td>
                    <td>Returns the absolute value of number.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />abs(15) <br />Result: 15 <br />abs(-15)<br /> Result: 15</td>
                 </tr>

                 <tr>
                  <td>ceil(number)</td>
                  <td>Rounds number up to the nearest integer.<br/><br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />ceil(15.20) <br /> Result: 16</td>
                 </tr>

                 <tr className='bg-color'>
                    <td>comparable(num1, num2)</td>
                    <td>Returns whether num1 and num2 are comparable. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />comparable(15px, 10px) <br />Result: true <br />comparable(20mm, 1cm) <br />Result: true <br />comparable(35px, 2em) <br />Result: false</td>
                 </tr>

                 <tr>
                  <td>floor(number)</td>
                  <td>Rounds number down to the nearest integer. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />floor(15.80) <br /> Result: 15</td>
                </tr>
                 
                <tr className='bg-color'>
                    <td>max(number...)</td>
                    <td>Returns the highest value of several numbers.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />max(5, 7, 9, 0, -3, -7) <br /> Result: 9</td>
                </tr>
                    
                <tr>
                    <td>min(number...)</td>
                    <td>Returns the lowest value of several numbers.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />min(5, 7, 9, 0, -3, -7)<br /> Result: -7</td>
                </tr>

                <tr className='bg-color'>
                    <td>percentage(number)</td>
                    <td>Converts number to a percentage (multiplies the number with 100).<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />percentage(1.2)<br />Result: 120</td>
                </tr>
                
                <tr>
                    <td>random()</td>
                    <td>Returns a random number between 0 and 1.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />random()<br />Result: 0.45673</td>
                </tr>

                
                <tr className='bg-color'>
                    <td>random(number)</td>
                    <td>Returns a random integer between 1 and number.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />random(6)<br />Result: 4</td>
                </tr>

                <tr className='bg-color'>
                    <td>round(number)</td>
                    <td>Rounds number to the nearest integer.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />round(15.20)<br />Result: 15 <br />round(15.80)<br />Result: 16</td>
                </tr>

                </tbody>
              </table>
            </div>

          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#SassNumericFunctions" className='text-black pt-3'>Sass Numeric Functions</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default SassNumeric;
