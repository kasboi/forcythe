import { useEffect, useState } from 'react';

const IndividualStory = ({ heading, paragraph, span, img, position }) => {
  useEffect(() => {
    const paragraphElement = document.querySelector('.story-paragraph');
    const words = paragraphElement.textContent.split(' ');

    paragraphElement.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(' ');

    const wordElements = document.querySelectorAll('.word');
    wordElements.forEach((word, index) => {
      setTimeout(() => {
        word.style.opacity = 1;
      }, index * 100);
    });

    setTimeout(() => {
      document.querySelector('.story-span').style.opacity = 1;
    }, 3000);
  }, [heading, paragraph, span]);

  return (
    <div
      className={`bg-blue-950/50 flex sm:flex-col justify-between gap-4 px-6 py-6 rounded-3xl w-[50%] 2xl:w-[65%] xl:w-[75%] md:w-[100%] mt-5 relative ${position} lg:left-0`}
      style={{ minHeight: '300px' }}
    >
      <div className="flex flex-col gap-6">
        <h3 className="story-heading">{heading}</h3>
        <p className="story-paragraph mb-auto">{paragraph}</p>
        <span className="story-span">{span}</span>
      </div>
      <img src={img} alt="story image" />
    </div>
  );
};

export default IndividualStory;
