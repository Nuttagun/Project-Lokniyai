import React from 'react';
import './c3.css';

const Alerts: React.FC = () => {
    return (
        <>
           <div className="g3">
            <div className="g3_1">
            <h3>ยอดเงินไม่เพียงพอ</h3>
           
            <div className="cancelIcon">
                <img src="./src/assets/cancel-svgrepo-com.svg" alt="" />
            </div>
            
            </div>
            <hr />
            <div className="g2_2">

            <div className="Confirmpage">
                <div className="box10">
                <span id='text'>ยอดเงินของท่านไม่เพียงพอ โปรดเติมเงินเข้าสู่ระบบ เพื่อนำมาแลกเหรียญ </span>
                
                </div>
                <div className="box20">
               
               
                </div>
               <div className="box30">
               <button className='thb'><b>เติมเงินสู่ระบบ</b></button>
               </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default Alerts;
