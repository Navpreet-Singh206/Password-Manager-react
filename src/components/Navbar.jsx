import React from 'react'

const Navbar = () => {
    return (

        <div>
            <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <nav className='flex justify-between items-center font-mono text-white border-t-2 border-b-2 border-gray-800 h-17 text-lg px-11'>
                <span><p className='flex gap-1 text-blue-900'>&lt; <p className='text-white'> Pass-OP </p> &gt;</p></span>
                <ul className='flex gap-8'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar
