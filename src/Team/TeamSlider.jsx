/* eslint-disable react/no-unescaped-entities */

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import useAlluser from "../Hooks/useAlluser";

export default function TeamSlider() {

  const [allUser] = useAlluser()
    const creatoruser = allUser?.filter((user)=> user.role === 'creator')
  console.log(creatoruser);
  return (
    <div className="px-4 mt-8">
   
      <Swiper
        slidesPerView={2} 
        spaceBetween={30}
        centeredSlides={true}
        centerInsufficientSlides={true}
        centeredSlidesBounds={true}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 3, 
            spaceBetween:30,
          },
        }}
      >
        {
          creatoruser?.map((user)=>{
          return  <SwiperSlide key={user._id} className="mx-auto">
            <div className="md:p-5 h-[200px] p-2 text-center bg-base-100 border rounded-lg md:h-[360px] md:w-[400px]">
              <img
                src={user?.photourl}
                className="rounded-lg object-cover w-full h-[100px] md:h-[200px] "
                alt=""
              />
              <h1 className="md:text-2xl text-sm font-bold mt-6">{user?.name}</h1>
              <div className="flex justify-center mt-5 gap-2 items-center">
                <img
                  src="https://i.postimg.cc/PxRsZjBy/fb.png"
                  className="md:w-[40px]  w-[20px] cursor-pointer"
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/gkPdKYxt/twitter.png"
                  className="md:w-[40px]  w-[20px] cursor-pointer"
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="md:w-[40px]  w-[20px] cursor-pointer"
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/qM8Bftfd/insta.png"
                  className="md:w-[40px]  w-[20px] cursor-pointer"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          })
        }
       

       

      
      
      </Swiper>
    </div>
  );
}
