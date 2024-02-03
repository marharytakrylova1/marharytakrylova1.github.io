import * as React from "react";

export default function PurpleRipple({ rotate=false, bg="white" }) {
    return (
        <div style={{ zIndex: "-1", backgroundColor: bg }} className={`relative w-full -mt-2 ${rotate && "transform rotate-180"}`}>
            <svg id="visual" viewBox="0 0 1920 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 18L26.7 18.3C53.3 18.7 106.7 19.3 160 21C213.3 22.7 266.7 25.3 320 22.5C373.3 19.7 426.7 11.3 480 9.7C533.3 8 586.7 13 640 16.7C693.3 20.3 746.7 22.7 800 23.5C853.3 24.3 906.7 23.7 960 21.3C1013.3 19 1066.7 15 1120 14.5C1173.3 14 1226.7 17 1280 19.5C1333.3 22 1386.7 24 1440 22C1493.3 20 1546.7 14 1600 13C1653.3 12 1706.7 16 1760 14.7C1813.3 13.3 1866.7 6.7 1893.3 3.3L1920 0L1920 101L1893.3 101C1866.7 101 1813.3 101 1760 101C1706.7 101 1653.3 101 1600 101C1546.7 101 1493.3 101 1440 101C1386.7 101 1333.3 101 1280 101C1226.7 101 1173.3 101 1120 101C1066.7 101 1013.3 101 960 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#e1daeb"></path><path d="M0 31L26.7 30.8C53.3 30.7 106.7 30.3 160 29.8C213.3 29.3 266.7 28.7 320 26.7C373.3 24.7 426.7 21.3 480 21.5C533.3 21.7 586.7 25.3 640 27.3C693.3 29.3 746.7 29.7 800 27.8C853.3 26 906.7 22 960 21.3C1013.3 20.7 1066.7 23.3 1120 27.8C1173.3 32.3 1226.7 38.7 1280 40.7C1333.3 42.7 1386.7 40.3 1440 40.5C1493.3 40.7 1546.7 43.3 1600 40.5C1653.3 37.7 1706.7 29.3 1760 24.7C1813.3 20 1866.7 19 1893.3 18.5L1920 18L1920 101L1893.3 101C1866.7 101 1813.3 101 1760 101C1706.7 101 1653.3 101 1600 101C1546.7 101 1493.3 101 1440 101C1386.7 101 1333.3 101 1280 101C1226.7 101 1173.3 101 1120 101C1066.7 101 1013.3 101 960 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#c9bddb"></path><path d="M0 36L26.7 36.5C53.3 37 106.7 38 160 36.7C213.3 35.3 266.7 31.7 320 33C373.3 34.3 426.7 40.7 480 45.5C533.3 50.3 586.7 53.7 640 52.5C693.3 51.3 746.7 45.7 800 43.8C853.3 42 906.7 44 960 43.7C1013.3 43.3 1066.7 40.7 1120 41.5C1173.3 42.3 1226.7 46.7 1280 46.3C1333.3 46 1386.7 41 1440 40.5C1493.3 40 1546.7 44 1600 42.8C1653.3 41.7 1706.7 35.3 1760 35.7C1813.3 36 1866.7 43 1893.3 46.5L1920 50L1920 101L1893.3 101C1866.7 101 1813.3 101 1760 101C1706.7 101 1653.3 101 1600 101C1546.7 101 1493.3 101 1440 101C1386.7 101 1333.3 101 1280 101C1226.7 101 1173.3 101 1120 101C1066.7 101 1013.3 101 960 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#b1a1cc"></path><path d="M0 56L26.7 55.5C53.3 55 106.7 54 160 56.2C213.3 58.3 266.7 63.7 320 63.2C373.3 62.7 426.7 56.3 480 55.5C533.3 54.7 586.7 59.3 640 60.8C693.3 62.3 746.7 60.7 800 58.3C853.3 56 906.7 53 960 52.3C1013.3 51.7 1066.7 53.3 1120 55.3C1173.3 57.3 1226.7 59.7 1280 58.7C1333.3 57.7 1386.7 53.3 1440 54.3C1493.3 55.3 1546.7 61.7 1600 63C1653.3 64.3 1706.7 60.7 1760 57.5C1813.3 54.3 1866.7 51.7 1893.3 50.3L1920 49L1920 101L1893.3 101C1866.7 101 1813.3 101 1760 101C1706.7 101 1653.3 101 1600 101C1546.7 101 1493.3 101 1440 101C1386.7 101 1333.3 101 1280 101C1226.7 101 1173.3 101 1120 101C1066.7 101 1013.3 101 960 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#9985bc"></path><path d="M0 75L26.7 71.8C53.3 68.7 106.7 62.3 160 62.2C213.3 62 266.7 68 320 69.3C373.3 70.7 426.7 67.3 480 66.7C533.3 66 586.7 68 640 71.3C693.3 74.7 746.7 79.3 800 77.5C853.3 75.7 906.7 67.3 960 65C1013.3 62.7 1066.7 66.3 1120 70C1173.3 73.7 1226.7 77.3 1280 75.5C1333.3 73.7 1386.7 66.3 1440 66C1493.3 65.7 1546.7 72.3 1600 75.5C1653.3 78.7 1706.7 78.3 1760 78.5C1813.3 78.7 1866.7 79.3 1893.3 79.7L1920 80L1920 101L1893.3 101C1866.7 101 1813.3 101 1760 101C1706.7 101 1653.3 101 1600 101C1546.7 101 1493.3 101 1440 101C1386.7 101 1333.3 101 1280 101C1226.7 101 1173.3 101 1120 101C1066.7 101 1013.3 101 960 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#816aad"></path><path d="M0 84L26.7 84.7C53.3 85.3 106.7 86.7 160 86.3C213.3 86 266.7 84 320 83C373.3 82 426.7 82 480 80.2C533.3 78.3 586.7 74.7 640 74.3C693.3 74 746.7 77 800 77.7C853.3 78.3 906.7 76.7 960 75.3C1013.3 74 1066.7 73 1120 73.2C1173.3 73.3 1226.7 74.7 1280 77C1333.3 79.3 1386.7 82.7 1440 82C1493.3 81.3 1546.7 76.7 1600 75.8C1653.3 75 1706.7 78 1760 80.7C1813.3 83.3 1866.7 85.7 1893.3 86.8L1920 88L1920 101L1893.3 101C1866.7 101 1813.3 101 1760 101C1706.7 101 1653.3 101 1600 101C1546.7 101 1493.3 101 1440 101C1386.7 101 1333.3 101 1280 101C1226.7 101 1173.3 101 1120 101C1066.7 101 1013.3 101 960 101C906.7 101 853.3 101 800 101C746.7 101 693.3 101 640 101C586.7 101 533.3 101 480 101C426.7 101 373.3 101 320 101C266.7 101 213.3 101 160 101C106.7 101 53.3 101 26.7 101L0 101Z" fill="#68509d"></path></svg>
        </div>
    );
}