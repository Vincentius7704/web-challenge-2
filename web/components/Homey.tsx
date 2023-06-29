"use client"
import React from 'react'
import Image from 'next/image'
import {MdArrowRightAlt} from 'react-icons/md'
import code from '../public/dev-ed-wave.png'


const Homey = () => {
  return (
    <div  className='w-full h-screen text-white bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='flex flex-col items-center justify-center h-full max-w-screen-lg mx-auto md:flex-row bg-red'>
        <div className='flex flex-col justify-center h-full' >
          <h2 className='text-4xl font-bold '>
            Just a kid passionate about web, data science, and startup
          </h2>
          <p className='max-w-lg py-4 text-gray-500 '>
            Playing arround with JS , html , Tailwind and styling things is kinda fun. Also 
            do some data science with python , exploring data and create an automation to predict the data.
            planning to learn more about back-end after completing front-end , and having fun!
          </p>
          <div className='relative group'>
            <div className='absolute w-56 h-12 px-6 py-3 my-2 transition duration-1000 group-hover:duration-300 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-xl blur opacity-60 group-hover:opacity-100'></div>
            <button className='relative flex items-center gap-2 px-6 py-3 my-2 bg-black w-fit rounded-xl'>
              Things i have done
              <span className='animate-ping'>
                 <MdArrowRightAlt></MdArrowRightAlt> 
              </span>
            </button>          
          </div>
        </div>
        <div className='relative group'>
          <div className='absolute z-40 flex justify-center overflow-hidden transition duration-1000 opacity-50 bg-gradient-to-l from-cyan-600 to-cyan-300 w-96 h-80 rounded-xl blur-2xl group-hover:opacity-100 group-hover:blur-3xl group-hover:duration-200'></div>
          <div className='relative z-40 flex justify-center overflow-hidden bg-gradient-to-l from-cyan-600 to-cyan-300 w-96 h-80 rounded-xl'>
            <Image src={code} objectFit='cover' fill></Image>
          </div>
        </div>

      </div>



    </div>
  )
}

export default Homey