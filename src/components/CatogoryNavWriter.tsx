import React, { useState } from 'react';

const CategoryNavWriter: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('#cat1'); // Set default active link

  const handleLinkClick = (href: string) => {
    setActiveLink(href); // Update active link
  };

  return (
    <div className='category'>
      <a
        href='/'
        onClick={() => handleLinkClick('#cat1')}
        style={{ color: activeLink === '#cat1' ? 'yellow' : '#FFF' , fontWeight: activeLink === '#cat1' ? 'bold' : 'normal' }}
      >
        <span id="category">หน้าหลัก</span>
      </a>
      <a
        href='#cat2'
        onClick={() => handleLinkClick('#cat2')}
        style={{ color: activeLink === '#cat2' ? 'yellow' : '#FFF' , fontWeight: activeLink === '#cat2' ? 'bold' : 'normal' }}
      >
        <span id="category">งานเขียน</span>
      </a>
      <a
        href='#cat3'
        onClick={() => handleLinkClick('#cat3')}
        style={{ color: activeLink === '#cat3' ? 'yellow' : '#FFF' , fontWeight: activeLink === '#cat3' ? 'bold' : 'normal' }}
      >
        <span id="category">รายได้</span>
      </a>
      
    </div>
  );
};

export default CategoryNavWriter;
