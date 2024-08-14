import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './c2.css'
import './c8.css'

const Popup3: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div className="cardPayment" onClick={handleShow}>
                    <div className="box2">
                        <div className="box1"></div>
                        <img id="imgC" src="./src/assets/credit-card.png" alt="credit-card" />
                        <div className="box1">
                            <span><b>เครดิต/เดบิต</b></span>
                        </div>
                    </div>
                </div>

      <Modal show={show} >
      <>
            <div className="aaa">

                <div className="bbb">
                    <h3>ดำเนินการชำระเงิน</h3>
                    <div className="cancelIcon">
                        <img src="./src/assets/cancel-svgrepo-com.svg" alt="Cancel" />
                    </div>

                </div>

                <div className="ccc">
                    <div className="CardCreditCart">
                        <form action="/submit-credit-card" method="POST">
                        <div className="cre1">
                        <label htmlFor="credit-card">หมายเลขบัตรเครดิต</label><br/>
                            <input type="text" id="credit-card" name="credit-card" pattern="\d{4}-\d{4}-\d{4}-\d{4}" placeholder="xxxx-xxxx-xxxx-xxxx" required /><br /><br />
                            <img id='imgcredit' src="./src/assets/credit-card.png" alt="credit-card" />
                        </div>
                        <div className="cre2">
                            <label htmlFor="cardholder-name">ชื่อผู้ถือบัตร</label><br/>
                            <input type="text" id="cardholder-name" name="cardholder-name" placeholder="ชื่อผู้ถือบัตร" required /><br /><br />
                        </div>
                        <div className="cre3">
                        <div className="exp">
                            <label htmlFor="expiry-date" >วันหมดอายุ</label><br/>
                        </div>    
                            <input type="text" id="expiry-date" name="expiry-date" pattern="\d{2}" placeholder="MM" required /><br /><br />
                            <input type="text" id="expiry-date" name="expiry-date" pattern="\d{2}" placeholder="YY" required /><br /><br />
                            </div>
                            
                        <div className="cre4">
                            <label htmlFor="cvc">CVC/CVV</label><br/>
                            <input type="text" id="cvc" name="cvc" pattern="\d{3}" placeholder="xxx" required /><br /><br />
                            </div>
                            <div className="cre5">   
                            <div className="cre5_2">
                            <img id='imgSecureP' src="./src/assets/SecurePayment.png" alt="SecurePayment" /> &nbsp;SECURE PAYMENT
                                 </div>       
                            <div className="cre5_3">       
                            <button className='submitbCre'><b>ยืนยัน</b></button>
                            </div> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
     
      
      </Modal>
    </>
  );
};

export default Popup3;