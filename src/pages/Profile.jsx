import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FoundedCompanies from '../components/FoundedCompanies';
import ProfileInfo from '../components/ProfileInfo';
import Experience from '../components/Experience';

export default function Profile({ setActiveMenu }) {
  return (
    <div className='h-screen bg-black w-screen overflow-hidden sm:mb-0 mb-14'>
      <Header keyword={'Profile'} />
      <div className="flex flex-col md:flex-row h-[calc(100vh-60px)]">
        <Sidebar activeMenu="Profile" setActiveMenu={setActiveMenu} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex gap-4 md:gap-6 min-w-max border-b border-gray-700 mb-6 text-lg">
              <h5 className="px-4 py-2 text-white border-b-2 border-white font-semibold text-center md:text-left whitespace-nowrap">
                Overview
              </h5>
              <h5 className="px-4 py-2 text-gray-500 cursor-not-allowed text-center md:text-left whitespace-nowrap">
                Portfolio
              </h5>
              <h5 className="px-4 py-2 text-gray-500 cursor-not-allowed text-center md:text-left whitespace-nowrap">
                Experience
              </h5>
              <h5 className="px-4 py-2 text-gray-500 cursor-not-allowed text-center md:text-left whitespace-nowrap">
                Media
              </h5>
              <div className="md:ml-auto text-gray-500 text-center sm:pt-0 pt-2 whitespace-nowrap">
                <span className="block md:hidden">Reports</span>
                <span className="hidden md:block">More</span>
              </div>
            </div>
          </div>


          <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">Overview</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center border border-neutral-800 rounded-2xl mb-7">
            <ProfileInfo />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <FoundedCompanies />
            <Experience />
          </div>

        </main>
      </div>


    </div>
  )
}
