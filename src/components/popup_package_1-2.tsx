import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './c2.css';
import './c7.css';



interface PopupPromptpayProps {
  price: number;
}

interface PopupPromptpayProps {
  price: number;
  handleCloseParent: () => void; // Add this prop
}

const PopupPromptpay: React.FC<PopupPromptpayProps> = ({ price, handleCloseParent }) => {
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <>
      <button className='thbp' onClick={handleShow2}>
        <b>{price.toFixed(2)}</b>
      </button>

      <Modal show={show2} onHide={handleClose2}>
        <div className="g2r">
          <div className="g2_1x">
            <h3>ดำเนินการชำระเงิน</h3>
            <div className="cancelIcon" onClick={handleClose2}>
              <img src="./src/assets/cancel-svgrepo-com.svg" alt="Cancel" />
            </div>
          </div>
          <div className="g23">
            <div className="CardPromptPayP">
              <div className="box1">
                <span><b>สแกนโลด </b></span>
              </div>
              <div className="box2">
                <img id='imgqr' src="./src/assets/qr1000.jpg" alt="prompt-pay" />
              </div>
              <div className="box1">
                <span>ยอดรวม </span>
                <span id='sp'>{price.toFixed(2)}</span>
              </div>
              <button className='submitb' onClick={() => { handleClose2(); handleCloseParent(); }}>
                <b>เสร็จสิ้น</b>

              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default PopupPromptpay;
