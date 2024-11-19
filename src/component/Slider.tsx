import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css';

interface Props {
onClick?: () => void
  images: string[];
  width:string
  height:string
  width2:string
  height2:string
 
 
}
const Slider:React.FC<Props>=({  images,onClick,width,height,width2,height2})=> {
  return (
    <Swiper
    spaceBetween={20}
    slidesPerView={1}
    navigation
  
    pagination={{ clickable: true , dynamicBullets: true }}
    scrollbar={{ draggable: true }}
    modules={[Navigation, Pagination, Scrollbar]}
  >
    {images.map((image, index) => (
          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: width2,
              height: height2,
            
            }}
           
            key={index}
          >
            <img
            onClick={onClick}
              src={image}
              alt={`Slide ${index}`}
              style={{ width:width, height: height, objectFit: 'contain',cursor:"pointer" }}
              
            />
          </SwiperSlide>
        ))}
  </Swiper>
  )
}

export default Slider
