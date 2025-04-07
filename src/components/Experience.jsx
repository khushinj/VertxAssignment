import React from 'react';

export default function Experience() {
    const experiences = ['Company 1', 'Company 2', 'Company 3'];

    return (
        <div className="border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Experience</h3>
            <h1 className="text-5xl font-bold">03</h1>

            {experiences.map((company, index) => (
                <div key={index} className="flex items-center gap-4">
                    <div className="bg-white w-10 h-10 rounded-sm" />
                    <p className="font-semibold">{company}</p>
                    <div className="ml-auto">
                        <h5 className="text-sm">View Profile</h5>
                    </div>
                </div>
            ))}
        </div>
    );
}
