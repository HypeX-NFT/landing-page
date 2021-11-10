import React from 'react';
import CardImage from '../../image/Page2/card2.png';
import SwirlImage from '../../image/Page2/swirl.png';
import '../../css/animation.css';

export default function Page2(props) {
  const { isMobile } = props;
  return (
    <div className="h-full w-full">
      <div className="relative top-0 right-0 h-full">
        <div
          style={{
            top: isMobile ? '9%' : '20%',
          }}
          className={`absolute h-1/2 z-10 ${isMobile ? 'w-full text-center' : 'w-2/5 left-1/2 pr-1 mr-10'}`}
        >
          <div
            style={{
              textShadow: '1px 2px rgba(0,0,0,0.5)',
            }}
            className={`font-aldo ${isMobile ? 'text-3xl' : 'text-6xl 2xl:text-8xl'} mb-4`}
          >
            <div className="mx-auto my-0">
              <p className="text-white inline">
                NFTs for
                {' '}
              </p>
              <p className="text-hypex-purple inline">
                real-world
              </p>

            </div>
            <div className="mx-auto my-0">
              <p className="text-white inline">
                sneakers
              </p>
            </div>
          </div>
          <div className={`img ${isMobile ? 'text-center' : ''}`}>
            <img
              className={`${isMobile ? 'hover mt-1 mx-auto w-3/5' : 'hidden'}`}
              src={CardImage}
              alt="card"
            />
          </div>
          <div
            style={{ textShadow: '1px 1px rgba(0,0,0,0.5)' }}
            className={`text-white m-auto font-body z-20 ${isMobile ? 'text-sm w-7/10 text-left p-5' : 'text-2xl 2xl:text-4xl'}`}
          >
            <p>
              Everything in HypeX Metaverse will have a physical copy in the real world.
            </p>
            <br />
            <p>
              Users can trade/collect NFTs to redeem the physical sneaker.
            </p>
            <br />
            <p>
              It removes the authentication and delivery processes, thus, increasing the liquidity of the sneaker market.
            </p>
          </div>
        </div>
        <img
          style={{
            top: '18%',
            left: '12%',
          }}
          className={isMobile ? 'hidden' : 'hover absolute h-3/5 z-10'}
          src={CardImage}
          alt="card"
        />
        {isMobile ? null : (
          <img
            className="z-0 h-full left-0 top-o absolute"
            src={SwirlImage}
            alt="swirl"
          />
        )}
      </div>
    </div>
  );
}
