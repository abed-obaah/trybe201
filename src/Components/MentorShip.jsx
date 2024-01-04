// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import { Switch } from '@headlessui/react'
import buttons from '../assets/Screenshot__418_-removebg-preview.png'


export default function Mentorship() {
    const [enabled, setEnabled] = useState(false)

    const people = [
    {
        name: 'Mentorship',
        title: 'Learn Web Development From Scratch',
        role: 'Admin',
        email: 'Abednego Obaah',
        telephone: '+1-202-555-0170',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: '',
        title: '100k',
        role: 'qAdmin',
        email: 'Trainees',
        telephone: 'q+1-202-555-0170',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Courses',
        title: 'Learn 3D Animation',
        role: 'wAdmin',
        email: 'Basic-Intermidiate-Advance',
        telephone: 'w+1-202-555-0170',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Events',
        title: 'Delta State Tech Week 2024',
        role: 'eAdmin',
        email: 'March 2024',
        telephone: 'e+1-202-555-0170',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: '',
        title: 'Learn Web Development From Scratch',
        role: 'rAdmin',
        email: '',
        telephone: 'r+1-202-555-0170',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
   
    {
        name: '',
        title: 'Learn Mobile App Development From Scratch',
        role: 'rAdmin',
        email: '',
        telephone: 'r+1-202-555-0170',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
   
    ]

    const cardColors = ['bg-custom-brown', 'bg-custom-purple', 'bg-custom-brown', 'bg-custom-green', 'bg-custom-yellow', ];
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

  return (
    <ul role="list" className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {people.map((person, index) => (
 <li
 key={person.email}
 className={`col-span-1 shadow rounded-lg ${cardColors[index]} ${
   index === 5 ? 'shadow' : 'shadow' // Remove shadow from the fifth card
 } ${
   index === 4 ? 'col-span-1' : ''
 }`}
>
    <div className="flex w-full items-center justify-between space-x-6 p-6 ">
      <div className="flex-1">
        <div className="flex items-center space-x-3 justify-between">
          <h3 className={`truncate text-md font-inter font-bold ${index === 1 ? 'text-white' : 'text-gray-600'}`}>
            {person.name}
          </h3>
          {index === 0 && (
           <Switch
           checked={enabled}
           onChange={setEnabled}
           className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
         >
           <span className="sr-only">Use setting</span>
           <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md" />
           <span
             aria-hidden="true"
             className={classNames(
               enabled ? 'bg-black' : 'bg-gray-200',
               'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
             )}
           />
           <span
             aria-hidden="true"
             className={classNames(
               enabled ? 'translate-x-5' : 'translate-x-0',
               'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out'
             )}
           />
         </Switch>
          )}
        </div>
        {index === 1 && (
          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="relative z-20 inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="relative z-10 inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="relative z-0 inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        )}
        
        <p className={`mt-${index === 1 ? '10' : index === 2 ? '6' : '4'} break-words text-2xl ${ index === 5 ? 'text-black font-bold text-2xl' : 'text-white font-bold text-2xl'}`}>
  {person.title}
</p>




      </div>
    </div>
    <div>
   
    <div className="-mt-6 ml-5 flex">
    <div className="flex w-0 flex-1">
      <a
        href={`mailto:${person.email}`}
        className="relative  inline-flex w-0 flex-1 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
      >
        {person.email}
      </a>
    </div>
  </div>
    </div>
   
  </li>
))}
    </ul>
  )
}
