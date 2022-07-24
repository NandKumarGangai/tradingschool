import React from 'react'

const Course = () => {
  return (
    <section class="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 w-2/5 m-3">
      <div class="h-full">
        <div class="max-w-xs mx-auto">
          <div class="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
            <a class="block focus:outline-none focus-visible:ring-2" href="#0">
              <figure class="relative h-0 pb-[56.25%] overflow-hidden">
                <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638284256/course-img_tf0g8c.png" width="320" height="180" alt="Course" />
              </figure>
            </a>
            <div class="flex-grow flex flex-col p-5">
              <div class="flex-grow">
                <header class="mb-3">
                  <a class="block focus:outline-none focus-visible:ring-2" href="#0">
                    <h3 class="text-[22px] text-gray-900 font-extrabold leading-snug">The Ultimate JavaScript Course</h3>
                  </a>
                </header>
                <div class="mb-8">
                  <p>The JavaScript course for everyone! Master JavaScript with projects, challenges and theory.</p>
                </div>
              </div>
              <div class="flex justify-end space-x-2">
                <a class="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2" href="#0">Cancel</a>
                <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500" href="#0">Preview</a>
                <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white" href="#0">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course