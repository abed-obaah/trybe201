import { useState } from 'react'
import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import {
//   AcademicCapIcon,
//   CheckCircleIcon,
//   HandRaisedIcon,
//   RocketLaunchIcon,
//   SparklesIcon,
//   SunIcon,
//   UserGroupIcon,
// } from '@heroicons/react/20/solid'
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { RadioGroup } from '@headlessui/react'
import radio from '../assets/Ellipse 2.png'

import man from '../assets/man.png'

const settings = [
    {
      name: 'Skill Development and Empowerment',
      description:
        'Join Trybe201 to acquire valuable tech skills and knowledge. Our mission is to educate and empower African youth, ensuring you gain expertise in cutting-edge technologies.',
      icon: <MdOutlineRadioButtonChecked className="h-6 w-6 "  />, // Icon for the first option
    },
    {
      name: 'Mentorship Opportunities',
      description:
        'Our community fosters mentorship, allowing you to learn from experienced professionals and collaborate with like-minded peers, essential for your growth in the tech sector.',
      icon: <MdOutlineRadioButtonChecked className="h-6 w-6" />, // Icon for the second option
    },
    {
      name: 'Networking Opportunities',
      description:
        "At Trybe201, you'll be part of a vibrant community of tech enthusiasts, mentors, and industry experts. Joining us means gaining access to a network that can guide and support you.",
      icon: <MdOutlineRadioButtonChecked className="h-6 w-6" />, // Icon for the third option
    },
  ];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}






export default function AboutUs(){

    const [selected, setSelected] = useState(settings[1])

    return(
        <div className=" bg-blue-900 isolate -z-10 mt-32 sm:mt-40 w-full">
          <div className="pt-0 mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src={man}
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why choose us</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Looking to join a tech company that's tackling the technological innovation gap in Africa? 
                </p>
                <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-1"
        >
          {settings.map((setting, settingIdx) => (
            <li key={setting.name} className="relative flex items-start">
              <div className="flex-shrink-0">{setting.icon}</div>
              <div className="ml-3">
                <p className="text-2xl font-medium">{setting.name}</p>
                <p className="text-sm">{setting.description}</p>
              </div>
            </li>
          ))}
        </ul>
                <div className="mt-10 flex justify-evenly">
                        <button
                                type="button"
                                className="rounded-md bg-white text-indigo-500 px-8 py-2.5 text-sm font-semibold hover:text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                               Mentorship
                        </button>

                        <button
                        type="button"
                        className="rounded-md bg-white text-indigo-500 px-8 py-2.5 text-sm font-semibold hover:text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                           Courses
                        </button>

                  <button
                    type="button"
                    className="rounded-md bg-white text-indigo-500 px-8 py-2.5 text-sm font-semibold hover:text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                   Events
                </button>
                </div>
              </div>
            </div>
        </div>
</div>
    )
}