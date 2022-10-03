import {useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import ReactDOM from "react-dom";


export default function Modal({ show, onClose, children }) {
    const [isBrowser,setIsBrowser]= useState(false);
   
    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (<>
        <div className="overlay">
            <div className="model" >
                <div className="header">
                    <div>
                      <Button variant="danger" onClick={handleClose}>Close</Button >
                    </div>
                </div>
                <div className="body">{children}</div>
            </div >

        </div>
        </>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        )

    } else {
        return null;
    }
}