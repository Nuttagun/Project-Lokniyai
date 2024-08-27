import React, { useState } from 'react';
import CoinPackage from './c2'

const PopupExample: React.FC = () => {
  // สร้างสถานะเพื่อเก็บข้อมูลว่า popup ถูกเปิดหรือไม่
  const [isOpen, setIsOpen] = useState(false);

  // ฟังก์ชันเพื่อสลับสถานะการแสดง popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* ปุ่มเพื่อเปิด/ปิด popup */}
      <button onClick={togglePopup}>Open Popup</button>

      {/* popup */}
      {isOpen && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
          <CoinPackage/>
            {/* ปุ่มเพื่อปิด popup */}
            <button onClick={togglePopup}>Close Popup</button>
          </div>
        </div>
      )}
    </div>
  );
};

// สไตล์ของ popup
const styles = {
  popup: {
    position: 'fixed' as 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '50px',
    zIndex: 1000,
  },
  popupContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center' as 'center',
  },
};

export default PopupExample;
