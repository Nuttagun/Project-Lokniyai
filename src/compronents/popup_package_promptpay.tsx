import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './c2.css'
import './c7.css'

const PopupPromptpay: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>


<button className='thbp' onClick={handleShow}><b>50.00</b></button>

      <Modal show={show} >
      <>
      <div className="g2r">
            <div className="g2_1">
            <h3>ดำเนินการชำระเงิน</h3>
            <div className="cancelIcon"  onClick={handleClose}>
                <img src="./src/assets/cancel-svgrepo-com.svg" alt="" />
            </div>
       
            </div>
            <div className="g23">

            <div className="CardPromptPay">
                <div className="box1">
                <span><b>สแกนโลด </b></span>
                </div>
                <div className="box2">
                <img id='imgqr' src="./src/assets/qr1000.jpg" alt="prompt-pay" />
                </div>
                <div className="box1">
                <span>ยอดรวม </span>
                <span id='sp'>1000.00 บาท </span>
                </div>
              
            </div>
             <button className='submitb'><b>เสร็จสิ้น</b></button>
          



            </div>
        
      
        </div>    
      
      </>
      </Modal>
    </>
  );
};

export default PopupPromptpay;