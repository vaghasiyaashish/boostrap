import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Options() {
const grater =`>`
  return (
    <div className='pt-5 w-100'>
      <Container fluid>
        <Row className=' ps-4 ps-lg-4 position-relative d-flex '>
          <Col lg={9} className='p-0 pe-4 '>
            <h1 className='pt-5 '>Options</h1>
            <h4 className='pt-3 fw-300 ' >Quickly customize Bootstrap with built-in variables to easily toggle global CSS preferences for controlling style and behavior.</h4>
             <p className='pt-3'>Customize Bootstrap with our built-in custom variables file and easily toggle global CSS preferences with new <span className='m-0 text-danger bg-lightGray'>$enable-*</span> Sass variables. Override a variable’s value and recompile with <span className='m-0 text-danger bg-lightGray'>npm run test</span> as needed.</p>
             <p className='pt-3'>You can find and customize these variables for key global options in Bootstrap’s <span className='m-0 text-danger bg-lightGray'>scss/_variables.scss file</span>.</p>
             <div className='mt-4'>
              <table className='shadow' style={{"width":"100%"}}>
                <tbody>

                 <tr>
                     <th className='ps-sm-4 pe-sm-5'>Variable</th>
                     <th className='ps-sm-4 pe-sm-5'>Values</th>
                     <th className='ps-sm-4'>Description</th>
                 </tr>

                 <tr className='border-top' >
                    <td><p className='text-danger '>$spacer</p></td>
                    <td><span className='m-0 text-danger '>1rem</span> (default), or any value <code>{grater}</code> 0</td>
                    <td>Specifies the default spacer value to programmatically generate our <a href='#'>spacer utilities</a>.</td>
                 </tr>

                 <tr className='border-top'>
                    <td><p className='text-danger '>$enable-dark-mode	</p></td>
                    <td><span className='m-0 text-danger '>true</span> (default) or <span className='m-0 text-danger'>false</span></td>
                    <td>Enables built-in <a href="#">dark mode support</a> across the project and its components.</td>
                 </tr>

                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-rounded	</p></td>
                    <td><span className='m-0 text-danger '>true</span> or (default)<span className='m-0 text-danger '>false</span></td>
                    <td>Enables predefined <span className='m-0 text-danger'>border-radius</span> styles on various components.</td>
                 </tr>

                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-shadows</p></td>
                    <td><span className='m-0 text-danger '>true</span> or <span className='m-0 text-danger '>false</span>  (default)	</td>
                    <td>Enables predefined decorative <span className='m-0 text-danger'>box-shadow</span> styles on various components. Does not affect <span className='m-0 text-danger'>box-shadow</span>s used for focus states.</td>
                 </tr>
                 
                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-gradients</p></td>
                    <td><span className='m-0 text-danger '>true</span>  or <span className='m-0 text-danger '>false </span>(default)	</td>
                    <td>Enables predefined gradients via <span className='m-0 text-danger'>background-image</span> styles on various components.</td>
                 </tr>

                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-transitions	</p></td>
                    <td><span className='m-0 text-danger '>true</span>  or (default)<span className='m-0 text-danger '>false </span>	</td>
                    <td>Enables predefined <span className='m-0 text-danger'>transitions</span> on various components.</td>
                 </tr>

                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-reduced-motion</p></td>
                    <td><span className='m-0 text-danger '>true</span>  or (default)<span className='m-0 text-danger '>false </span>	</td>
                    <td>Enables the <span className='m-0 text-danger'>prefers-reduced-motion media query</span>, which suppresses certain animations/transitions based on the users’ browser/operating system preferences.</td>
                 </tr> 

                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-grid-classes</p></td>
                    <td><span className='m-0 text-danger '>true</span>  or (default)<span className='m-0 text-danger '>false </span>	</td>
                    <td>Enables the generation of CSS classes for the grid system (e.g. <span className='m-0 text-danger'>.row</span>, <span className='m-0 text-danger'>.col-md-1 </span>, etc.).</td>
                 </tr>
                  
                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-container-classes	</p></td>
                    <td><span className='m-0 text-danger '>true</span>  or (default)<span className='m-0 text-danger '>false </span>	</td>
                    <td>Enables the generation of CSS classes for layout containers. (New in v5.2.0)</td>
                 </tr>

                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-caret	</p></td>
                    <td><span className='m-0 text-danger '>true</span>  or (default)<span className='m-0 text-danger '>false </span>	</td>
                    <td>Enables pseudo element caret on .<span className='m-0 text-danger '>dropdown-toggle</span>.</td>
                 </tr>

                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-button-pointers</p></td>
                    <td><span className='m-0 text-danger '>true</span>  or (default)<span className='m-0 text-danger '>false </span>	</td>
                    <td>Add “hand” cursor to non-disabled button elements.</td>
                 </tr>

                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-rfs</p></td>
                    <td><span className='m-0 text-danger '>true</span>  or (default)<span className='m-0 text-danger '>false </span>	</td>
                    <td>	Globally enables <a href="#">RFS</a>.</td>
                 </tr>

                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-validation-icons</p></td>
                    <td><span className='m-0 text-danger '>true</span>  or (default)<span className='m-0 text-danger '>false </span>	</td>
                    <td>Enables <span className='m-0 text-danger '>background-image</span> icons within textual inputs and some custom forms for validation states.</td>
                 </tr>

                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-negative-margins</p></td>
                    <td><span className='m-0 text-danger '>true</span>  or (default)<span className='m-0 text-danger '>false </span>	</td>
                    <td>	Enables the generation of <a href="#">negative margin utilities</a>.</td>
                 </tr>

                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-deprecation-messages</p></td>
                    <td><span className='m-0 text-danger '>true</span>  or (default)<span className='m-0 text-danger '>false </span>	</td>
                    <td>	Set to <span className='m-0 text-danger '>false</span> to hide warnings when using any of the deprecated mixins and functions that are planned to be removed in <span className='m-0 text-danger '>v6</span>.</td>
                 </tr>

                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-important-utilities</p></td>
                    <td><span className='m-0 text-danger '>true</span>  or (default)<span className='m-0 text-danger '>false </span>	</td>
                    <td>Enables the <span className='m-0 text-danger '>!important</span> suffix in utility classes.</td>
                 </tr>

                 <tr className='border-top'>
                    <td><p className='text-danger'>$enable-smooth-scroll</p></td>
                    <td><span className='m-0 text-danger '>true</span>  or (default)<span className='m-0 text-danger '>false </span>	</td>
                    <td>Applies <span className='m-0 text-danger '>scroll-behavior: smooth</span> globally, except for users asking for reduced motion through <a href="#">prefers-reduced-motion media query</a> </td>
                 </tr>

                </tbody>
              </table>
            </div>
             {/* <div className='container'>
              <div className='row'>
                <div className='col-3'>
                  <h5>Variable</h5>
                   <p className='text-danger '>$spacer</p>
                  </div>
                <div className='col-3'>
                  <h5>Variable</h5>
                   <p className='text-danger '>$spacer</p>
                  </div>
                <div className='col-6'>
                  <h5>Variable</h5>
                   <p className='text-danger '>$spacer</p>
                  </div>
              </div>
             </div> */}
          
          </Col>
          
        </Row>
      </Container >
    </div >


  );
}

export default Options;
