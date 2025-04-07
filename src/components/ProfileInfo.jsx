import React from 'react';
import { User } from 'lucide-react';
import logo from '../assets/profileLogo.png';
import gmail from '../assets/icons8-gmail.svg';
import linkedin from '../assets/icons8-linkedin.svg';
import twitter from '../assets/icons8-twitter.svg';
import verified from '../assets/verified.png';

export default function ProfileInfo() {
    return (
        <div className='text-white p-6 w-full bg-transparent rounded-2xl grid md:grid-cols-[auto_1fr] gap-6'>
            <div className='bg-white rounded-2xl p-6 flex items-start justify-start md:w-full w-[200px]'>
                <User size={160} className='text-black ' />
            </div>

            <div className='flex flex-col  md:items-start text-center md:text-left gap-3'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-2xl font-bold'>Mr.ABC</h1>
                    <img src={verified} alt="verified" className='w-5 h-5' />
                </div>

                <div className='flex items-center gap-2'>
                    <p className='text-sm text-gray-300'>Co-Founder & CEO @ Vertx</p>
                    <img src={logo} alt="logo" className='w-4 h-4 rounded-sm' />
                </div>

                <h6 className='bg-white text-black text-md font-semibold px-5 py-1 rounded w-3/4'>
                    Entrepreneur
                </h6>


                <div className='w-full flex justify-end  md:justify-start mt-2'>
                    <div className='flex items-center gap-4'>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className='w-8 h-8' />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="X" className='w-7 h-7' />
                        </a>
                        <a href="mailto:someone@example.com">
                            <img src={gmail} alt="Gmail" className='w-8 h-8' />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
