import React from 'react'
import qr from '../assets/images/image-qr-code.png'

export default function Card () {
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='w-72 flex flex-col justify-center items-center bg-white p-3 rounded-2xl'>

                <img className='w-64 rounded-lg' src={qr} alt="qr img" />
                <div className='w-[230px] pt-5 pb-5'>
                    <h2 className='font-Outfit font-bold text-lg text-darkBlue text-center flex pb-3'>Improve your front-end skills by building projects</h2>
                    <span className='text-grayishBlue font-Outfit font-medium text-sm justify-center text-center flex'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</span>
                </div>
            </div>
        </div>
    )
}
