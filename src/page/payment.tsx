import React, { useState } from 'react';
import Demo from '../components/path/c10';
import './payment.css';
import Popup1 from '../components/popup_package1';
import Popup2 from '../components/popup_package2';
import Popup3 from '../components/popup_package3';
import TOP from '../components/0';


const Payment: React.FC = () => {


    return (
        <>
        <TOP/>
        <div className="g2">
      
            <div className="g2_1">
                <a className="backicon" href="/" >
                    <img src="./src/assets/back.png" alt="back" />
                </a>
                <h3>เลือกช่องทางการชำระเงิน</h3>
            </div>
            <div className="g2_2">
            <Popup1/>
            <Popup2/>
            <Popup3/>
       
            </div>
            <hr width="90%" />
            <div className="g2_1">
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;ประวัติการทำธุรกรรม</h3>
            </div>
            <div className="table">
                <Demo />
            </div>
        </div>

        
        </>
    );
};


export default Payment;
