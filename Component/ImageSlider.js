import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { FaPencilAlt,FaCode,FaMobileAlt} from 'react-icons/fa';
import Image from "next/image";

const ImageSlider = () => {

  return (
    <>
            <div style={{backgroundImage:"url('https://noor.pixeldima.com/noor-classic/wp-content/uploads/sites/31/2017/04/page-title2.jpg')"}}>
                <div className="container">
                      <div className='row'>
                          <div style={{ maxWidth: "100%", marginTop: "180px" }}></div>
                              <div className='text-center'>
                                  <p className="display-4 fw-normal text-white">Contact us</p>
                              </div>
                          <div style={{ maxWidth: "100%", marginBottom: "150px" }}></div>
                    </div>
                </div>
             </div>

             <div className='container' style={{marginTop:"140px",marginBottom:"140px"}}>
                        <div className="row">
                            <div className="col text-center" >
                            
                                 <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name*" style={{borderRadius:"0",border:'none',background:"rgb(244,244,244)",height:"50px",marginBottom:1}}/>
                                 <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Email*" style={{borderRadius:"0",border:'none',background:"rgb(244,244,244)",height:"50px",marginBottom:1}}/>
                                 <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject" style={{borderRadius:"0",border:'none',background:"rgb(244,244,244)",height:"50px",marginBottom:1}}/>
                                 <textarea className="form-control" id="exampleFormControlTextarea1" rows={8} placeholder="Message*" style={{resize:"none",borderRadius:"0",border:'none',background:"rgb(244,244,244)",marginBottom:"30px"}}></textarea>

                                 <div className="d-grid">
                                    <button type="button" className="btn btn-dark text-bold" style={{borderRadius:"0",height:"52px",backgroundColor:"rgb(51,51,51)"}}>SEND</button>
                                 </div>
                            </div>
                            <div className="col text-center" >
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.0472075240853!2d72.81360095817985!3d21.188407997362805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3e4a9ad9fd%3A0xc37e45dac09deb21!2sElance%20Solution!5e0!3m2!1sen!2sin!4v1664607493288!5m2!1sen!2sin" style={{border:0,height:"100%",width:"100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
            </div>
            <div className="bg-light">
            
        <div className="container">
            <div className="row">
                <div style={{ maxWidth: "100%", marginTop: "75px" ,marginBottom: "75px" }}></div>
                        <div className="col-sm text-center m-3">
                            <div>
                                <header className="mb-3">
                                   <Image src="/images/email.svg" alt='my-logo' height={30} width={30}  />
                                </header>
                                <div>
                                    <h5 className="mt-4">E-mail address</h5>
                                    <div className="row justify-content-center mt-3">
                                          <hr style={{ width: '3%',border:'1px solid black'}} />
                                    </div>
                                    <span className="text-secondary">
                                    info@elancesolution.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm text-center m-3">
                            <div>
                                <header className="mb-3">
                                   <Image src="/images/call.svg" alt='my-logo' height={30} width={30}  />
                                </header>
                                <div>
                                    <h5 className="mt-4">Contact Number</h5>
                                    <div className="row justify-content-center mt-3">
                                          <hr style={{ width: '3%',border:'1px solid black'}} />
                                    </div>
                                    <span className="text-secondary">
                                    +91 8460386995
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm text-center m-3">
                            <div>
                                <header className="mb-3">
                                   <Image src="/images/location.svg" alt='my-logo' height={30} width={30}  />
                                </header>
                                <div>
                                    <h5 className="mt-4">Address</h5>
                                    <div className="row justify-content-center mt-3">
                                          <hr style={{ width: '3%',border:'1px solid black'}} />
                                    </div>
                                    <span className="text-secondary">
                                    B-201 Kathorwala Chambers, Nanpura, Surat, <br/>Gujarat
                                    </span>
                                </div>
                            </div>
                        </div>
                            
                
                <div style={{ maxWidth: "100%", marginTop: "75px" ,marginBottom: "75px" }}></div>
            </div>
        </div>
    
            </div>
    </>
  )
}

export default ImageSlider;
