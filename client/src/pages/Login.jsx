import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate();

  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContext);

  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {

    try {

      e.preventDefault();

      axios.defaults.withCredentials = true;

      if (state === 'Sign Up') {

        const { data } = await axios.post(
          backendUrl + '/api/auth/register',
          { name, email, password }
        );

        if (data.success) {

          setIsLoggedin(true);

          getUserData();

          navigate('/');

        } else {

          toast.error(data.message);

        }

      } else {

        const { data } = await axios.post(
          backendUrl + '/api/auth/login',
          { email, password }
        );

        if (data.success) {

          setIsLoggedin(true);

          getUserData();

          navigate('/');

        } else {

          toast.error(data.message);

        }

      }

    } catch (error) {

      toast.error(error.message);

    }
  };

  return (

    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-[#f8f4ea] via-[#fffdf8] to-[#f3eadb]'>

      {/* LOGO */}
      <div
        onClick={() => navigate('/')}
        className='absolute top-5 left-5 sm:left-20 flex items-center gap-3 cursor-pointer group'
      >

        <div className='relative'>

          <div className='absolute inset-0 rounded-full bg-[#f4cf6a]/30 blur-xl opacity-0 group-hover:opacity-100 transition duration-500'></div>

          <img
            src={assets.logo}
            alt=""
            className='relative w-14 h-14 rounded-full object-cover border-4 border-white shadow-xl'
          />

        </div>

        <div>

          <h1 className='text-2xl font-bold text-gray-900 tracking-wide'>
          Nav<span className='text-yellow-500'>ridhi</span>
        </h1>

          <p className='text-[10px] uppercase tracking-[0.35em] text-[#8c7b57]'>
            Growth In Numbers
          </p>

        </div>

      </div>

      {/* LOGIN CARD */}
      <div className='bg-[#fffdf8]/90 backdrop-blur-2xl border border-[#ead7a4] p-10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] w-full sm:w-96 text-[#5f5a4f]'>

        <h2 className='text-3xl font-black text-[#171717] text-center mb-3'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>

        <p className='text-center text-sm mb-8 text-[#8b7355]'>
          {state === 'Sign Up'
            ? 'Create your account'
            : 'Login to your account!'}
        </p>

        <form onSubmit={onSubmitHandler}>

          {/* NAME */}
          {state === 'Sign Up' && (

            <div className='mb-4 flex items-center gap-3 w-full px-5 h-14 rounded-2xl bg-[#fff8ea] border border-[#ead7a4]'>

              <img
                src={assets.person_icon}
                alt=""
                className='opacity-70'
              />

              <input
                onChange={e => setName(e.target.value)}
                value={name}
                className='bg-transparent outline-none w-full text-[#171717] placeholder:text-[#8b7355]'
                type="text"
                placeholder='Full Name'
                required
              />

            </div>

          )}

          {/* EMAIL */}
          <div className='mb-4 flex items-center gap-3 w-full px-5 h-14 rounded-2xl bg-[#fff8ea] border border-[#ead7a4]'>

            <img
              src={assets.mail_icon}
              alt=""
              className='opacity-70'
            />

            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              className='bg-transparent outline-none w-full text-[#171717] placeholder:text-[#8b7355]'
              type="email"
              placeholder='Email Address'
              required
            />

          </div>

          {/* PASSWORD */}
          <div className='mb-4 flex items-center gap-3 w-full px-5 h-14 rounded-2xl bg-[#fff8ea] border border-[#ead7a4]'>

            <img
              src={assets.lock_icon}
              alt=""
              className='opacity-70'
            />

            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              className='bg-transparent outline-none w-full text-[#171717] placeholder:text-[#8b7355]'
              type="password"
              placeholder='Password'
              required
            />

          </div>

          {/* FORGOT PASSWORD */}
          {state === 'Login' && (
            <p
              onClick={() => navigate('/reset-password')}
              className='mb-6 text-[#a66b00] cursor-pointer hover:underline text-sm'
            >
              Forgot Password?
            </p>
          )}

          {/* BUTTON */}
          <button
            className='w-full h-14 rounded-2xl bg-gradient-to-r from-[#111111] via-[#2b2b2b] to-[#d4a017] text-white font-bold shadow-[0_15px_40px_rgba(212,160,23,0.25)] hover:scale-[1.02] transition-all duration-500'
          >
            {state}
          </button>

        </form>

        {/* TOGGLE */}
        {state === 'Sign Up' ? (

          <p className='text-[#8b7355] text-center text-sm mt-6'>

            Already have an account?

            <span
              onClick={() => setState('Login')}
              className='text-[#c89b3c] cursor-pointer underline ml-2 font-semibold'
            >
              Login here
            </span>

          </p>

        ) : (

          <p className='text-[#8b7355] text-center text-sm mt-6'>

            Don&apos;t have an account?

            <span
              onClick={() => setState('Sign Up')}
              className='text-[#c89b3c] cursor-pointer underline ml-2 font-semibold'
            >
              Sign Up
            </span>

          </p>

        )}

      </div>

    </div>

  )
}

export default Login