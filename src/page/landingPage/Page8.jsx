import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import dog from '../../image/Page8/dog.png';
import ian from '../../image/Page8/ian.png';
import xin from '../../image/Page8/xin.png';
import stark from '../../image/Page8/stark.png';
import team from '../../image/Page8/team.png';
import SwirlImage from '../../image/Page8/swirl.png';

export default function Page8(props) {
  const { isMobile } = props;
  return (
    <div className="h-full w-full">
      <div style={{
        position: 'relative',
        top: '0',
        height: '100%',
      }}
      >
        <h1
          style={{
            position: 'relative',
            top: isMobile ? '12%' : '5%',
            width: '100%',
            textShadow: '1px 2px rgba(0,0,0,0.5)',
          }}
          className={`text-white font-aldo text-center ${isMobile ? 'text-4xl' : 'text-6xl'}`}
        >
          Our Team
        </h1>
        {
          isMobile ? (
            <>
              <div style={{
                display: 'block',
                position: 'absolute',
                top: '25%',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
                zIndex: '1000',
              }}
              >
                <Swiper slidesPerView="1.25">
                  <SwiperSlide>
                    <img
                      style={{
                        padding: '10px',
                      }}
                      src={stark}
                      alt="stark"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      style={{
                        padding: '10px',
                      }}
                      src={ian}
                      alt="ian"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      style={{
                        padding: '10px',
                      }}
                      src={xin}
                      alt="xin"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      style={{
                        padding: '15px',
                        marginLeft: '10px',
                      }}
                      src={dog}
                      alt="dog"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </>
          )
            : (
              <div style={{
                display: 'block',
                position: 'absolute',
                top: '12%',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
                zIndex: '1000',
              }}
              >
                <img
                  style={{
                    position: 'relative',
                    top: '1.5rem',
                    width: '65%',
                    margin: 'auto',
                    zIndex: '1',
                  }}
                  src={team}
                  alt="team"
                />
                <img
                  style={{
                    position: 'relative',
                    top: '2rem',
                    width: '15%',
                    margin: 'auto',
                    zIndex: '1',
                  }}
                  src={dog}
                  alt="dog"
                />
              </div>
            )
        }
        {isMobile ? null : (
          <img
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              height: '100vh',
              zIndex: '0',
            }}
            src={SwirlImage}
            alt="swirl"
          />
        )}
      </div>
    </div>
  );
}
