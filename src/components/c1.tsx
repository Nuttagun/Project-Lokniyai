import React from 'react';
import './c1.css';

const ShowCoins: React.FC = () => {
    return (
        <>
        <div className="g1">
          
       <img id='iconf' src="./src/assets/coin-svgrepo-com.png" alt="Gold Coin" />
            <span>5000.00</span>
            <button id='coin'><b>แลกเหรียญ</b></button>
        </div>
        <hr />
       
        </>
    );
};

export default ShowCoins;
