import React from 'react';
import { Briefcase } from 'lucide-react';
import vertexLogo from '../assets/profileLogo.png';

export default function FoundedCompanies() {
    return (
        <div className="border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Founded Companies</h3>
            <h1 className="text-5xl font-bold">02</h1>

            <div className="flex items-center gap-4">
                <img src={vertexLogo} alt="Vertx" className="w-10 h-10" />
                <div>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold">Vertx</p>
                        <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">CEO</span>
                    </div>
                    <p className="text-xs text-gray-400">Founded in 2025. in <span className="font-semibold">Fintech</span>.</p>
                </div>
                <div className="ml-auto">
                    <h5 className="text-sm">View Profile</h5>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <Briefcase size={40} />
                <div>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold">Company</p>
                        <span className="text-xs bg-blue-700 text-white px-2 py-0.5 rounded-full">PROPRIETOR</span>
                    </div>
                    <p className="text-xs text-gray-400">Details/information<br />like acquired /exit/m&a</p>
                </div>
                <div className="ml-auto">
                    <h5 className="text-sm">View Profile</h5>
                </div>
            </div>
        </div>
    );
}
