import React from 'react';
import Card from '../crad';
import '../card.css';

const fullcards = [
    {
        name: 'ตำนานศิษย์พี่เจ้าปฐพี',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/60d40b1e182559001b7b1719/61fbc8969mwBlcOM.jpeg',
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
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/66793deac2ae43001c09913d/669f656f3ufOdRZX.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'ปลดล็อคระบบอัพพลังไร้ขอบเขต',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/6698c7be28dd6b001cc17e1c/66ac6d1dTMtaeVLw.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'ซูเปอร์ดอกเตอร์แห่งห้องพยาบาล',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/653b8f937d802b001ccea7ef/653b94a1DVY0fway.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'ระบบแหวนสุดโกงสร้างตำนานในสองโลก',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/5bbb4e5dfe2aa50028100f70/622ef7239mOtuB4f.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'บ้านนี้โชคดีมีลูกสาวเป็นหมอดูอัฉริยะแห่งลัทธิเต๋า',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/5fa1371e45a191001bb860f6/5fa138ebGYQbcGS1.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'วาดชีวิต ลิขิตชะตา #เกิดใหม่ครั้งหน้า ขอข้าเป็นนางเอก',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/64b6694b0edd99001dd37213/64b66b4bRMSeq2Pu.jpeg',
        views: '12345',
        like: '1003',
    },
    {
        name: 'เสน่หาชั่วกัลป์',
        imgUrl: 'https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/62f90b5e408c12001caa7cb5/633540b1ApPZB4z3.jpeg',
        views: '12345',
        like: '1003',
    }
];

const CardList2: React.FC = () => {
    return (
        <div className='card-list'>
            {fullcards.map((card, index) => (
                <Card key={index} card={card} />
            ))}
        </div>
    );
};

export default CardList2;
