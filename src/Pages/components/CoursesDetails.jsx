import { useState } from 'react'
import { Dialog } from '@headlessui/react'
// import {

//   XMarkIcon,
// } from '@heroicons/react/24/outline'
import Banner from '../../Components/Banner'
import logo from '../../assets/trybe horizontal - blue-bg.png'
// import imagePeople from '../assets/Group 109.png'
import Footer from '../../Components/Footer'
import Events from './Events'
import { FaAlignJustify } from "react-icons/fa";
import { IoClose } from "react-icons/io5";






const navigation = [
  { name: 'Home', href: '/', current:true },
  { name: 'Mentorship', href: '/Mentorship', current:false},
  { name: 'Courses', href: '/Courses', current:false },
  { name: 'Blog', href: '/Blog', current:false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CoursesDetails() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
       
      <header className="absolute inset-x-0 top-0 z-50">
      <Banner/>
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Trybe201</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <FaAlignJustify className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className={classNames(
                item.current
                  ? 'text-custom-blue'
                  : 'text-gray-900 hover:text-custom-blue',
                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
              )}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Our Community
              </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Trybe201</span>
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>

          <IoClose className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                     <a key={item.name} href={item.href} className={classNames(
                      item.current
                        ? 'text-custom-blue'
                        : 'text-gray-900 hover:text-custom-blue',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Our Community
              </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      

      <div className="relative isolate  pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
  className="relative left-[calc(100%-11rem)] aspect-[1155/678] w-full -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(100%-30rem)] sm:w-full"
  style={{
    clipPath:
      'polygon(74.1% 44.1%, 100% 61.6%, 107.5% 26.9%, 85.5% 0.1%, 180.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  }}
/>

        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="relative lg:-ml-72">
      <div className="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-56 px-4 py-1.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
        " // Conditionally add ml-72 for large screens
        placeholder="Search Events"
        required=""
      />
    </div>
        </div>
        
        <Events/>

      </div>
           
            <Footer/>
    </div>
  )
}
