import React from 'react';
import Card from '../crad';
import '../card.css';

const fullcards = [
    {
        name: 'ฝืนชะตาท้าสามภพ',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/669b7b504aa1ea001b3127d8/66a233d13m9gmoQM.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'จอมเทพโอสถ',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/5fd709d7900071001bcde581/5ff6eda98NfLzSXT.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'ฟู่เยี่ยน สาวน้อยเนตรสวรรค์ (นิยายแปล)',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/66aaebdca5f59d001c62f63c/66aaecfawo8DIFuK.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'เมื่อสุดยอดนักฆ่ามาเป็นหนุ่มออฟฟิศ',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/6661884a6671e0001cbc17bf/666193cbP0vtEoxD.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'ปลดล็อคระบบอัพพลังไร้ขอบเขต',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/66a8955d53f595001c16c9b8/66a898c0UzkZ3S1E.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'เซียนคีย์บอร์ด',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/614c1f1ddb22cf001cbe0e55/6192208aBy6WoSao.jpeg',
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
        name: 'ย้อนเวลามาเป็นภรรยาท่านนายพลสุดโหดในยุค 70',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/66ace1ad757f3d001ce5ae1f/66ace2adZ36qsEOI.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'เส้นทางสู่หมอดูผู้เกรียงไกรของเด็กน้อยจอมตะกละ',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/66acd5d4a5f59d001c62f79b/66acd6bdNQDcceYA.jpeg',
        views: '12345',
        like: '1003',
    }
];

const CardList6: React.FC = () => {
    return (
        <div className='card-list'>
            {fullcards.map((card, index) => (
                <Card key={index} card={card} />
            ))}
        </div>
    );
};

export default CardList6;
