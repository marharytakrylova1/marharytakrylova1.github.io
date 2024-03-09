import * as React from 'react';

export default function Aura({ width=100, height=100, deg=0, border=false, zIndex=-10 }) {
    return (
        <div className={`relative ${border && "border-4"}`} style={{width: `${width}px`, height: `${height}px`, transform: `rotate(${deg}deg)`, zIndex: zIndex}}>
            {/* Add aura background */}
            <div className={`absolute bg-aura-purple w-[70%] h-[45%] left-[35%] top-[40%] transform rotate-[30deg] -translate-y-1/2 -translate-x-1/2 blur-[80px] bg-opacity-20`} />
            <div className={`absolute bg-aura-blue left-[45%] right-[15%] bottom-[45%] top-[15%] transform -rotate-12 blur-[80px] bg-opacity-20`} />
        </div>
    );
}