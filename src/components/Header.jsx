import React, { useState } from 'react';
import logo from '../assets/vertx logo.png';
import { MoreVertical } from 'lucide-react';
import profile from '../assets/profile_img.png';

export default function Header({ keyword = "Analytics" }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex fixed items-center justify-between px-4 py-2 border-b-2 border-[#1D1D1D] bg-black relative pt-4 w-full z-50">

      {/* Left Side - Desktop shows logo, Mobile shows profile */}
      <div className="flex items-center gap-4">
        {/* Mobile: Profile */}
        <img src={profile} alt="Profile" className="h-8 rounded-full block md:hidden" />
        {/* Desktop: Logo */}
        <img src={logo} alt="Logo" className="h-10 rounded-3xl hidden md:block" />

        <h3 className="text-white text-lg font-semibold hidden md:block">Vertxlabs, Inc</h3>
        <h6 className="text-white text-lg hidden md:block border-l border-[#333] pl-4">{keyword}</h6>
      </div>

      {/* Mobile Center: Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {/* Right Section - Desktop */}
      <div className="hidden md:flex items-center gap-8 text-white">
        <h6 className="text-lg px-3 border-e-2 border-[#1D1D1D]">Activity</h6>
        <h6 className="text-lg px-3">Log out</h6>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <h3 onClick={() => setShowMenu(!showMenu)}>
          <MoreVertical className="text-white" />
        </h3>

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="absolute top-full right-4 mt-2 bg-[#111] border border-[#333] rounded-lg text-white p-2 space-y-2 z-50 w-40 shadow-lg">
            <h6 className="cursor-pointer hover:text-gray-300">Activity</h6>
            <h6 className="cursor-pointer hover:text-gray-300">Log out</h6>
          </div>
        )}
      </div>
    </div>
  );
}
