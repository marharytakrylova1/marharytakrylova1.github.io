import * as React from 'react';

export default function Aura() {
    return (
        <div className="relative h-screen -z-10">
            {/* Add aura background */}
            <div className="absolute bg-aura-purple h-[25%] w-[15%] left-[25%] top-[40%] transform -translate-y-1/2 blur-[80px] bg-opacity-20" />
            <div className="absolute bg-aura-purple h-[40%] w-[40%] left-[50%] top-[45%] transform -translate-y-1/2 blur-[100px] bg-opacity-20" />
            <div className="absolute bg-aura-blue h-[30%] w-[50%] left-[15%] top-[30%] transform -rotate-12 blur-[80px] bg-opacity-20" />

            {/* Add black dots */}
            {/* <div className="absolute bg-black h-[5px] w-[5px] left-[37%] top-[20%] rounded-full" />
            <div className="absolute bg-black h-[7px] w-[7px] left-[33%] top-[30%] rounded-full" />
            <div className="absolute bg-black h-[10px] w-[10px] left-[30%] top-[65%] rounded-full" />
            <div className="absolute bg-black h-[3px] w-[3px] left-[65%] top-[15%] rounded-full" />
            <div className="absolute bg-black h-[4px] w-[4px] left-[60%] top-[35%] rounded-full" />
            <div className="absolute bg-black h-[6px] w-[6px] left-[75%] top-[40%] rounded-full" />
            <div className="absolute bg-black h-[5px] w-[5px] left-[70%] top-[70%] rounded-full" /> */}
        </div>
    );
}