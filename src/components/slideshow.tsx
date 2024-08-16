import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './slideshow.css'


function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img id='pic' src='https://4kwallpapers.com/images/walls/thumbs_3t/9292.jpg'/>
        <Carousel.Caption>
         
          <h3 id='hd' >ชีวิตที่แสนเหงา</h3>
          <p id='pd'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quas facilis unde nesciunt in voluptatum cumque, laudantium quaerat doloribus ipsam, dolorum similique odio ad molestiae vitae placeat commodi tempore provident.</p>
 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img id='pic' src='https://4kwallpapers.com/images/walls/thumbs_3t/9311.png'/>
        <Carousel.Caption>
          <h3 id='hd' >ชิตังเม รวย รวย รวย</h3>
          <p id='pd'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum dolorem quos dolores, beatae earum deleniti tenetur est soluta eum ipsum, eligendi quisquam ut eaque itaque inventore libero rem impedit culpa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img id='pic' src='https://4kwallpapers.com/images/walls/thumbs_3t/9254.jpg'/>
        <Carousel.Caption>
          <h3 id='hd' >อย่างสีเหลือง อีโต้!!</h3>
          <p id='pd'>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque cumque accusantium necessitatibus excepturi. Aspernatur voluptates non eos ad qui quis perferendis. Incidunt deleniti beatae quod hic enim veniam aliquam accusamus.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;