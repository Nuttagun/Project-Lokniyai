import React from 'react';
import './c9.css';

const TrueMoney: React.FC = () => {
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
                    <div className="CardTureWL">
                    <button className='getOTP'><b>ขอOTP</b></button>
                        <form action="/submit-credit-card" method="POST">
                        <div className="cre1">
                        <label htmlFor="tel">หมายเลขโทรศัพท์</label><br/>
                            <input type="text" id="tel" name="tel" pattern="\d{10}" placeholder="--" maxLength={10} required  /><br /><br />
                           
                            <img id='imgWL' src="./src/assets/truemoney-wallet.avif" alt="truemoney-wallet" />
                        </div>

                        <div className="cre2">
                            <label htmlFor="OTP">OTP</label><br/>
                            <input  type="text" id="OTP" name="OTP" placeholder="______" maxLength={6} required  /><br /><br />
                       
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

export default TrueMoney;

