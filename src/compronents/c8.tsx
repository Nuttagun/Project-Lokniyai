import React from 'react';
import './c8.css';

const CreditCardt: React.FC = () => {
    return (
        <>
            <div className="g2">
                <div className="g2_1">
                    <h3>ดำเนินการชำระเงิน</h3>
                    <div className="cancelIcon">
                        <img src="./src/assets/cancel-svgrepo-com.svg" alt="Cancel" />
                    </div>
                </div>
                <div className="g23">
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
                            <button className='submitbCre' type="submit"><b>ยืนยัน</b></button>
                            </div> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreditCardt;

