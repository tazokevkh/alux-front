import React, {ReactNode} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay, FreeMode, Navigation} from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

interface IProps {
  children: ReactNode[];
  spaceBetween?: number;
  slidesPerView?: number;
  className?: string;
}

function ScrollableSlider({
                            children,
                            spaceBetween = 8,
                            slidesPerView = 1,
                            className,
                          }: IProps) {

  console.log("children", children);
  return (
      <div className="w-full relative">
        <Swiper
            autoHeight={true}
            spaceBetween={spaceBetween}
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            // mousewheel={{ forceToAxis: true, sensitivity: 0.8 }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              bulletClass: "swiper-pagination-bullet custom-bullet",
              bulletActiveClass:
                  "swiper-pagination-bullet-active custom-bullet-active",
            }}
            className="w-full relative"
        >
          {React.Children.map(children, (child, index) => (
              <SwiperSlide key={`slide-${index}`} className={"!w-full"}>
                {child}
              </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination container BELOW the content */}
        <div className="custom-pagination !mt-[32px] flex justify-center"></div>

        <style jsx global>{`
            .custom-bullet {
                background: #d9d9d9;
                opacity: 1;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                margin: 0 4px !important;
                transition: all 0.3s ease;
            }

            .custom-bullet-active {
                background: #262322;
                transform: scale(1.2);
                width: 28px;
                height: 8px;
                border-radius: 8px;
            }
        `}</style>
      </div>
  );
}

export default ScrollableSlider;
