import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
  PhoneOutgoingIcon ,
  BookOpenIcon,
  GlobeIcon
} from '@heroicons/react/outline'
import LOGO from '../../assets/logo.png';

const solutions = [
  {
    name: 'About',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#about',
    icon: GlobeIcon,
  },
  {
    name: 'Courses',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#courses',
    icon: BookOpenIcon,
  },
  {
    name: 'Contact Us',
    description: "Connect with third-party tools that you're already using.",
    href: '#contact',
    icon: PhoneOutgoingIcon,
  }
]

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className='flex items-center justify-center'>
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={LOGO}
                alt="LOGO"
              />
              <span className="inline-block text-3xl">TradingStroke</span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </a>
            <a href="#courses" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Courses
            </a>
            <a href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact Us
            </a>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={LOGO}
                    alt="LOGO"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
