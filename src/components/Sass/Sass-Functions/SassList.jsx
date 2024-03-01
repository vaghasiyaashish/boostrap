
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';




function SassList() {
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
        <Row className='ps-4 ps-lg-0 position-relative d-flex justify-content-center'>
          <Col lg={9} className='p-0 pe-4 '>
            <div className='d-lg-none mt-4 '>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className='accordions '>On this page</Accordion.Header>
                  <Accordion.Body className='accordions'>
                     <a href="">
                       <Nav.Link href="#SassListFunctions" className='text-black '>Sass List Functions </Nav.Link>
                     </a>
                     
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 '>Sass List Functions</h1>
            <hr />
            <h3 className='pt-5 ' id='SassListFunctions'>Sass List Functions</h3>
            <p className='pt-3'>The list functions are used to access values in a list, combine lists, and add items to lists.</p>
            <p className='pt-3'>Sass lists are immutable (they cannot change). So, the list functions that return a list, will return a new list, and not change the original list.</p>
            <p className='pt-3'>Sass lists are 1-based. The first list item in a list is at index 1, not 0.</p>
            <p className='pt-3'>The following table lists all list functions in Sass:</p>
            {/*  */}
            <div className='mt-4'>
              <table className='shadow' style={{"width":"100%"}}>
                <tbody>

                 <tr>
                     <th>Function</th>
                     <th>Description & Example</th>
                 </tr>

                 <tr className='bg-color'>
                    <td >append(list, value, [separator])</td>
                    <td>Adds a single value to the end of the list. separator can be auto, comma, or space. auto is default.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />abs(15) <br />append((a b c), d) <br />abs(-15)<br />Result: a b c d <br />append((a b c), (d), comma) <br />Result: a, b, c, d</td>
                 </tr>

                 <tr>
                  <td>index(list, value)</td>
                  <td>Returns the index position for the value in list.<br/><br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />index(a b c, b) <br /> Result: 2 <br />index(a b c, f) <br />Result: null</td>
                 </tr>

                 <tr className='bg-color'>
                    <td>is-bracketed(list)	</td>
                    <td>Checks whether the list has square brackets. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />is-bracketed([a b c]) <br />Result: true <br />is-bracketed(a b c) <br />Result: false </td>
                 </tr>

                 <tr>
                  <td>join(list1, list2, [separator, bracketed])</td>
                  <td>Appends list2 to the end of list1. separator can be auto, comma, or space. auto is default (will use the separator in the first list). bracketed can be auto, true, or false. auto is default.
                  <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />join(a b c, d e f)<br /> Result: a b c d e f <br />join((a b c), (d e f), comma) <br />Result: a, b, c, d, e, f <br />join(a b c, d e f, $bracketed: true) <br />Result: [a b c d e f]</td>
                </tr>
                 
                <tr className='bg-color'>
                    <td>length(list)</td>
                    <td>Returns the length of the list.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />length(a b c) <br /> Result: 3</td>
                </tr>
                    
                <tr>
                    <td>list-separator(list)</td>
                    <td>Returns the list separator used, as a string. Can be either space or comma.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />list-separator(a b c)<br />Result: "space" <br />list-separator(a, b, c) <br />Result: "comma"</td>
                </tr>

                <tr className='bg-color'>
                    <td>nth(list, n)</td>
                    <td>Returns the nth element in the list.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />nth(a b c, 3)<br />Result: c</td>
                </tr>
                
                <tr>
                    <td>set-nth(list, n, value)	</td>
                    <td>Sets the nth list element to the value specified.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />set-nth(a b c, 2, x)<br />Result: a x c</td>
                </tr>

                
                <tr className='bg-color'>
                    <td>zip(lists)</td>
                    <td>Combines lists into a single multidimensional list.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />zip(1px 2px 3px, solid dashed dotted, red green blue)
                        Result: 1px solid red, 2px dashed green, 3px dotted blue</td>
                 </tr>



                </tbody>
              </table>
            </div>

          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#SassListFunctions" className='text-black pt-3'>Sass List Functions</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default SassList;
