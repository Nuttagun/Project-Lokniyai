import React from 'react';
import './c3.css';

const Confirm: React.FC = () => {
    return (
        <>
           <div className="g3">
            <div className="g3_1">
            <h3>ยืนยัน</h3>
           
            <div className="cancelIcon">
                <img src="./src/assets/cancel-svgrepo-com.svg" alt="" />
            </div>
            
            </div>
            <hr />
            <div className="g3_2">

            <div className="Confirmpage">
                <div className="box10">
                <span  id='text'>ยอดเงินของคุณจะถูกใช้ไป </span>
                <span  id='text'><b> 500.00 </b> </span>
                <img id='icon1' src="./src/assets/realcoin.png" alt="realcoin" />
                
                </div>
                <div className="box20">
                <span  id='text'>คุณจะได้รับ  </span>
                <span id='text'><b>699.00</b></span>
                <img id='icon2' src="./src/assets/coin-refill-50.svg" alt="coin-refill-50" />
                </div>
               <div className="box30">
               <button className='ok'><b>ตกลง</b></button>
               </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default Confirm;
