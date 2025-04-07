import React from 'react';

const countries = [
    { name: 'India', percent: 40, flag: 'https://flagcdn.com/w40/in.png', color: 'bg-orange-500' },
    { name: 'USA', percent: 25, flag: 'https://flagcdn.com/w40/us.png', color: 'bg-blue-500' },
    { name: 'Canada', percent: 10, flag: 'https://flagcdn.com/w40/ca.png', color: 'bg-red-400' },
    { name: 'UAE', percent: 7, flag: 'https://flagcdn.com/w40/ae.png', color: 'bg-green-500' },
];

export default function CountryInsights() {
    return (
        <div className="space-y-3 grid grid-cols-1 w-10/12 mx-auto">
            {countries.map((country, index) => (
                <div key={index} className="flex items-center gap-3">
                    <img src={country.flag} alt={country.name} className="w-6 h-4 object-cover" />
                    <div className="flex-1">
                        <div className="flex justify-between text-sm">
                            <span>{country.name}</span>
                            <span>{country.percent}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded">
                            <div
                                className={`h-2 ${country.color} rounded`}
                                style={{ width: `${country.percent}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
