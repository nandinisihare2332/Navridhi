import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const ResetPassword = () => {

  const { backendUrl } = useContext(AppContext)

  axios.defaults.withCredentials = true

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const inputRefs = React.useRef([])

  const [isEmailSent, setIsEmailSent] = useState(false)

  const [otp, setOtp] = useState(0)

  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false)

  const handleInput = (e, index) => {

    if (
      e.target.value.length > 0 &&
      index < inputRefs.current.length - 1
    ) {
      inputRefs.current[index + 1].focus()
    }

  }

  const handleKeyDown = (e, index) => {

    if (
      e.key === 'Backspace' &&
      e.target.value === '' &&
      index > 0
    ) {
      inputRefs.current[index - 1].focus()
    }

  }

  const handlePaste = (e) => {

    const paste = e.clipboardData.getData('text')

    const pasteArray = paste.split('')

    pasteArray.forEach((char, index) => {

      if (inputRefs.current[index]) {

        inputRefs.current[index].value = char

      }

    })

  }

  const onSubmitEmail = async (e) => {

    e.preventDefault()

    try {

      const { data } = await axios.post(
        backendUrl + '/api/auth/send-reset-otp',
        { email }
      )

      data.success
        ? toast.success(data.message)
        : toast.error(data.message)

      data.success && setIsEmailSent(true)

    } catch (error) {

      toast.error(error.message)

    }

  }

  const onSubmitOtp = async (e) => {

    e.preventDefault()

    const otpArray = inputRefs.current.map((e) => e.value)

    setOtp(otpArray.join(''))

    setIsOtpSubmitted(true)

  }

  const onSubmitNewPassword = async (e) => {

    e.preventDefault()

    try {

      const { data } = await axios.post(
        backendUrl + '/api/auth/reset-password',
        { email, otp, newPassword }
      )

      data.success
        ? toast.success(data.message)
        : toast.error(data.message)

      data.success && navigate('/login')

    } catch (error) {

      toast.error(error.message)

    }

  }

  return (

    <div className='flex items-center justify-center min-h-screen px-6 bg-gradient-to-br from-[#f8f4ea] via-[#fffdf8] to-[#f3eadb]'>

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

      {/* EMAIL FORM */}
      {!isEmailSent &&

        <form
          onSubmit={onSubmitEmail}
          className='bg-[#fffdf8]/90 backdrop-blur-2xl border border-[#ead7a4] p-10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] w-full sm:w-96'
        >

          <h1 className='text-[#171717] text-3xl font-black text-center mb-3'>
            Reset Password
          </h1>

          <p className='text-center mb-8 text-[#8b7355]'>
            Enter your registered email address.
          </p>

          <div className='mb-5 flex items-center gap-3 w-full px-5 h-14 rounded-2xl bg-[#fff8ea] border border-[#ead7a4]'>

            <img
              src={assets.mail_icon}
              alt=""
              className='opacity-70'
            />

            <input
              type="email"
              placeholder='Email Address'
              className='bg-transparent outline-none w-full text-[#171717] placeholder:text-[#8b7355]'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

          </div>

          <button
            type="submit"
            className='w-full h-14 rounded-2xl bg-gradient-to-r from-[#111111] via-[#2b2b2b] to-[#d4a017] text-white font-bold shadow-[0_15px_40px_rgba(212,160,23,0.25)] hover:scale-[1.02] transition-all duration-500'
          >
            Submit
          </button>

        </form>
      }

      {/* OTP FORM */}
      {!isOtpSubmitted && isEmailSent &&

        <form
          onSubmit={onSubmitOtp}
          className='bg-[#fffdf8]/90 backdrop-blur-2xl border border-[#ead7a4] p-10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] w-full sm:w-96'
        >

          <h1 className='text-[#171717] text-3xl font-black text-center mb-3'>
            Verify OTP
          </h1>

          <p className='text-center mb-8 text-[#8b7355]'>
            Enter the 6-digit code sent to your email.
          </p>

          <div
            className='flex justify-between mb-8'
            onPaste={handlePaste}
          >

            {Array(6).fill(0).map((_, index) => (

              <input
                type="text"
                maxLength='1'
                key={index}
                required
                className='w-12 h-12 rounded-2xl bg-[#fff8ea] border border-[#ead7a4] text-[#171717] text-center text-xl outline-none'
                ref={e => inputRefs.current[index] = e}
                onInput={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />

            ))}

          </div>

          <button
            type="submit"
            className='w-full h-14 rounded-2xl bg-gradient-to-r from-[#111111] via-[#2b2b2b] to-[#d4a017] text-white font-bold shadow-[0_15px_40px_rgba(212,160,23,0.25)] hover:scale-[1.02] transition-all duration-500'
          >
            Verify OTP
          </button>

        </form>
      }

      {/* NEW PASSWORD FORM */}
      {isOtpSubmitted && isEmailSent &&

        <form
          onSubmit={onSubmitNewPassword}
          className='bg-[#fffdf8]/90 backdrop-blur-2xl border border-[#ead7a4] p-10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] w-full sm:w-96'
        >

          <h1 className='text-[#171717] text-3xl font-black text-center mb-3'>
            New Password
          </h1>

          <p className='text-center mb-8 text-[#8b7355]'>
            Enter your new password below.
          </p>

          <div className='mb-5 flex items-center gap-3 w-full px-5 h-14 rounded-2xl bg-[#fff8ea] border border-[#ead7a4]'>

            <img
              src={assets.lock_icon}
              alt=""
              className='opacity-70'
            />

            <input
              type="password"
              placeholder='New Password'
              className='bg-transparent outline-none w-full text-[#171717] placeholder:text-[#8b7355]'
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              required
            />

          </div>

          <button
            type="submit"
            className='w-full h-14 rounded-2xl bg-gradient-to-r from-[#111111] via-[#2b2b2b] to-[#d4a017] text-white font-bold shadow-[0_15px_40px_rgba(212,160,23,0.25)] hover:scale-[1.02] transition-all duration-500'
          >
            Reset Password
          </button>

        </form>
      }

    </div>
  )
}

export default ResetPassword