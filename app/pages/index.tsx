import React from 'react';
import { useRef } from 'react';
import { useQRCode } from 'react-hook-qrcode';
import Link from 'next/link';


const Sample = () => {

  const [inputRef] = useQRCode({
    text: '体温：36.6\n 最近の外出頻度 \n などなど',
    options: {
      level: 'M',
      margin: 7,
      scale: 1,
      width: 200,
      color: {
        dark: '#3FB811',
        light: '#DDDDDD',
      },
    },
  });
  return (
    <div>
        <h1>健康状態</h1>
        <canvas ref={inputRef} />
        <Link href="/other">
          <a>Back to Home</a>
        </Link>
    </div>
  );
}

export default Sample;
