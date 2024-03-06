import * as React from 'react';
import to_top from '../images/to_top.png';

export default function ToTop() {
  return (
    <div className="to-top hover:cursor-pointer">
      <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src={to_top} alt="Back to top" className='mx-auto w-8' />
      </a>
    </div>
  );
}