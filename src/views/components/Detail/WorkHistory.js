import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const WorkHistory = () => {
    return (
        <div className="bg-[#ffffff15] rounded-xl p-4 h-[500px] md:h-full overflow-scroll overflow-x-hidden">
            <div className="bg-[#ffffff15] rounded-xl p-2 relative">
                <div className="flex items-center cursor-pointer bg-orange-600 p-1 px-5 top-4 left-4 rounded-xl absolute z-10" onClick={() => window.open("http://9sseafood.com/", "_blank")}>
                    <p className="text-xs text-center text-lime-50 font-medium italic mr-1">9s Seafood</p>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                >
                    <SwiperSlide><img src="/images/works/9s/1.png" alt="9sseafood_1" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/9s/2.png" alt="9sseafood_2" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/9s/3.png" alt="9sseafood_3" className="rounded-xl" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="rounded-xl p-2 relative mt-2">
                <div className="flex items-center cursor-pointer bg-rose-600 p-1 top-4 left-4 px-5 rounded-xl absolute z-10" onClick={() => window.open("https://lusion.co/", "_blank")}>
                    <p className="text-xs text-center text-lime-50 font-medium italic mr-1">Lusion</p>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                >
                    <SwiperSlide><img src="/images/works/lusion/1.png" alt="lusion_1" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/lusion/2.png" alt="lusion_2" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/lusion/3.png" alt="lusion_3" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/lusion/4.png" alt="lusion_4" className="rounded-xl" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="bg-[#ffffff15] rounded-xl p-2 relative mt-2">
                <div className="flex items-center cursor-pointer bg-lime-600 p-1 px-5 top-4 left-4 rounded-xl absolute z-10" onClick={() => window.open("https://fastswap.finance/#/", "_blank")}>
                    <p className="text-xs text-center text-lime-50 font-medium italic mr-1">fastswap</p>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                >
                    <SwiperSlide><img src="/images/works/fastswap/1.png" alt="fastswap_1" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/fastswap/2.png" alt="fastswap_2" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/fastswap/3.png" alt="fastswap_3" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/fastswap/4.png" alt="fastswap_4" className="rounded-xl" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="rounded-xl p-2 relative mt-2">
                <div className="flex items-center cursor-pointer bg-slate-600 p-1 top-4 left-4 px-5 rounded-xl absolute z-10" onClick={() => window.open("http://formation.fi/", "_blank")}>
                    <p className="text-xs text-center text-lime-50 font-medium italic mr-1">formation finance</p>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                >
                    <SwiperSlide><img src="/images/works/formation/1.png" alt="formation_1" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/formation/2.png" alt="formation_2" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/formation/3.png" alt="formation_3" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/formation/4.png" alt="formation_4" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/formation/5.png" alt="formation_5" className="rounded-xl" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="bg-[#ffffff15] rounded-xl p-2 relative mt-2">
                <div className="flex items-center cursor-pointer bg-blue-500 p-1 px-5 top-4 left-4 rounded-xl absolute z-10" onClick={() => window.open("https://app.croxswap.com/", "_blank")}>
                    <p className="text-xs text-center text-lime-50 font-medium italic mr-1">croxswap</p>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                >
                    <SwiperSlide><img src="/images/works/crox/1.png" alt="croxswap_1" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/crox/2.png" alt="croxswap_2" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/crox/3.png" alt="croxswap_3" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/crox/4.png" alt="croxswap_4" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/crox/5.png" alt="croxswap_5" className="rounded-xl" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="rounded-xl p-2 relative mt-2">
                <div className="flex items-center cursor-pointer bg-stone-600 p-1 top-4 left-4 px-5 rounded-xl absolute z-10" onClick={() => window.open("https://www.theuncanny.io/", "_blank")}>
                    <p className="text-xs text-center text-lime-50 font-medium italic mr-1">The Uncanny Country Club</p>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                >
                    <SwiperSlide><img src="/images/works/uncanny/1.png" alt="uncanny_1" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/uncanny/2.png" alt="uncanny_2" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/uncanny/3.png" alt="uncanny_3" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/uncanny/4.png" alt="uncanny_4" className="rounded-xl" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="bg-[#ffffff15] rounded-xl p-2 relative mt-2">
                <div className="flex items-center cursor-pointer bg-purple-600 p-1 top-4 left-4 px-5 rounded-xl absolute z-10" onClick={() => window.open("https://terraspaces.io/", "_blank")}>
                    <p className="text-xs text-center text-lime-50 font-medium italic mr-1">Terraspaces</p>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                >
                    <SwiperSlide><img src="/images/works/terraspace/1.png" alt="terraspace_1" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/terraspace/2.png" alt="terraspace_2" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src="/images/works/terraspace/3.png" alt="terraspace_3" className="rounded-xl" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default WorkHistory