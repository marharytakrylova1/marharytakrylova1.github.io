import * as React from 'react';
import to_top from '../images/to_top.png';

export default function ToTop({ bg="transparent", invert=false }) {
  return (
    <div className={`to-top hover:cursor-pointer bg-${bg}`}>
      <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src={to_top} alt="Back to top" className={`mx-auto w-8 transition-all duration-200 transform hover:scale-105 ${invert && "invert"}`} />
      </a>
    </div>
  );
}