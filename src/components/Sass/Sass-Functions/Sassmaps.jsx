
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';



function Sassmaps() {
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
                       <Nav.Link href="#SassMapFunctions" className='text-black '>Sass Map Functions</Nav.Link>
                     </a>
                     
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              {/* <Link to="/"> Home</Link> */}
            </div>
            <h1 className='pt-5 pb-4 '> Sass Map Functions</h1>
            <hr />
            <h3 className='pt-5 ' id='SassMapFunctions'>Sass Map Functions</h3>
            <p className='pt-3'>In Sass, the map data type represents one or more key/value pairs.</p>
            <p className='pt-3'><span className='m-0 fw-bold'>Tip:</span> It is also possible to use the List functions from the previous page, with maps. Then the map will be treated as a list with two elements.</p>
            <p className='pt-3'>Sass maps are immutable (they cannot change). So, the map functions that return a map, will return a new map, and not change the original map.</p>
            <p className='pt-3'>The following table lists all map functions in Sass:</p>
            {/*  */}
            <div className='mt-4'>
              <table className='shadow' style={{"width":"100%"}}>
                <tbody>

                 <tr>
                     <th>Function</th>
                     <th>Description & Example</th>
                 </tr>

                 <tr className='bg-color'>
                    <td className=' '>map-get(map, key)	</td>
                    <td>	Returns the value for the specified key in the map.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />$font-sizes: ("small": 12px, "normal": 18px, "large": 24px) <br /> map-get($font-sizes, "small") <br />Result: 12px</td>
                 </tr>

                 <tr>
                  <td>map-has-key(map, key)</td>
                  <td>Checks whether map has the specified key. Returns true or false.<br/><br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)<br /> map-has-key($font-sizes, "big") <br />Result: false</td>
                 </tr>

                 <tr className='bg-color'>
                    <td className=' '>map-keys(map)</td>
                    <td>Returns a list of all keys in map.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)<br />map-keys($font-sizes) <br />Result: "small", "normal, "large"</td>
                 </tr>

                 <tr>
                  <td>map-merge(map1, map2)</td>
                  <td>Appends map2 to the end of map1.<br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)<br /> $font-sizes2: ("x-large": 30px, "xx-large": 36px) <br />map-merge($font-sizes, $font-sizes2) <br />Result: "small": 12px, "normal": 18px, "large": 24px, "x-large": 30px, "xx-large": 36px</td>
                </tr>
                 
                <tr className='bg-color'>
                    <td>map-remove(map, keys...)</td>
                    <td>Removes the specified keys from map. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />$font-sizes: ("small": 12px, "normal": 18px, "large": 24px) <br /> map-remove($font-sizes, "small") <br />Result: ("normal": 18px, "large": 24px) <br />map-remove($font-sizes, "small", "large") <br />Result: ("normal": 18px)</td>
                </tr>
                    
                <tr>
                    <td>map-values(map)</td>
                    <td>Returns a list of all values in map. <br /> <br /><span className='m-0 fw-bold mt-5'>Example:</span> <br />$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)<br /> map-values($font-sizes) <br />Result: 12px, 18px, 24px</td>
                </tr>

                </tbody>
              </table>
            </div>

          </Col>

          <Col lg={2} className='position position-sticky pt-5 bg-light d-none d-lg-block fs-lg-10 fs-xl-12 z-0 '>
            <a href="">
              <Nav.Link href="#SassMapFunctions " className='text-black pt-3'>Sass Map Functions</Nav.Link>
            </a>
          </Col>
        </Row>
      </Container >
    </div >


  );
}

export default Sassmaps;
