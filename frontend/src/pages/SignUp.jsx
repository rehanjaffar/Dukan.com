import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {

    const [name,setName] =useState()
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()

    const navigate = useNavigate()

    const handleSubmit =async (e)=>{
        e.preventDefault();
try {
    const response = await axios.post('http://localhost:5000/api/auth/register', {name,email,password});
    console.log('data transfer success');
   if(response.data.success){
    navigate('/login')
   }
} catch (error) {
    console.log(error);
    
}  
}

  return (
    <div className='bg-gray-200 min-h-screen flex justify-center items-center'>
<div className='bg-white min-w-96'>
    <h2 className='text-4xl text-center font-bold py-4 text-teal-700'>SignUp</h2>
    <div className='flex'>
        <form className='flex flex-col min-w-full' onSubmit={handleSubmit}>
            <div className='flex flex-col px-5 mb-4'>
                <label htmlFor="name" className='text-2xl font-semibold'>Name</label>
                <input required type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter your Name' className='h-14 px-4 text-xl outline-none border-slate-300 border' />
            </div>
            <div className='flex flex-col px-5 mb-4'>
                <label htmlFor="email" className='text-2xl font-semibold'>Email</label>
                <input required type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email' className='h-14 px-4 text-xl outline-none border-slate-300 border' />
            </div>
            <div className='flex flex-col px-5 mb-4'>
                <label htmlFor="password" className='text-2xl font-semibold'>Password</label>
                <input required type="password" onChange={e => setPassword(e.target.value)} placeholder='Enter your Password' className='h-14 px-4 text-xl outline-none border-slate-300 border' />
            </div>
            <div className='mb-4 flex flex-col px-5'>
                <button className='bg-teal-600 text-white text-2xl p-3 rounded mb-4'>Signup</button>
                <p>Already have a Account? <Link to="/login" className='font-bold'>Login</Link></p>
            </div>
        </form>
    </div>
</div>

    </div>
  )
}
