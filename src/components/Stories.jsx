import { useEffect, useState } from 'react';
import IndividualStory from './IndividualStory';

const Stories = () => {
  const [curImg, setCurImg] = useState(0);
  const intervalTime = 10000;
  const totalImages = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurImg((prevImg) => (prevImg + 1) % totalImages);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [curImg]);

  const userStories = [
    {
      heading: 'Starks Associate',
      paragraph:
        "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They've become more than a service provider; they're a trusted ally.",
      span: 'John, Management',
      img: '/john.svg',
      position: 'left-[0]',
    },
    {
      heading: 'Executive Pros',
      paragraph:
        'The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!',
      span: 'Testimony, Co-founder',
      img: 'executive-pro-ceo.svg',
      position: 'left-[20%]',
    },
    {
      heading: 'Stactai',
      paragraph:
        'Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.',
      span: 'Edwin, Former CTO',
      img: '/edwin.svg',
      position: 'left-[35%]',
    },
    {
      heading: 'Iwaria',
      paragraph:
        'The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.',
      span: 'Iwaria, Founder',
      img: '/iwaria-founder.svg',
      position: 'left-[40%]',
    },
    {
      heading: 'Beaupreneur',
      paragraph:
        'I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.',
      span: 'Christiana, Founder',
      img: '/christina.svg',
      position: 'left-[50%]',
    },
  ];

  const currentStory = userStories[curImg];

  return (
    <div className="relative">
      <div
        className="w-full overflow-x-scroll scrollbar-hidden"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="border-blue-700 border-2 rounded-full grid grid-cols-5 items-center min-w-max overflow-hidden">
          <div
            className={`flex min-w-fit justify-center gap-2 py-5 cursor-pointer ${
              curImg === 0 ? 'bg-blue-950' : ''
            }`}
            onClick={() => setCurImg(0)}
          >
            <img className="h-7" src="/starks_logo.svg" alt="starks logo" />
            <span>Starks</span>
          </div>
          <div
            className={`flex min-w-fit justify-center gap-2 py-5 cursor-pointer ${
              curImg === 1 ? 'bg-blue-950' : ''
            }`}
            onClick={() => setCurImg(1)}
          >
            <img
              className="h-7"
              src="/ExecutivePros_Logo.svg"
              alt="executive pros logo"
            />
          </div>
          <div
            className={`flex min-w-fit justify-center gap-2 py-5 cursor-pointer ${
              curImg === 2 ? 'bg-blue-950' : ''
            }`}
            onClick={() => setCurImg(2)}
          >
            <img className="h-7" src="/stacai_logo.svg" alt="stactai logo" />
          </div>
          <div
            className={`flex min-w-fit justify-center gap-2 py-5 cursor-pointer ${
              curImg === 3 ? 'bg-blue-950' : ''
            }`}
            onClick={() => setCurImg(3)}
          >
            <img className="h-7" src="/iwaria_logo.svg" alt="iwaria logo" />
          </div>
          <div
            className={`flex min-w-fit justify-center gap-2 py-5 cursor-pointer ${
              curImg === 4 ? 'bg-blue-950' : ''
            }`}
            onClick={() => setCurImg(4)}
          >
            <img
              className="h-7"
              src="/Beaupreneur_logo.svg"
              alt="beaupreneur logo"
            />
          </div>
        </div>
      </div>
      <IndividualStory
        key={curImg}
        heading={currentStory.heading}
        paragraph={currentStory.paragraph}
        span={currentStory.span}
        img={currentStory.img}
        position={currentStory.position}
      />
    </div>
  );
};

export default Stories;
