import React from 'react';
import Card from '../crad';
import '../card.css';

const fullcards = [
    {
        name: 'ฝืนชะตาท้าสามภพ',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/5af5493da866493bc8e4cde3/5f4df23arKpWreUG.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'จอมเทพโอสถ',
        imgUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.fictionlog/books/5839e018eff3972bd6e7d919/584c3621448PVrFJ.jpg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'ฟู่เยี่ยน สาวน้อยเนตรสวรรค์ (นิยายแปล)',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/5b1f774659a37064e11e0875/5f4e1cecyc8nyILi.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'เมื่อสุดยอดนักฆ่ามาเป็นหนุ่มออฟฟิศ',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/5b1f774659a37064e11e0875/5f4e1cecyc8nyILi.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'ปลดล็อคระบบอัพพลังไร้ขอบเขต',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/59c9f4709546f862257d4d38/5f4f4eb1bOiLnZXl.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'เซียนคีย์บอร์ด',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/5a61fb2e87f8a701dcd6d207/6359a22cPrX6FUGp.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'ระบบแหวนสุดโกงสร้างตำนานในสองโลก',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/646f0c6165727b001d86663b/65fbecf5aI15cAnp.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'บ้านนี้โชคดีมีลูกสาวเป็นหมอดูอัฉริยะแห่งลัทธิเต๋า',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/6698c1b8a2d127001ce14d1e/66ac6d6bQJ1LOG1e.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'ผมย้อนอดีตมาเปลี่ยนชะตายุค 80 (นิยายแปล)',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/66178eeec51323001c3c08b0/66178ffaiqW0Pk8X.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'ผู้พิทักษ์รัตติกาลแห่งต้าฟ่ง',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/61e0df9f727d71001ca5d819/621cd023vXb6rpv0.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'เส้นทางสู่หมอดูผู้เกรียงไกรของเด็กน้อยจอมตะกละ',
        imgUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.fictionlog/books/5993e873a6a71b44731f62cf/5998ff0aLNlSwsqR.jpg',
        views: '12345',
        like: '1003',
    }
];

const CardList5: React.FC = () => {
    return (
        <div className='card-list'>
            {fullcards.map((card, index) => (
                <Card key={index} card={card} />
            ))}
        </div>
    );
};

export default CardList5;
