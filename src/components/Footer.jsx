import React from 'react'

const Footer = () => {
    return (
        <div className=" text fixed bottom-0 w-full h-[15vh] font-mono border-2 border-t-gray-600 bg-[#27135a]" >
            <div className='flex flex-col justify-center items-center mt-8 gap-3' >
                <span className='flex gap-1'><p className=' text-blue-900'>&lt;</p> <p className='text-white'> Pass-OP </p><p className='text-blue-900'>&gt;</p></span>
                <span className='flex justify-center items-center text-white'>Made with <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 400 400"
                    className="w-8 h-6  animate-spin"
                    fill="red"
                >
                    <path xmlns="http://www.w3.org/2000/svg" d="M350,147.125c0-42.016-34.06-76.076-76.076-76.076-35.837,0-65.862,24.787-73.924,58.147-8.062-33.36-38.087-58.147-73.924-58.147-42.016,0-76.076,34.061-76.076,76.076,0,19.98,7.713,38.151,20.311,51.726l129.689,130.1,129.689-130.1c12.597-13.575,20.311-31.746,20.311-51.726Z" fill="red" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                </svg>
                    by Navpreet Singh</span>

            </div>
        </div>
    )
}

export default Footer
