"use client"
import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import { useState } from 'react'




const Navbar = () => {
    const [nav, setNav] = useState(false)
    const links = [{
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link: 'about'
    },
    {
        id: 3,
        link: 'portofolio'
    },
    {
        id: 4,
        link: 'experience'
    },
    {
        id: 5,
        link: 'Contact'
    },]



    return (
        <div className='fixed flex items-center justify-between w-full h-20 px-4 text-white bg-black z-10000000'>
            <div>
                <h1 className="text-3xl text-white duration-100 ease-in hover:font-semibold">Vincentius</h1>
            </div>
            <ul className='hidden md:flex'>

                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 font-medium text-gray-500 capitalize cursor-pointer hover:scale-105'>{link}</li>

                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className='z-10 pr-4 text-gray-500 cursor-pointer md:hidden hover:text-white'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30}></FaBars>}
            </div>
            
            {nav && 
            <ul className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800 z-10000'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 py-6 text-4xl font-medium text-gray-500 capitalize duration-300 cursor-pointer cursor-pointe hover:scale-105 hover:text-gray-400'>{link}</li>

                ))}
            </ul>}

        </div>
    )
}

export default Navbar  