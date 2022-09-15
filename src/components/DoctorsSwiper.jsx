import React, { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import AxiosInstance from "../Requests/AxiosInstance";
import { t } from "i18next";
function DoctorsSwiper() {
  const [SwiperData, setSwiperData] = useState([])
  useEffect(() => {
    AxiosInstance.get('landing_page/users').then(Response => {
      setSwiperData(Response.data.data)
    }).catch(Error => {
      console.log(Error);
    }
    )
  }, [])

  return (
    <div className="doctors">
      <div className="container swiper-wrapper">
        <div className="swiper" dir="ltr">
          {/* <!-- Additional required wrapper --> */}
          <Swiper
            className="swiper-wrapper"
            navigation={true}
            modules={[Navigation]}
            slidesPerView={3}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 1
              },
              // when window width is >= 640px
              995: {
                slidesPerView: 2,
              },
              1124: {
                slidesPerView: 3,
              },
            }}
            loop={true}
          >
            {SwiperData.map((item) => {
              return (
                <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center" key={item.id}>
                  <div
                    style={{
                      backgroundImage: `url(${item.photo})`,
                    }}
                    className="card-container"
                  >
                    <div className="card-info">
                      <h3 className="doctor_name">{item.name}</h3>
                      <h4 className="doctor_speciality">{item.specialty}</h4>
                      <p className="bio_container">
                        {item.bio}
                      </p>
                    </div>
                    <div className="book-btn">
                      <button onClick={() => window.open(`https://heallocare.com/${localStorage.LANGUAGE}/ajax/actor/profile/${item.id}`)}>
                        {t(`book`)}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default DoctorsSwiper;
