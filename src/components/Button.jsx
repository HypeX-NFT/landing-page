/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Icon from '../image/button.png';

export default function Button({ text, action, isMobile }) {
  return (
    <div style={{
      position: 'relative',
      height: isMobile ? '50px' : '80px',
      width: isMobile ? '140px' : '255px',
    }}
    >
      <button
        style={{
          height: '100%',
          width: '100%',
        }}
        type="button"
        onClick={action}
      >
        <img
          style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            height: '100%',
            width: '100%',
            zIndex: '0',
          }}
          src={Icon}
          alt="button"
        />
        <p
          style={{
            position: 'relative',
            left: '50%',
            top: '0',
            transform: 'translate(-50%,0%)',
            zIndex: '1',
          }}
          className={`text-white font-aldo ${isMobile ? 'text-xl' : 'text-3xl'}`}
        >
          {text}
        </p>
      </button>
    </div>
  );
}
