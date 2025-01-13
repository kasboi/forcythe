import { useEffect, useState } from 'react';

const Plans = () => {
  const plans = [
    {
      title: 'Your vision is unique.',
      description:
        "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let's us shape it.",
      image: '/camera-man.svg',
    },
    {
      title: 'Crafting the blueprint for success',
      description:
        'Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.',
      image: '/plan-design.svg',
    },
    {
      title: 'Turning blueprints into reality.',
      description:
        'We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.',
      image: '/plan-develop.svg',
    },
    {
      title: 'Your launchpad to the market.',
      description:
        'Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.',
      image: '/plan-launch.svg',
    },
  ];
  const [curPlan, setCurPlan] = useState(0);

  useEffect(() => {
    const titleElement = document.querySelector('.plan-title');
    const descriptionElement = document.querySelector('.plan-description');

    const titleWords = titleElement.textContent.split(' ');
    const descriptionWords = descriptionElement.textContent.split(' ');

    titleElement.innerHTML = titleWords
      .map((word) => `<span class="word">${word}</span>`)
      .join(' ');

    descriptionElement.innerHTML = descriptionWords
      .map((word) => `<span class="word">${word}</span>`)
      .join(' ');

    const wordElements = document.querySelectorAll('.word');
    wordElements.forEach((word, index) => {
      word.style.opacity = 0;
      setTimeout(() => {
        word.style.opacity = 1;
        word.style.transition = 'opacity .75s';
      }, index * 25);
    });
  }, [curPlan]);

  return (
    <div className="flex md:flex-col justify-between items-center">
      <div className="basis-[50%] md:basis-[100%] md:w-full flex flex-col gap-6 items-start">
        <h2 className="text-4xl md:text-3xl mb-12 md:mb-8">
          From <span className="text-blue-400">Spark</span> to{' '}
          <span className="text-blue-400">Spotlight:</span> we take you every
          step of the way to success.
        </h2>
        <div className="py-4 px-4 rounded-full border-2 border-blue-300 self-stretch flex justify-between">
          <button
            className={`${
              curPlan === 0 ? 'bg-blue-200/90 text-black' : ''
            } py-3 px-12 md:py-2 md:px-6 sm:px-3.5 font-medium rounded-full`}
            onClick={() => setCurPlan(0)}
          >
            Idea
          </button>
          <button
            className={`${
              curPlan === 1 ? 'bg-blue-200/90 text-black' : ''
            } py-3 px-12 md:py-2 md:px-6 sm:px-3.5 font-medium rounded-full`}
            onClick={() => setCurPlan(1)}
          >
            Design
          </button>
          <button
            className={`${
              curPlan === 2 ? 'bg-blue-200/90 text-black' : ''
            } py-3 px-12 md:py-2 md:px-6 sm:px-3.5 font-medium rounded-full`}
            onClick={() => setCurPlan(2)}
          >
            Develop
          </button>
          <button
            className={`${
              curPlan === 3 ? 'bg-blue-200/90 text-black' : ''
            } py-3 px-12 md:py-2 md:px-6 sm:px-3.5 font-medium rounded-full`}
            onClick={() => setCurPlan(3)}
          >
            Launch
          </button>
        </div>
        <div className="mt-6">
          <h3 className="plan-title text-3xl mb-8">{plans[curPlan].title}</h3>
          <p className="plan-description text-lg text-gray-400 mb-4">
            {plans[curPlan].description}
          </p>
        </div>

        <button className="relative inline-grid grid-cols-1 text-black">
          <span className="bg-white py-2.5 px-5 rounded-full text-base font-semibold cursor-pointer relative z-10 transition-colors duration-300 hover:bg-blue-900 hover:text-white peer">
            Book a Call
          </span>
          <div className="border-2 border-dotted border-white w-full h-full rounded-full absolute left-[-8px] top-[6px] transition-colors duration-300 peer-hover:border-blue-900"></div>
        </button>
      </div>
      <div className="basis-[50%] md:flex md:justify-center">
        <img
          src={plans[curPlan].image}
          alt={plans[curPlan].title}
          className="w-[90%] lg:w-full md:w-[75%] h-[420px]"
        />
      </div>
    </div>
  );
};

export default Plans;
