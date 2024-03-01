import React from 'react'

function Footer() {
  return (
   <>
     <div className='container-fluid Footer-bg mt-5 z-5 position-relative z-3'>
        <div className='row pt-2 pt-md-5 d-flex justify-content-center'>
            <div className='col-lg-3 col-12 col-sm-6'>
                <h4 className='ps-5 pt-4'>Docs</h4>
              <p className='ps-5 pt-xl-3 pt-2'><a href="#" className='text-black'>Getting Started</a></p>   
              <p className='ps-5 pt-xl-3 pt-2'><a href="#" className='text-black'>Layout</a></p>  
              <p className='ps-5 pt-xl-3 pt-2'><a href="#" className='text-black'>Forms</a></p>  
              <p className='ps-5 pt-xl-3 pt-2'><a href="#" className='text-black'>Components</a></p>  
              <p className='ps-5 pt-xl-3 pt-2'><a href="#" className='text-black'>Utilities</a></p>  
            </div>

            <div className='col-lg-3 col-12 col-sm-6'>
                <h4 className='ps-5 pt-4'>Community</h4>
                <p className='ps-5 pt-xl-3 pt-2'><a href="#" className='text-black'>Stack Overflow</a></p>
                <p className='ps-5 pt-xl-3 pt-2'><a href="#" className='text-black'>Discord</a></p>
            </div>
            
            <div className='col-lg-3 col-12 col-sm-6'>
            <h4 className='ps-5 pt-4'>More</h4>
                <p className='pt-xl-3 pt-2 ps-5'><a href="#" className='text-black'>GitHub</a></p>
            </div>
            
        </div>
     <div className='text-center'><p>Copyright © 2024 React Bootstrap. Built with Docusaurus.</p></div>

     </div>
   </>
  )
}

export default Footer