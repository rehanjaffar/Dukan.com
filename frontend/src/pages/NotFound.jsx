import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
<div>
    <div className='flex gap-4 items-center p-5'>
    <h1 className='text-5xl font-bold'>Sorry </h1>
    <FaSearch size={32} className='font-medium'/>
    </div>
   
    <h2 className='text-center text-3xl'>Page Not Found</h2>
</div>
    </div>
  )
}
