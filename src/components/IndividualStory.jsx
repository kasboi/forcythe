import { useEffect, useState } from 'react';

const IndividualStory = ({ heading, paragraph, span, img }) => {
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
      }, index * 200);
    });

    setTimeout(() => {
      document.querySelector('.story-span').style.opacity = 1;
    }, 3000);
  }, [heading, paragraph, span]);

  return (
    <div
      className="bg-blue-950/50 flex justify-between gap-4 px-6 py-6 rounded-3xl w-[50%] mt-5"
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
