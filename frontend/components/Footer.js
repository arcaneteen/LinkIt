import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="fixed bottom-0 text-cyan-400">
     
      <Link className='flex flex-row items-centre transition-all duration-400' target="_blank" href="/" >
                <img src='/images/favicon.jpg' className='p-1 w-9 justify-center' alt='linkIt logo'/>
                <h2 classname="pl-4 w-22 font-bold justify-center ">Try LinkIt</h2>
                <img src="/svg/arrow.svg" className="p-1 w-9 justify-center" alt="arrow"></img>
                
      </Link> 
               
      </footer>
  )
}

export default Footer