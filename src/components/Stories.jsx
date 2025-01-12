import { useEffect, useState } from 'react';

const Stories = () => {
  const [curImg, setCurImg] = useState(0);
  const intervalTime = 4000; // Interval time in milliseconds
  const totalImages = 5; // Total number of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurImg((prevImg) => (prevImg + 1) % totalImages);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="border-blue-700 border-2 rounded-full grid grid-cols-5 justify-between overflow-hidden">
        <div
          className={`flex justify-center gap-2 py-5 ${
            curImg === 0 ? 'bg-blue-950' : ''
          }`}
        >
          <img className="h-7" src="/starks_logo.svg" alt="starks logo" />
          <span>Starks</span>
        </div>
        <div
          className={`flex justify-center gap-2 py-5 ${
            curImg === 1 ? 'bg-blue-950' : ''
          }`}
        >
          <img
            className="h-7"
            src="/ExecutivePros_Logo.svg"
            alt="executive pros logo"
          />
        </div>
        <div
          className={`flex justify-center gap-2 py-5 ${
            curImg === 2 ? 'bg-blue-950' : ''
          }`}
        >
          <img className="h-7" src="/stacai_logo.svg" alt="stactai logo" />
        </div>
        <div
          className={`flex justify-center gap-2 py-5 ${
            curImg === 3 ? 'bg-blue-950' : ''
          }`}
        >
          <img className="h-7" src="/iwaria_logo.svg" alt="iwaria logo" />
        </div>
        <div
          className={`flex justify-center gap-2 py-5 ${
            curImg === 4 ? 'bg-blue-950' : ''
          }`}
        >
          <img
            className="h-7"
            src="/Beaupreneur_logo.svg"
            alt="beaupreneur logo"
          />
        </div>
      </div>
    </>
  );
};

export default Stories;
