import React from 'react';
import { ArrowRight } from 'lucide-react'; 

export default function InsightsBox() {
    const insights = [
        {
            label: "Founders",
            count: "7.4K",
            change: "+000%",
            hint: "(000)",
        },
        {
            label: "Investors",
            count: "6.09K",
            change: "+000%",
            hint: "(000)",
        },
    ];

    return (
        <div className="bg-black border border-[#1D1D1D] text-white rounded-xl lg:-ms-20 p-5 mt-6 w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-5">Insights</h2>

            {insights.map((item, index) => (
                <div key={index} className="mb-6">
                    <p className="text-sm text-gray-300 mb-1">{item.label}</p>
                    <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold">{item.count}</span>
                        <span className="text-green-500 text-sm">{item.change}</span>
                        <span className="text-gray-500 text-sm">{item.hint}</span>
                    </div>
                </div>
            ))}

            <hr className="border-gray-700 mb-3" />
            <div className="flex items-center justify-between text-sm text-white cursor-pointer hover:text-gray-300">
                <span>View detailed insights</span>
                <ArrowRight className="w-4 h-4" />
            </div>
        </div>
    );
}
