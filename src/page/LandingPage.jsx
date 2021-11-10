import React from 'react';
import { isMobile } from 'react-device-detect';
import Icon from '../image/HypeXWhite.png';
import background from '../image/landingBG.png';
import mobileBG from '../image/mobileBG.png';
import LandingPageContent from './LandingPageContent';
import SocialMediaBar from './landingPage/SocialMediaBar';

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${isMobile ? mobileBG : background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="h-full w-full fixed overflow-hidden"
    >
      <div>
        <span>
          <img
            src={Icon}
            alt="icon"
            style={{
              left: isMobile ? '50%' : '3%',
              transform: 'translateX(-50%)',
              height: isMobile ? '8vh' : '10vh',
            }}
            className="overflow-auto z-10 absolute drop-shadow-icon top-0"
          />
        </span>
        <div
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            right: isMobile ? '92%' : '1%',
          }}
          className="align-middle z-10 h-auto absolute"
        >
          {isMobile ? null : <SocialMediaBar isMobile />}
        </div>
      </div>
      <LandingPageContent />
    </div>

  );
}
