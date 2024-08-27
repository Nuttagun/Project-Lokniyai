import React, { useState } from 'react';

function PopupExample2() {
  // ใช้ useState สำหรับ popup A และ B
  const [isPopupAOpen, setIsPopupAOpen] = useState(false);
  const [isPopupBOpen, setIsPopupBOpen] = useState(false);

  // ฟังก์ชันสำหรับเปิด Popup B และปิด Popup A
  const togglePopupB = () => {
    setIsPopupBOpen(!isPopupBOpen);
    setIsPopupAOpen(false); // ปิด Popup A เมื่อเปิด Popup B
  };

  return (
    <></>
  );
}

export default PopupExample2;
