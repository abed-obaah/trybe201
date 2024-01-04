import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionItems = [
    {
      title: 'Who are we?',
      content:
        "Welcome to our tech community! We're a group of tech enthusiasts who are passionate about driving innovation and solving problems in the world of technology.",
    },
    {
      title: 'Our Mission',
      content:
        "Our esteemed tech community is driven by a noble mission - to educate and empower over 300,000 African youth, enabling them to excel in the tech industry",
    },
    {
      title: 'Our vision',
      content:
        "With a resolute vision, we aim to forge the creation of more than 30 pioneering companies by 2030, catalyzing economic growth and technological advancement across the continent",
    },
    {
      title: 'Why join us?',
      content:
        "Looking to join a tech company thats tackling the technological innobation gap in Africa? join us and be part of the solution! At our tech community, we're passionate about using  technology to revolutionize different sector in Africa faced with challenges.",
    },
    // {
    //   title: 'Who are we?',
    //   content:
    //     "Welcome to our tech community! We're a group of tech enthusiasts who are passionate about driving innovation and solving problems in the world of technology.",
    // },
    // {
    //   title: 'Who are we?',
    //   content:
    //     "Welcome to our tech community! We're a group of tech enthusiasts who are passionate about driving innovation and solving problems in the world of technology.",
    // },
    // Add more items as needed
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="m-2 space-y-2">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col gap-2 rounded-lg bg-white p-5 text-black shadow-md max-w-[800px]"
            tabIndex={index + 1}
          >
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.title}</span>
              <ChevronDownIcon
                className={`h-5 w-5 transition-transform transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all ${
                activeIndex === index
                  ? 'max-h-screen opacity-100 duration-1000'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
