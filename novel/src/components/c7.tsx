import React from 'react';
import './c7.css';

const PromptPay: React.FC = () => {



    
    return (
        <>
            
        <div className="g2">
            <div className="g2_1">
            <h3>ดำเนินการชำระเงิน</h3>
            <div className="cancelIcon">
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
    );
};

export default PromptPay;
