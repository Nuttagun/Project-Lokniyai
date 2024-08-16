import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './c2.css';
import './c7.css';
import PopupPromptpay from './popup_package_1-2';

interface CoinCardProps {
  amount: number;
  price: number;
  imgSrc: string;
  showButton?: boolean;
}

const CoinCard: React.FC<CoinCardProps> = ({ amount, price, imgSrc, showButton = true }) => (
  <div className="cardCoinp">
    <div className="box11p">
      <img id='iconp' src='./src/assets/coin-refill-50.svg' alt="Gold Coin" />
      <span><b>{amount.toFixed(2)}</b></span>
    </div>
    <div className="box22p">
      <img id='imgCp' src={imgSrc} alt={`coin-refill-${amount}`} />
    </div>
    <div className="box33p">
      {showButton ? (
        <PopupPromptpay price={price} />
      ) : (
        <button className='thbp'><b>{price.toFixed(2)}</b></button>
      )}
    </div>
  </div>
);

interface Popup2_2Props {
  isDisabled: boolean;
}

const Popup2_2: React.FC<Popup2_2Props> = ({ isDisabled }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cursorStyle = isDisabled ? { cursor: 'not-allowed' } : {};

  return (
    <>
      <button 
        className='submitbWL' 
        onClick={handleShow} 
        style={cursorStyle} 
        disabled={isDisabled}
      >
        <b>ยืนยัน</b>
      </button>

      <Modal show={show} onHide={handleClose}>
        <div className='aap'>
          <div className='prop'>คุ้มสุด!</div>
          <div className="g2p">
            <div className="g2_1p">
              <h3>แลกเหรียญ</h3>
              <div className="cancelIconp" onClick={handleClose}>
                <img src="./src/assets/cancel-svgrepo-com.svg" alt="Cancel" />
              </div>
            </div>
            <div className="g2_2p" style={cursorStyle}>
              <CoinCard amount={70} price={50} imgSrc="./src/assets/coin-refill-50.svg" showButton={true} />
              <CoinCard amount={120} price={100} imgSrc="./src/assets/coin-refill-100.svg" showButton={true} />
              <CoinCard amount={240} price={200} imgSrc="./src/assets/coin-refill-200.svg" showButton={true} />
              <CoinCard amount={360} price={300} imgSrc="./src/assets/coin-refill-300.svg" showButton={true} />
              <CoinCard amount={699} price={500} imgSrc="./src/assets/coin-refill-500.svg" showButton={true} />
              <CoinCard amount={1200} price={1000} imgSrc="./src/assets/coin-refill-1000.svg" showButton={true} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Popup2_2;
