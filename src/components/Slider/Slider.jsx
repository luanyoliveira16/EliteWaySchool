import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css'
import './Slider.css';
import Elite1 from '../../assets/image/elite1.jpg';
import Elite2 from '../../assets/image/img2.jpg';
import Elite3 from '../../assets/image/img3.jpg';

const Slider = () => {
  return (
   
 
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Elite1} alt={"Elite1"} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Elite2} alt={"Elite2"}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={Elite3} alt={"Elite3"}/>
        </SwiperSlide>
      
      
     
      </Swiper>
    </>
 
  )
}

export default Slider