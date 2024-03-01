
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';



function SassSelector() {
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
                       <Nav.Link href="#SassSelectorFunctions" className='text-black '>Sass Selector Functions</Nav.Link>
                     </a>
                     
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 '> Sass Selector Functions</h1>
            <hr />
            <h3 className='pt-5 ' id='SassSelectorFunctions'>Sass Selector Functions</h3>
            <p className='pt-3'>The selector functions are used to check and manipulate selectors. </p>
            <p className='pt-3'>The following table lists all selector functions in Sass:</p>

            {/*  */}
            <div className='mt-4'>
              <table className='shadow' style={{"width":"100%"}}>
                <tbody>

                 <tr>
                     <th>Function</th>
                     <th>Description & Example</th>
                 </tr>

                 <tr className='bg-color'>
                    <td className=' '>is-superselector(super, sub)	</td>
                    <td>Checks whether the super selector matches all the elements that sub matches.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />is-superselector("div", "div.myInput")<br /> Result: true <br />is-superselector("div.myInput", "div") <br />Result: false <br />is-superselector("div", "div") <br />Result: true</td>
                 </tr>

                 <tr>
                  <td>selector-append(selectors)</td>
                  <td>Appends the second (and third/fourth etc.) selector to the first selector.<br/><br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />selector-append("div", ".myInput")<br /> Result: div.myInput <br />selector-append(".warning", "__a") <br />Result: .warning__a</td>
                 </tr>

                 <tr className='bg-color'>
                    <td>selector-extend(selector, extendee, extender)	</td>
                    <td></td>
                 </tr>

                 <tr>
                  <td>selector-nest(selectors)</td>
                  <td>Returns a new selector containing a nested list of CSS selectors based on the list provided.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />selector-nest("ul", "li")<br /> Result: ul li <br />selector-nest(".warning", "alert", "div")<br />Result: .warning div, alert div</td>
                </tr>

                <tr className='bg-color'>
                  <td>selector-nest(selectors)</td>
                  <td>Returns a new selector containing a nested list of CSS selectors based on the list provided.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />selector-nest("ul", "li")<br /> Result: ul li <br />selector-nest(".warning", "alert", "div")<br />Result: .warning div, alert div</td>
                </tr>
                 
                <tr >
                    <td>selector-parse(selector)</td>
                    <td>Returns a list of strings contained in selector using the same format as the parent selector.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />selector-parse("h1 .myInput .warning") <br /> selector-parse("h1 .myInput .warning") </td>
                </tr>
                    
                <tr className='bg-color'>
                    <td>selector-unify(selector1, selector2)</td>
                    <td>	Returns a new selector that matches only elements matched by both selector1 and selector2. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />selector-unify("myInput", ".disabled")<br /> Result: myInput.disabled <br />selector-unify("p", "h1")<br />Result: null</td>
                </tr>

                <tr >
                    <td>simple-selectors(selectors)</td>
                    <td>Returns a list of the individual selectors in selectors.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />simple-selectors("div.myInput") <br /> Result: div, .myInput <br />simple-selectors("div.myInput:before") <br />Result: div, .myInput, :before </td>
                </tr>

                </tbody>
              </table>
            </div>

          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0'>
            <a href="">
              <Nav.Link href="#SassSelectorFunctions" className='text-black pt-3'>Sass Selector Functions</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default SassSelector;
