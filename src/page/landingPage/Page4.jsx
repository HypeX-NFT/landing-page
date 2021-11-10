import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, {
  Pagination,
} from 'swiper';
import cardLeft from '../../image/Page4/cardLeft.png';
import cardRight from '../../image/Page4/cardRight.png';
import cardMiddle from '../../image/Page4/cardMiddle.png';
import SwirlImage from '../../image/Page4/swirl.png';
import BannerImage from '../../image/Page4/banner.png';

SwiperCore.use([Pagination]);

export default function Page4(props) {
  const { isMobile } = props;
  return (
    <div className="h-full w-full">
      <div style={{
        position: 'relative',
        top: '0',
        right: '0',
        height: '100%',
      }}
      >
        <div
          style={{
            position: 'absolute',
            top: isMobile ? '10%' : '7%',
            zIndex: '100',
            width: '100%',
          }}
        >
          <div className="font-aldo text-center">
            <div
              style={{
                margin: '0 auto',
                textShadow: '1px 2px rgba(0,0,0,0.5)',
              }}
              className={`${isMobile ? 'text-2xl' : 'text-6xl'}`}
            >
              <p
                style={{
                  display: 'inline',
                }}
                className="text-white"
              >
                Metaverse for
                {' '}
              </p>
              <p
                style={{
                  display: 'inline',
                }}
                className="text-hypex-purple"
              >
                Sneaker lovers
              </p>
            </div>
            <p className="text-white text-2xl text-center">Benefits of the NFT</p>
          </div>
        </div>
        {
          isMobile ? (
            <div style={{
              display: 'block',
              position: 'absolute',
              top: '20%',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
              zIndex: '1000',
            }}
            >
              <Swiper slidesPerView="1.2">
                <SwiperSlide>
                  <img
                    style={{
                      padding: '25px',
                    }}
                    src={cardLeft}
                    alt="left"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{
                      padding: '20px',
                    }}
                    src={cardMiddle}
                    alt="middle"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{
                      padding: '20px',
                    }}
                    src={cardRight}
                    alt="right"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          )
            : (
              <img
                style={{
                  position: 'relative',
                  top: '25%',
                  height: '58%',
                  margin: 'auto',
                  zIndex: '1',
                  display: isMobile ? 'none' : 'block',
                }}
                src={BannerImage}
                alt="BannerImage"
              />
            )
        }
        {isMobile ? null : (
          <img
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              zIndex: '0',
              width: '100%',
            }}
            src={SwirlImage}
            alt="swirl"
          />
        )}

      </div>

    </div>
  );
}
