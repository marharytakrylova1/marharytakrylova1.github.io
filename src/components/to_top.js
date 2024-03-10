import * as React from 'react';
import to_top from '../images/to_top.png';

export default function ToTop({ bg="transparent", invert=false }) {
  const isBrowser = typeof window !== "undefined"

  function handleTop() {
    if (!isBrowser) return false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className={`to-top hover:cursor-pointer bg-${bg}`}>
      <a onClick={handleTop}>
        <img src={to_top} alt="Back to top" className={`mx-auto w-8 transition-all duration-200 transform hover:scale-105 ${invert && "invert"}`} />
      </a>
    </div>
  );
}