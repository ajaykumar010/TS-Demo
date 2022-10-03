import React from 'react';

const Footer = () => {
  return (
    <>
<div style={{backgroundColor:'rgb(51,51,51)'}}>
  <footer className="text-center text-lg-start text-white">
    <div className="p-4 pb-0" >
      <section className="">
        <div className="row mt-5 mb-5">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              About Us
              <hr/>
            </h6>
            <p style={{color:'rgb(150,150,150)'}}>
            Elance Solution is service based web development 
            company and it is known for great quality of
            work and perfect delivery on time.
            </p>
          </div>

          {/* <hr className="w-100 clearfix d-md-none" /> */}

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Our Company <hr/></h6>
                <p style={{color:'rgb(150,150,150)'}}>About Us</p>
                <p style={{color:'rgb(150,150,150)'}}>Contect Us</p>
          </div>

          {/* <hr className="w-100 clearfix d-md-none" /> */}

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Our Services
              <hr/>
            </h6>
            <p style={{color:'rgb(150,150,150)'}}>Web Designing</p>
            <p style={{color:'rgb(150,150,150)'}}>Web Development</p>
            <p style={{color:'rgb(150,150,150)'}}>Api Development</p>
            <p style={{color:'rgb(150,150,150)'}}>Dedicated Resources</p>
            <p style={{color:'rgb(150,150,150)'}}>Web Redesign</p>
            <p style={{color:'rgb(150,150,150)'}}>Support {"&"} Maintenance</p>
          </div>

          {/* <hr className="w-100 clearfix d-md-none" /> */}

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Address <hr/></h6>
            <p style={{color:'rgb(150,150,150)'}}>B-201 Kathorwala Chambers, Nanpura, Surat, Gujarat</p>
            Email :<p style={{color:'rgb(150,150,150)'}}>info@elancesolution.com</p>
            Contact No :<p style={{color:'rgb(150,150,150)'}}>+91 8460386995</p>
          </div>
        </div>
      </section>

      
    </div>
        <hr className="my-3"/>

            <section className="p-3 pt-0">
                    <div className="row d-flex align-items-center">
                        <div className="dima-footer text-center">
                            <div className="full-width-footer">
                                    <div className="copyright float-center mt-4 mb-4">
                                        COPYRIGHT © 2022 ELANCE SOLUTION
                                    </div>
                            </div>
                        </div>
                    </div>
            </section>
  </footer>
  
</div>

    </>
  )
}

export default Footer