import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


export default function Login({setIsAuthenticated}) {
   
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()

    const navigate = useNavigate()

    const handleSubmit =async (e)=>{
        e.preventDefault();
try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {email,password}, {withCredentials:true});
    toast.success('Login successfully')
    setIsAuthenticated(true)
    navigate('/admin')
} catch (error) {
   toast.error(error);
    
}  
}
  return (
    <div className='bg-gray-200 min-h-screen flex justify-center items-center'>
    <div className='bg-white min-w-96'>
        <h2 className='text-4xl text-center font-bold py-4 text-teal-700'>LogIn</h2>
        <div className='flex'>
            <form onSubmit={handleSubmit} className='flex flex-col min-w-full'>
               
                <div className='flex flex-col px-5 mb-4'>
                    <label htmlFor="email" className='text-2xl font-semibold'>Email</label>
                    <input onChange={e=>setEmail(e.target.value)} type="email" placeholder='Enter your Email' className='h-14 px-4 text-xl outline-none border-slate-300 border' />
                </div>
                <div className='flex flex-col px-5 mb-4'>
                    <label htmlFor="password" className='text-2xl font-semibold'>Password</label>
                    <input onChange={e=>setPassword(e.target.value)} type="password" placeholder='Enter your Password' className='h-14 px-4 text-xl outline-none border-slate-300 border' />
                </div>
                <div className='mb-4 flex flex-col px-5'>
                    <button className='bg-teal-600 text-white text-2xl p-3 rounded mb-4'>Login</button>
                    <p>Haven't any Account? <Link to="/register" className='font-bold'>Create new Account</Link></p>
                </div>
            </form>
        </div>
    </div>
    
        </div>
  )
}
