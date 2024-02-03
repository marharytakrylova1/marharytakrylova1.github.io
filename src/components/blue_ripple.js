import * as React from "react"

export default function BlueRipple({ rotate=false, bg="white" }) {
    return (
        <div style={{ zIndex: "-1", backgroundColor: bg }} className={`relative w-full -mt-2 ${rotate && "transform rotate-180"}`}>
            <svg id="visual" viewBox="0 0 1920 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 10L26.7 10.7C53.3 11.3 106.7 12.7 160 13.3C213.3 14 266.7 14 320 12.8C373.3 11.7 426.7 9.3 480 12.8C533.3 16.3 586.7 25.7 640 28.8C693.3 32 746.7 29 800 27.5C853.3 26 906.7 26 960 27.2C1013.3 28.3 1066.7 30.7 1120 29.8C1173.3 29 1226.7 25 1280 20.7C1333.3 16.3 1386.7 11.7 1440 11.8C1493.3 12 1546.7 17 1600 20.8C1653.3 24.7 1706.7 27.3 1760 29.3C1813.3 31.3 1866.7 32.7 1893.3 33.3L1920 34L1920 101L1893.3 101C1866.7 101 1813.3 101 1760 101C1706.7 101 1653.3 101 1600 101C1546.7 101 1493.3 101 1440 101C1386.7 101 1333.3 101 1280 101C1226.7 101 1173.3 101 1120 101C1066.7 101 1013.3 101 960 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#d5daeb"></path><path d="M0 40L26.7 40.7C53.3 41.3 106.7 42.7 160 38.8C213.3 35 266.7 26 320 21C373.3 16 426.7 15 480 16.5C533.3 18 586.7 22 640 25.3C693.3 28.7 746.7 31.3 800 32.2C853.3 33 906.7 32 960 33.5C1013.3 35 1066.7 39 1120 36.5C1173.3 34 1226.7 25 1280 21.5C1333.3 18 1386.7 20 1440 22.8C1493.3 25.7 1546.7 29.3 1600 31.2C1653.3 33 1706.7 33 1760 31.3C1813.3 29.7 1866.7 26.3 1893.3 24.7L1920 23L1920 101L1893.3 101C1866.7 101 1813.3 101 1760 101C1706.7 101 1653.3 101 1600 101C1546.7 101 1493.3 101 1440 101C1386.7 101 1333.3 101 1280 101C1226.7 101 1173.3 101 1120 101C1066.7 101 1013.3 101 960 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#b3bddb"></path><path d="M0 45L26.7 44C53.3 43 106.7 41 160 42.2C213.3 43.3 266.7 47.7 320 47.2C373.3 46.7 426.7 41.3 480 41.2C533.3 41 586.7 46 640 45.8C693.3 45.7 746.7 40.3 800 37.2C853.3 34 906.7 33 960 36.2C1013.3 39.3 1066.7 46.7 1120 47.3C1173.3 48 1226.7 42 1280 39C1333.3 36 1386.7 36 1440 40C1493.3 44 1546.7 52 1600 52C1653.3 52 1706.7 44 1760 43C1813.3 42 1866.7 48 1893.3 51L1920 54L1920 101L1893.3 101C1866.7 101 1813.3 101 1760 101C1706.7 101 1653.3 101 1600 101C1546.7 101 1493.3 101 1440 101C1386.7 101 1333.3 101 1280 101C1226.7 101 1173.3 101 1120 101C1066.7 101 1013.3 101 960 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#91a1cb"></path><path d="M0 63L26.7 62.7C53.3 62.3 106.7 61.7 160 59.7C213.3 57.7 266.7 54.3 320 52C373.3 49.7 426.7 48.3 480 50C533.3 51.7 586.7 56.3 640 58.8C693.3 61.3 746.7 61.7 800 61.2C853.3 60.7 906.7 59.3 960 57.8C1013.3 56.3 1066.7 54.7 1120 52C1173.3 49.3 1226.7 45.7 1280 46.8C1333.3 48 1386.7 54 1440 57.2C1493.3 60.3 1546.7 60.7 1600 62.2C1653.3 63.7 1706.7 66.3 1760 67.7C1813.3 69 1866.7 69 1893.3 69L1920 69L1920 101L1893.3 101C1866.7 101 1813.3 101 1760 101C1706.7 101 1653.3 101 1600 101C1546.7 101 1493.3 101 1440 101C1386.7 101 1333.3 101 1280 101C1226.7 101 1173.3 101 1120 101C1066.7 101 1013.3 101 960 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#6e86bb"></path><path d="M0 81L26.7 81.7C53.3 82.3 106.7 83.7 160 83.3C213.3 83 266.7 81 320 76.8C373.3 72.7 426.7 66.3 480 67.5C533.3 68.7 586.7 77.3 640 77.2C693.3 77 746.7 68 800 65.8C853.3 63.7 906.7 68.3 960 69.5C1013.3 70.7 1066.7 68.3 1120 67.3C1173.3 66.3 1226.7 66.7 1280 65.5C1333.3 64.3 1386.7 61.7 1440 62.2C1493.3 62.7 1546.7 66.3 1600 69C1653.3 71.7 1706.7 73.3 1760 73.8C1813.3 74.3 1866.7 73.7 1893.3 73.3L1920 73L1920 101L1893.3 101C1866.7 101 1813.3 101 1760 101C1706.7 101 1653.3 101 1600 101C1546.7 101 1493.3 101 1440 101C1386.7 101 1333.3 101 1280 101C1226.7 101 1173.3 101 1120 101C1066.7 101 1013.3 101 960 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#476cab"></path><path d="M0 77L26.7 78C53.3 79 106.7 81 160 83C213.3 85 266.7 87 320 89.3C373.3 91.7 426.7 94.3 480 91.3C533.3 88.3 586.7 79.7 640 76.2C693.3 72.7 746.7 74.3 800 74.3C853.3 74.3 906.7 72.7 960 72.5C1013.3 72.3 1066.7 73.7 1120 74.2C1173.3 74.7 1226.7 74.3 1280 74C1333.3 73.7 1386.7 73.3 1440 74.3C1493.3 75.3 1546.7 77.7 1600 81C1653.3 84.3 1706.7 88.7 1760 88.7C1813.3 88.7 1866.7 84.3 1893.3 82.2L1920 80L1920 101L1893.3 101C1866.7 101 1813.3 101 1760 101C1706.7 101 1653.3 101 1600 101C1546.7 101 1493.3 101 1440 101C1386.7 101 1333.3 101 1280 101C1226.7 101 1173.3 101 1120 101C1066.7 101 1013.3 101 960 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#00539b"></path></svg>
        </div>
    );
}