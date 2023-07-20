import Link from 'next/link'
import React from 'react'

const AllElements = ({elements}) => {

  return (
    <div className=' grid grid-cols-3 mt-20 md:grid-cols-5 gap-4 w-full m-auto p-3 h-screen'>{elements.map((element) => (
        <Link href={`/${element.name}`}>
            <div style={{ backgroundColor: `#${element.cpkHexColor}` }} className={`border-2 drop-shadow-lg flex flex-col justify-center items-center rounded-md p-5 self-center  h-full  w-full`}>
            <div className='flex w-full justify-between text-xs md:text-sm'>
                <p>{Math.trunc(element.atomicNumber)}</p>
                <p>{element.atomicMass}</p>
            </div>
            <h1 className='md:text-2xl'>{element.symbol}</h1>
            <h2 className='md:text-2xl'>{element.name}</h2>
            <h3 className='text-xs md:text-sm text-center'>{element.groupBlock}</h3>
        </div>
        </Link>
    ))}</div>
  )
}

export default AllElements