import React from 'react';
import Airmag from '../../image/Page1/airmag.png';
import SwirlImage from '../../image/Page1/swirl.png';
import Button from '../../components/Button';
import SocialMediaBar from './SocialMediaBar';
import '../../css/animation.css';

export default function Page1(props) {
  const { isMobile } = props;
  return (
    <div className="h-full w-full">
      <div className="h-full relative top-0 right-0">
        <div
          style={{
            top: isMobile ? '25%' : '40%',
            left: isMobile ? '50%' : '10%',
            transform: isMobile ? 'translateX(-50%)' : 'none',
            textShadow: '1px 2px rgba(0,0,0,0.5)',
            width: 'fit-content',
          }}
          className="z-1 absolute"
        >
          <div className={`text-white font-aldo ${isMobile ? 'text-4xl' : 'text-8xl'} mb-4`}>
            <p className="text-white">
              Metaverse for
            </p>
            <p className="text-hypex-purple">
              Sneaker Lovers
            </p>
          </div>
          <div
            className={isMobile ? 'w-f flex items-center justify-center' : null}
          >
            <Button text="COMING SOON" action={null} isMobile />
          </div>

        </div>
        <img
          style={{
            top: isMobile ? '57%' : '30%',
            right: isMobile ? '7%' : '10%',
            height: isMobile ? '25%' : '55%',
          }}
          className="hover absolute z-10"
          src={Airmag}
          alt="glove"
        />
        {isMobile ? null : (
          <img
            className="z-0 absolute top-0 right-0 h-full"
            src={SwirlImage}
            alt="swirl"
          />
        )}
        <div
          style={{
            top: '55%',
            transform: 'translateY(-50%)',
            right: isMobile ? '92%' : '1%',
          }}
          className="align-middle z-10 h-auto absolute"
        >
          {isMobile ? <SocialMediaBar isMobile /> : null}
        </div>
      </div>
    </div>
  );
}
