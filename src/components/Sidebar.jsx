import React, { useEffect, useState } from "react";
import profileImg from '../assets/profile_img.png';
import {
    LayoutDashboard,
    ChartNoAxesCombined,
    Earth,
    Bell,
    Waypoints,
    Plus,
} from "lucide-react";

export default function Sidebar({ setActiveMenu }) {
    const [isOpen, setIsOpen] = useState(true);

    const menuItems = [
        { name: "Dashboard", icon: <LayoutDashboard size={22} /> },
        { name: "Analytics", icon: <ChartNoAxesCombined size={22} />, active: true, link: "/" },
        { name: "Connect", icon: <Earth size={22} /> },
        { name: "Activity", icon: <Bell size={22} /> },
        { name: "Dealroom", icon: <Waypoints size={22} /> },
        { name: "Profile", icon: <Waypoints size={22} />, link: "/profile" },
        { name: "Settings", icon: <Waypoints size={22} /> },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className={`hidden md:flex h-screen bg-black text-white flex-col justify-between transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
                <div>
                    <div className="flex items-center justify-center py-4 fixed">
                        <img
                            src={profileImg}
                            alt="profile"
                            className="w-10 md:ms-5 h-10 rounded-full border-2 border-white cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    </div>

                    <ul className="space-y-4 px-6 font-semibold text-lg mt-6">
                        {menuItems.map((item, i) => {
                            const content = (
                                <div className={`flex items-center gap-3 px-10 py-1 cursor-pointer rounded hover:bg-gray-800 ms-4 ${item.active ? "text-white" : "text-gray-500"}`}>
                                    {isOpen && <span>{item.name}</span>}
                                </div>
                            );

                            return (
                                <li key={i} onClick={() => setActiveMenu(item.name)}>
                                    {content}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="p-4 border-t border-gray-800 flex justify-center">
                    <button className="text-white">
                        <Plus size={20} />
                    </button>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-black text-white flex justify-around items-center py-2 border-t border-gray-800 md:hidden z-50">
                {menuItems.slice(0, 5).map((item, index) => (
                    <div key={index} className={`flex flex-col items-center ${item.active ? "text-white" : "text-gray-500"}`}>
                        {item.icon}
                        {item.name}
                    </div>
                ))}
            </div>
        </>
    );
}
