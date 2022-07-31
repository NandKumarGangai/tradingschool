import React from 'react';
import Course from './course';

const Contact = ({ styles }) => {
  return (
    <div className="text-gray-100 px-4 md:px-8 py-12">
      <div
        className="max-w-screen-xl mt-24 px-0 md:px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className='flex items-center justify-center flex-wrap bg-gray-100'>
          <Course
            title={'Basics of stock market trading'}
            content={<ul className='list-disc p-4'>
              <li>{'In dept knowledge of demand and supply strategy.'}</li>
              <li>{'Advance treads analysis.'}</li>
              <li>{'Basic to advance concept of forex trading.'}</li>
              <li>{'Risk & money management.'}</li>
              <li>{'Traders & Investor’s psychology.'}</li>
              <li>{'Lectures on current market price action.'}</li>
            </ul>}
          ></Course>
          <Course
            title={'Mastering stock market trading'}
            content={<ul className='list-disc p-4'>
              <li>{'Why we need technical analysis.'}</li>
              <li>{'Candle sticks patters.'}</li>
              <li>{'Study on price action'}</li>
              <li>{'Multiple time frame analysis'}</li>
              <li>{'How to scan stocks in live market.'}</li>
              <li>{'Trend analysis'}</li>
              <li>{'Sector analysis'}</li>
              <li>{'Trading against the trend'}</li>
              <li>{'Trading indicators '}</li>
              <li>{'Market traps'}</li>
              <li>{'Risk management'}</li>
              <li>{'Trading psychology'}</li>
              <li>{'What is forex'}</li>
              <li>{'Basic of forex market'}</li>
              <li>{'How to trade forex '}</li>

            </ul>}
          >

          </Course>
          {/* <Course></Course>
        <Course></Course> */}
        </div>
      </div>
    </div>
  )
}

export default Contact