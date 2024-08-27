import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './c2.css'

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
        <div className='aap'>
            <div className='prop'>คุ้มสุด!</div>
        <div className="g2p">
            <div className="g2_1p">
            <h3>แลกเหรียญ</h3>
            <div className="cancelIconp" onClick={handleClose}>
                <img src="./src/assets/cancel-svgrepo-com.svg" alt="" />
            </div>
            
            </div>
            <div className="g2_2p">

            <div className="cardCoinp">
                <div className="box11p">
                <img id='iconp' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />
                <span><b>60.00</b></span>
                </div>
                <div className="box22p">
                <img id='imgCp' src="./src/assets/coin-refill-50.svg" alt="coin-refill-50" />
                </div>
               <div className="box33p">
               <button className='thbp'><b>50.00</b></button>
               </div>
            </div>

            <div className="cardCoinp">
                <div className="box11p">
                <img id='iconp' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />
                <span><b>120.00</b></span>
                </div>
                <div className="box22p">
                <img id='imgCp' src="./src/assets/coin-refill-100.svg" alt="coin-refill-100" />
                </div>
               <div className="box33p">
               <button className='thbp'><b>100.00</b></button>
               </div>
            </div>

            <div className="cardCoinp">
                <div className="box11p">
                <img id='iconp' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />
                <span><b>240.00</b></span>
                </div>
                <div className="box22p">
                <img id='imgCp' src="./src/assets/coin-refill-200.svg" alt="coin-refill-200" />
                </div>
               <div className="box33p">
               <button className='thbp'><b>200.00</b></button>
               </div>
            </div>

            <div className="cardCoinp">
                <div className="box11p">
                <img id='iconp' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />
                <span><b>360.00</b></span>
                </div>
                <div className="box22p">
                <img id='imgCp' src="./src/assets/coin-refill-300.svg" alt="coin-refill-100" />
                </div>
               <div className="box33p">
               <button className='thbp'><b>300.00</b></button>
               </div>
            </div>

            <div className="cardCoinp">
                <div className="box11p">
                <img id='iconp' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />
                <span><b>699.00</b></span>
                </div>
                <div className="box22p">
                <img id='imgCp' src="./src/assets/coin-refill-500.svg" alt="coin-refill-100" />
                </div>
               <div className="box33p">
               <button className='thbp'><b>500.00</b></button>
               </div>
            </div>
            <div className="cardCoinp">
         
                <div className="box11p">
                
                <img id='iconp' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />
                <span><b>1200.00</b></span>
                </div>
                <div className="box22p">
                <img id='imgCp' src="./src/assets/coin-refill-1000.svg" alt="coin-refill-1000" />
                </div>
               <div className="box33p">
               <button className='thbp'><b>1000.00</b></button>
               </div>
            </div>
        



            </div>
        
      
        </div>
        </div>
        </>
     
      
      </Modal>
    </>
  );
};

export default Popup3;