import React from 'react';
import Course from './course';

const Contact = ({ styles }) => {
  return (
    <div className="text-gray-100 px-4 md:px-8 py-12">
      <div
        className="max-w-screen-xl mt-24 px-4 md:px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
      <div className='flex items-center justify-center flex-wrap bg-gray-100'>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
      </div>
      </div>
    </div>
  )
}

export default Contact