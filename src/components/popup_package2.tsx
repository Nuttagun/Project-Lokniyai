import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './c9.css';
import './c2.css';
import CountdownButton from './GETOTP';
import Popup2_2 from './popup_package_2-2';

const Popup2: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormChange = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    setIsFormValid(form.checkValidity());
  };

  return (
    <>
      <div className="cardPayment" onClick={handleShow}>
        <div className="box2">
          <div className="box1"></div>
          <img id="imgC" src="./src/assets/truemoney-wallet.avif" alt="truemoney-wallet" />
          <div className="box1">
            <span><b>ทรูวอเล็ต</b></span>
          </div>
        </div>
      </div>

      <Modal show={show}>
        <div className="g2t">
          <div className="g2_1w">
            <h3>ดำเนินการชำระเงิน</h3>
            <div className="cancelIcon" onClick={handleClose}>
              <img src="./src/assets/cancel-svgrepo-com.svg" alt="Cancel" />
            </div>
          </div>
          <div className="g23">
            <div className="CardTureWL">
              <CountdownButton />
              <form className='fromWL' action="/" method="POST" onChange={handleFormChange}>
                <div className="cre1">
                  <label htmlFor="tel">หมายเลขโทรศัพท์</label><br/>
                  <input type="text" id="tel" name="tel" pattern="\d{10}" placeholder="--" maxLength={10} required /><br /><br />
                </div>
                <img id='imgWL' src="./src/assets/truemoney-wallet.avif" alt="truemoney-wallet" />
                <div className="cre2">
                  <label htmlFor="OTP">OTP</label><br/>
                  <input type="text" id="OTP" name="OTP" placeholder="______" maxLength={6} required /><br /><br />
                </div>
                <br/>
                <div className="cre5">
                  <div className="cre5_2">
                    <img id='imgSecureP' src="./src/assets/SecurePayment.png" alt="SecurePayment" /> &nbsp;SECURE PAYMENT
                  </div>
                </div>
              </form>
              <div className="cre5_3">
                <Popup2_2 isDisabled={!isFormValid} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Popup2;
