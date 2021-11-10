import React from 'react';
import CardsImage from '../../image/Page3/card3.png';
import SwirlImage from '../../image/Page3/swirl.png';

export default function Page3(props) {
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
            top: isMobile ? '9%' : '27%',
            left: isMobile ? '' : '13%',
            zIndex: '1',
            width: isMobile ? '100%' : '35%',
            'text-align': isMobile ? 'center' : '',
          }}
        >
          <div
            style={{
              margin: '0 auto',
              textShadow: '1px 2px rgba(0,0,0,0.5)',
            }}
            className={`font-aldo ${isMobile ? 'text-3xl' : 'text-7xl'}`}
          >
            <p className="text-hypex-purple inline">
              FRACTIONALIZED
              {' '}
            </p>
            <p className="text-white inline">
              NFTs
            </p>
          </div>
          <br />
          <img
            style={{
              height: '90vw',
              zIndex: '1',
              display: isMobile ? 'block' : 'none',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            src={CardsImage}
            alt="cards"
          />
          <div style={{ textShadow: '1px 1px rgba(0,0,0,0.5)', 'text-align': isMobile ? 'left' : '', padding: isMobile ? '1rem' : '' }} className={`text-white ${isMobile ? 'text-sm' : 'text-2xl'} font-body `}>
            <p>Want to own a pair of Air Mag?</p>
            <br />
            <p> HypeX offers fractionalized NFTs of physical sneakers.</p>
            <br />
            <p>Users can spend 1/100 of the original price to own and wear in the HypeX metaverse.</p>
          </div>
        </div>
        {isMobile ? null : (
          <>
            <img
              style={{
                position: 'absolute',
                top: '10%',
                right: '7%',
                height: isMobile ? '25%' : '80vh',
                zIndex: '1',
              }}
              src={CardsImage}
              alt="cards"
            />
            <img
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                height: '120vh',
                zIndex: '0',
              }}
              src={SwirlImage}
              alt="swirl"
            />
          </>
        )}

      </div>

    </div>
  );
}
