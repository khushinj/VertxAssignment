import React from "react";
import globe from '../assets/globe.webp';

const countries = [
  { name: "India", top: "60%", left: "65%", color: "bg-purple-700", ring: "ring-purple-500/50" },
  { name: "USA", top: "35%", left: "20%", color: "bg-orange-600", ring: "ring-orange-400/50" },
  { name: "Canada", top: "25%", left: "25%", color: "bg-yellow-400", ring: "ring-yellow-300/50" },
  { name: "UAE", top: "55%", left: "50%", color: "bg-green-600", ring: "ring-green-400/50" },
];

export default function Demographics() {
  return (
    <div className="border border-[#1D1D1D] p-4 md:p-6 rounded-xl text-white w-full max-w-4xl mx-auto">
      <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center md:text-left">
        Demographics
      </h2>


      <div className="relative rounded-lg aspect-[4/3] md:aspect-[16/9] w-full mb-6 overflow-hidden">
        <img
          src={globe}
          alt="World Map"
          className="w-full h-full object-cover opacity-20"
          style={{ clipPath: 'inset(0px 0px 80px 0px)' }}
        />


        {countries.map((country, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 border rounded-3xl p-[6px]"
            style={{ top: country.top, left: country.left }}
          >
            <div className={`w-2 h-2 rounded-full ${country.color} ${country.ring}`}></div>
          </div>
        ))}


        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-4 bg-[#000000aa] rounded-3xl border border-white/20 px-4 py-2 backdrop-blur-md">
          {countries.map((country, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${country.color}`}></div>
              <span className="text-sm">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
