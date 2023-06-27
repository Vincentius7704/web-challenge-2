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
            Just a kid passionate about web and data science
          </h2>
          <p className='max-w-lg py-4 text-gray-500 '>
            Playing arround with JS , html , Tailwind and styling things is kinda fun. Also 
            do some data science with python , exploring data and create an automation to predict the data.
            planning to learn more about back-end after completing front-end , and having fun!
          </p>
          <div>
            <button className='flex items-center gap-1 px-6 py-3 my-2 w-fit rounded-xl '>
              Things i have done
              <span>
                 <MdArrowRightAlt></MdArrowRightAlt> 
              </span>
            </button>          
          </div>
        </div>
        <div className='relative z-40 flex justify-center overflow-hidden bg-gradient-to-l from-cyan-600 to-cyan-300 w-96 h-80 rounded-xl'>
            <Image src={code} objectFit='cover' fill></Image>
        </div>


      </div>



    </div>
  )
}

export default Homey