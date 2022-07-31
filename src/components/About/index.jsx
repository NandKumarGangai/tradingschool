import React from 'react';

const About = ({ styles, content, title, thumbnail }) => {
  return (
    // <div className="bg-gray-800 text-gray-100 px-8 py-12">
      <div
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold leading-tight">{title}</h2>
            <div className="text-gray-700 mt-8">
              {/* Benefits of joining stock market classes */}
            </div>
          </div>
          <div className="mt-8 text-center">
            <img src={thumbnail} alt="" srcset="" className='w-full h-full' />
          </div>
        </div>
        <div className="flex items-center justify-center text-left">
          {content}
        </div>
      </div>
    // </div>
  )
}

export default About