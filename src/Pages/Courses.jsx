import { useState } from 'react'
import { Dialog } from '@headlessui/react'
// import {

//   XMarkIcon,
// } from '@heroicons/react/24/outline'
import Banner from '../Components/Banner'
import logo from '../assets/trybe horizontal - blue-bg.png'
import imagePeople from '../assets/Group 109.png'
import Footer from '../Components/Footer'
import Cards from './components/Cards'
import { FaAlignJustify } from "react-icons/fa";
import { IoClose } from "react-icons/io5";





const navigation = [
  { name: 'Home', href: '/', current:false },
  { name: 'Mentorship', href: '/Mentorship', current:false},
  { name: 'Courses', href: '/Courses', current:true },
  { name: 'Blog', href: '/Blog', current:false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Courses() {
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

      <div className="relative isolate sm:pt-14 px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

             {/* Adjusted layout for smaller screens */}
      <div className="relative px-6 pt-14 lg:px-8">
        <div className="lg:hidden mt-14">
          <img
            className="mx-auto w-full max-w-screen-lg"
            src={imagePeople}
            alt="App Screenshot"
          />
           <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="mt-10 max-w-lg text-4xl font-normal  tracking-tight text-gray-900 sm:text-6xl">
                Learn new <span className='text-indigo-900'>Tech</span> skill with trybe 201
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Learning is a remarkable journey, and being guided by the most skilled professionals amplifies its impact. The mentors and lead instructors at Trybe201 are dedicated to ensuring your internship becomes an extraordinary and unforgettable learning adventure.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Learning today
                </a>
              </div>
            </div>
        </div>

        <div className="relative lg:px-6 lg:pt-1 lg:lg:px-8">
  {/* Hidden on smaller screens */}
  <div className="hidden lg:block mx-auto max-w-7xl px-3 py-14 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-18 lg:py-10">
    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
      <h1 className="mt-10 max-w-3xl text-xl font-normal tracking-tight  text-gray-900 sm:text-6xl">
      Learn new <span className='text-indigo-900'>Tech</span> skill with trybe 201
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
      Learning is a remarkable journey, and being guided by the most skilled professionals amplifies its impact. The mentors and lead instructors at Trybe201 are dedicated to ensuring your internship becomes an extraordinary and unforgettable learning adventure.
      </p>
      <div className="mt-10 flex items-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Start Learning today
        </a>
      </div>
    </div>
    <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
      <img src={imagePeople} className="mx-auto w-[32.875rem] max-w-full drop-shadow-xl" alt="" />
    </div>
  </div>

  {/* Visible on smaller screens */}
  
</div>

      </div>
      <div className="mx-auto mt-20 mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">In-Demand Tech skills</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Whether you are seeking career advice, skill development, or personal growth. Trybe201 brings you access to world-class mentors who can guide you effectively
          </p>
        </div>
        <Cards/>
      </div>
           
            <Footer/>
    </div>
  )
}
