import React, { useState } from 'react';

const CategoryNav: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('#cat1'); // Set default active link

  const handleLinkClick = (href: string) => {
    setActiveLink(href); // Update active link
  };

  return (
    <div className='category'>
      <a
        href='#cat1'
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
        <span id="category">นิยายใหม่</span>
      </a>
      <a
        href='#cat3'
        onClick={() => handleLinkClick('#cat3')}
        style={{ color: activeLink === '#cat3' ? 'yellow' : '#FFF' , fontWeight: activeLink === '#cat3' ? 'bold' : 'normal' }}
      >
        <span id="category">สุดฮิต</span>
      </a>
      <a
        href='#cat4'
        onClick={() => handleLinkClick('#cat4')}
        style={{ color: activeLink === '#cat4' ? 'yellow' : '#FFF' , fontWeight: activeLink === '#cat4' ? 'bold' : 'normal' }}
      >
        <span id="category">โรแมนติก</span>
      </a>
      <a
        href='#cat5'
        onClick={() => handleLinkClick('#cat5')}
        style={{ color: activeLink === '#cat5' ? 'yellow' : '#FFF' , fontWeight: activeLink === '#cat5' ? 'bold' : 'normal' }}
      >
        <span id="category">แฟนตาซี</span>
      </a>
      <a
        href='#cat6'
        onClick={() => handleLinkClick('#cat6')}
        style={{ color: activeLink === '#cat6' ? 'yellow' : '#FFF' , fontWeight: activeLink === '#cat6' ? 'bold' : 'normal' }}
      >
        <span id="category">สืบสวน</span>
      </a>
    </div>
  );
};

export default CategoryNav;
