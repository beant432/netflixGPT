import React, { useState ,useRef} from 'react'
import Header from './Header';
import { CheckValidate } from '../utils/validate';

const Login = () => {
  const [isSignFormOpen, setIsSignFormOpen]=useState(true);
  const [errorMessage, setErrorMessage]=useState(null);
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const handleToggleChange=()=>{
   setIsSignFormOpen(!isSignFormOpen);
  }
  const handleButtonSubmit=()=>{
    const message=CheckValidate(name?.current?.value, email.current.value, password.current.value );
    setErrorMessage(message);
  }
  return (
    <div className='bg-black'>
      <Header />
      <div className='opacity-90 bg-black'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/7cb9679b-dd82-47aa-8629-efe9606364cf/CA-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
      className='absolute z-10' alt="background" /></div>
      <form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blend-luminosity bg-black text-white rounded-lg w-1/4 px-12 py-12 bg-opacity-80 h-2/3 z-10' onSubmit={(e)=>e.preventDefault()}>
        <h1 className='text-3xl font-bold'>{isSignFormOpen ? 'Sign In':'Sign Up'}</h1>
        {!isSignFormOpen && <input type="text" placeholder='Name' className='bg-gray-800 p-2 my-3 w-full rounded-lg h-12' ref={name}/>
        }
        <input type="text" placeholder='Email Address' className='bg-slate-800 px-4 my-3 w-full rounded-lg h-12' ref={email}/>
        <input type="password" placeholder='Password' className='bg-slate-800 px-4 my-3 w-full rounded-lg h-12' ref={password}/>
       <p className='font-bold text-lg text-red-700'>{errorMessage}</p>
        <button type="button" className='bg-red-700 w-full my-3 h-12 rounded-lg cursor-pointer' onClick={handleButtonSubmit}>{isSignFormOpen ? 'Sign In':'Sign Up'}</button>
        <p>{isSignFormOpen ? 'New to Netflix?':'Already Registered'} <span className='cursor-pointer font-bold' onClick={()=>handleToggleChange()}>{!isSignFormOpen ? 'Sign In Now':'Sign Up Now'}</span></p>
      </form>
    </div>
    
  )
}

export default Login