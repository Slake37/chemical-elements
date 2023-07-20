'use client'

import { useRouter } from "next/navigation"
import {  useState } from "react"

const Navigation = () => {
  const[name,setName] = useState('')
  const router = useRouter()
 

  const handleSubmit = (e) =>{
    e.preventDefault()
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
    router.push(`/${nameCapitalized}`)
    console.log(name)
    setName('')
  }

  return (
    <div className='fixed top-0 w-full flex justify-center items-center  p-1 bg-black z-10'>
        <form className='flex justify-center items-center rounded-md p-5 border-2' onSubmit={handleSubmit} >
            <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)} placeholder='Search an element by name...' className='p-2 outline-none ' />
            <input type="submit" value="Search"   className='bg-blue-500 cursor-pointer px-5 py-2 rounded-md mx-3 font-bold' onClick={handleSubmit} />
        </form>
    </div>
  )
}

export default Navigation