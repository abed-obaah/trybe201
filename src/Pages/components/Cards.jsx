// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

import { Link } from "react-router-dom";

const people = [
  {
    name: 'Course Title',
    title: 'Web Development',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    level:"Beginners",
    Duration:"30",
    Beginners:"Beginners",
    Days:"30",
    Bonus:"Free Acess to Mentorship",
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Course Title :',
    title: 'App Development',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    level:"Beginners",
    Duration:"30",
    Beginners:"Beginners",
    Days:"30",
    Bonus:"Free Acess to Mentorship",
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // {
  //   name: 'Course Title :',
  //   title: 'Web Development',
  //   role: 'Admin',
  //   email: 'janecooper@example.com',
  //   telephone: '+1-202-555-0170',
  //   level:"Beginners",
  //   Duration:"30",
  //   Beginners:"Beginners",
  //   Days:"30",
  //   Bonus:"Free Acess to Mentorship",
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'Course Title :',
  //   title: 'Web Development',
  //   role: 'Admin',
  //   email: 'janecooper@example.com',
  //   telephone: '+1-202-555-0170',
  //   level:"Beginners",
  //   Duration:"30",
  //   Beginners:"Beginners",
  //   Days:"30",
  //   Bonus:"Free Acess to Mentorship",
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'Course Title :',
  //   title: 'Web Development',
  //   role: 'Admin',
  //   email: 'janecooper@example.com',
  //   telephone: '+1-202-555-0170',
  //   level:"Beginners",
  //   Duration:"30",
  //   Beginners:"Beginners",
  //   Days:"30",
  //   Bonus:"Free Acess to Mentorship",
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'Course Title :',
  //   title: 'Web Development',
  //   role: 'Admin',
  //   email: 'janecooper@example.com',
  //   telephone: '+1-202-555-0170',
  //   level:"Beginners",
  //   Duration:"30",
  //   Beginners:"Beginners",
  //   Days:"30",
  //   Bonus:"Free Acess to Mentorship",
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  {
    name: 'Course Title :',
    title: 'Graphics Design',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    level:"Beginners",
    Duration:"30",
    Beginners:"Beginners",
    Days:"30",
    Bonus:"Free Acess to Mentorship",
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Course Title :',
    title: '3D Animation',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    level:"Beginners",
    Duration:"30",
    Beginners:"Beginners",
    Days:"30",
    Bonus:"Free Acess to Mentorship",
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // {
  //   name: 'Course Title :',
  //   title: 'Web Development',
  //   role: 'Admin',
  //   email: 'janecooper@example.com',
  //   telephone: '+1-202-555-0170',
  //   level:"Beginners",
  //   Duration:"30",
  //   Beginners:"30",
  //   Days:"30",
  //   Bonus:"Free Acess to Mentorship",
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'Course Title :',
  //   title: 'Web Development',
  //   role: 'Admin',
  //   email: 'janecooper@example.com',
  //   telephone: '+1-202-555-0170',
  //   level:"Beginners",
  //   Duration:"30",
  //   Beginners:"Beginners",
  //   Days:"30",
  //   Bonus:"Free Acess to Mentorship",
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'Course Title :',
  //   title: 'Web Development',
  //   role: 'Admin',
  //   email: 'janecooper@example.com',
  //   telephone: '+1-202-555-0170',
  //   level:"Beginners",
  //   Duration:"30",
  //   Beginners:"Beginners",
  //   Days:"30",
  //   Bonus:"Free Acess to Mentorship",
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'Course Title :',
  //   title: 'Web Development',
  //   role: 'Admin',
  //   email: 'janecooper@example.com',
  //   telephone: '+1-202-555-0170',
  //   level:"Beginners",
  //   Duration:"30",
  //   Beginners:"Beginners",
  //   Days:"30",
  //   Bonus:"Free Acess to Mentorship",
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'Course Title :',
  //   title: 'Web Development',
  //   role: 'Admin',
  //   email: 'janecooper@example.com',
  //   telephone: '+1-202-555-0170',
  //   level:"Beginners",
  //   Duration:"30",
  //   Beginners:"Beginners",
  //   Days:"30",
  //   Bonus:"Free Acess to Mentorship",
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'Course Title :',
  //   title: 'Web Development',
  //   role: 'Admin',
  //   email: 'janecooper@example.com',
  //   telephone: '+1-202-555-0170',
  //   level:"Beginners",
  //   Duration:"30",
  //   Beginners:"Beginners",
  //   Days:"30",
  //   Bonus:"Free Acess to Mentorship",
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'Course Title :',
  //   title: 'Web Development',
  //   role: 'Admin',
  //   email: 'janecooper@example.com',
  //   telephone: '+1-202-555-0170',
  //   level:"Beginners",
  //   Duration:"30",
  //   Beginners:"Beginners",
  //   Days:"30",
  //   Bonus:"Free Acess to Mentorship",
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  // {
  //   name: 'Course Title :',
  //   title: 'Web Development',
  //   role: 'Admin',
  //   email: 'janecooper@example.com',
  //   telephone: '+1-202-555-0170',
  //   level:"Beginners",
  //   Duration:"30",
  //   Beginners:"Beginners",
  //   Days:"30",
  //   Bonus:"Free Acess to Mentorship",
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  // },
  
]

export default function Cards() {
    const cardColors = ['bg-custom-green', 'bg-custom-brown', 'bg-custom-yellow', 'bg-custom-blue', 'bg-custom-purple'];

  return (
    <ul role="list" className="grid mt-5 mb-20 grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((person,index) => (
        <Link to="/Course_Details" key={person.email}>
<li
          key={person.email}
           className={`col-span-1 flex flex-col divide-gray-200 rounded-lg ${cardColors[index % cardColors.length]} shadow-md`}
        >
            <span className="inline-flex w-32 items-center rounded-full bg-gray-50 m-3 px-2  text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                     Basic : free Access
            </span>
          <div className="p-2">
          
            {/* <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" /> */}
            <h3 className=" text-md font-medium text-white">{person.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col">
              <dt className="sr-only">Title</dt>
              <dd className="text-2xl text-white font-bold">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <div>
            <div className="mt-5 flex justify-between divide-gray-200">
                <div>
                            <span className="text-gray-200 text-sm">levels:</span>
                        <div className="">
                        <div className=" text-lg leading-8 text-white  font-semibold">
                        {person.level}
                            </div>
                        </div>
                </div>
            
                <div>
                            <span className="text-gray-200 text-sm ">Duration:</span>
                        <div className="">
                        <div className="mt-2text-lg leading-8 text-white  font-semibold font-montserrat">
                        {person.Duration} Days
                            </div>
                        </div>
                </div>
            </div>
          </div>
            </dl>
          </div>
          <div>
            <div className="-mt-px divide-gray-200 ml-2">
            <span className="text-gray-200 text-sm">Bonus:</span>
              <div className="">
              <div className=" text-md leading-8 text-white  font-semibold">
              {person.Bonus}
                </div>
              </div>
            </div>
          </div>
        </li>
        </Link>
        
      ))}
    </ul>
  )
}
