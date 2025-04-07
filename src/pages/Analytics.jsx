import '../App.css';
import Header from '../components/Header';
import Linechart from '../components/Linechart';
import Demographics from '../components/Demographics';
import CountryInsights from '../components/CountryInsights';
import InsightsBox from '../components/Insights';
import Sidebar from '../components/Sidebar';

export default function Analytics({ setActiveMenu }) {
    return (
        <div className="bg-black text-white h-screen sm:mb-0 mb-16 w-screen overflow-hidden">
            <Header />

            <div className="flex flex-col md:flex-row h-[calc(100vh-60px)]">
            <Sidebar activeMenu="Analytics" setActiveMenu={setActiveMenu} />
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    <div className="flex flex-col flex-row gap-4 md:gap-6 border-b border-gray-700 mb-6 text-xl">
                        <h5 className="px-4 py-2 text-white border-b-2 border-white font-semibold text-center md:text-left">
                            Overview
                        </h5>
                        <h5 className="px-4 py-2 text-gray-500 cursor-not-allowed text-center md:text-left">
                            Demographics
                        </h5>
                        <div className="md:ml-auto text-gray-500 text-center sm:pt-0 pt-2">
                            <span className="block md:hidden">Reports</span>
                            <span className="hidden md:block">More</span>
                        </div>
                    </div>

                    <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">Overview</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                        <div className="lg:col-span-2 w-full mx-auto">
                            <Linechart />
                        </div>

                        <div className="w-full mx-auto">
                            <InsightsBox />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6 items-center">
                        <div className="lg:col-span-3 w-full mx-auto">
                            <Demographics />
                        </div>
                        <div className="lg:col-span-2 w-full mx-auto">
                            <CountryInsights />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

