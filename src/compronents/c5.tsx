import React from 'react';
import './c5.css';

const HistoryAddCoin: React.FC = () => {
    return (
        <>
           <div className="g5">
            <div className="g5_1">
            <h3>ประวัติการซื้อเหรียญ</h3>
           
            <div className="cancelIcon">
                <img src="./src/assets/cancel-svgrepo-com.svg" alt="" />
            </div>
            
            </div>
           
            <div className="nav"> <span ><b>สถานะ</b></span><span><b>วันเวลา</b></span><span><b>ยอดเงิน</b></span> </div>
          <br/>
            <div className="item"> <span id='status'>รอดำเนินการ</span><span id='time'>14 ก.ค. 2024 21:26</span><span id='amount'><img id='icon' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />500.00</span> </div><hr />
            <div className="item"> <span id='status'>เสร็จสิ้น</span><span id='time'>14 ก.ค. 2024 21:26</span><span  id='amount'><img id='icon' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />500.00</span> </div><hr />
            <div className="item"> <span id='status'>ล้มเหลว</span ><span id='time'>14 ก.ค. 2024 21:26</span><span  id='amount'><img id='icon' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />50.00</span> </div><hr />
            <div className="item"> <span id='status'>รอดำเนินการ</span><span id='time'>14 ก.ค. 2024 21:26</span><span id='amount'><img id='icon' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />500.00</span> </div><hr />
            <div className="item"> <span id='status'>เสร็จสิ้น</span><span id='time'>14 ก.ค. 2024 21:26</span><span  id='amount'><img id='icon' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />500.00</span> </div><hr />
            <div className="item"> <span id='status'>ล้มเหลว</span ><span id='time'>14 ก.ค. 2024 21:26</span><span  id='amount'><img id='icon' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />50.00</span> </div><hr />
            <div className="item"> <span id='status'>รอดำเนินการ</span><span id='time'>14 ก.ค. 2024 21:26</span><span id='amount'><img id='icon' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />500.00</span> </div><hr />
            <div className="item"> <span id='status'>เสร็จสิ้น</span><span id='time'>14 ก.ค. 2024 21:26</span><span  id='amount'><img id='icon' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />500.00</span> </div><hr />
            <div className="item"> <span id='status'>ล้มเหลว</span ><span id='time'>14 ก.ค. 2024 21:26</span><span  id='amount'><img id='icon' src="./src/assets/coin-refill-50.svg" alt="Gold Coin" />50.00</span> </div><hr />

            </div>
        </>
    );
};

export default HistoryAddCoin;
