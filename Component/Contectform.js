import React from "react";

export default function Contact() {
  return (
    <>
      <div style={{backgroundImage:"url('https://noor.pixeldima.com/noor-classic/wp-content/uploads/sites/31/2017/04/page-title2.jpg')"}}>
                <div className="container">
                      <div className='row'>
                          <div style={{ maxWidth: "100%", marginTop: "180px" }}></div>
                              <div className='text-center'>
                                  <p className="display-4 fw-normal text-white">About us</p>
                              </div>
                          <div style={{ maxWidth: "100%", marginBottom: "150px" }}></div>
                      </div>
                </div>
        </div>
        <div className='container' style={{marginTop:"180px",marginBottom:"180px"}}>
                 <div className='row'>
                        <div className='text-center'>
                            <p className="display-4" style={{ marginBottom:"35px"}}>What we do?</p>
                            <div className="row justify-content-center mt-3">
                                <hr style={{ width: '5%',border:'1px solid black'}} />
                            </div>
                        </div>
                 </div>
                 <div className="container">
                        <div className="row">
                            <div className="col text-center m-3">
                                <span className="row justify-content-md-center">
                                    <div className="col col-lg-7 text-secondary">
                                    Elance Solution is service based web development company located in Surat (Gujarat), India. We have 5+ years of experience in web development and providing services such as Web Designing, Web Development, API Development, Dedicated resources, and many other services.We are using latest web development technologies to developed the website for our clients.
                                    </div>
                                </span>
                            </div>
                        </div>
                </div>
            </div>
    </>
  );
}


// style={{ fontWeight: "10",color:"white"}}