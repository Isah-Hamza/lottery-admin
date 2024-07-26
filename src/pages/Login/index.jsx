import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs'

const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4] ">
            <div className="w-full h-fit rounded-lg sm:w-[400px] shadow-md max-w-[550px] py-10 grid place-content-center p-7 bg-white">
                <p className="text-center mb-1 text-xl font-semibold text-primary-green">Welcome <span className=''>Back</span></p>
                <p className='text-center text-sm'>Please enter your registered email and password to log on to your dashboard.</p>
                <form onSubmit={null} className='grid gap-5 grid-cols-2 mt-10'>
                    <div className='col-span-2'>
                        <Input labelClass={'!font-normal'} id={'email'} label={'Email'} placeholder={'Input Email Address'} />
                    </div>

                    <div className='col-span-2'>
                        <Input labelClass={'!font-normal'} id={'password'} label={'Password'} placeholder={'Input Password'} type={'password'} />
                    </div>
                    <div className='text-sm -mt-3 col-span-2 flex justify-between items-center gap-5'>
                        <div className="flex items-center gap-1">
                            <input className='accent-primary-green' type="checkbox" name="" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <Link to={'#'} className="text-primary-yellow font-medium">Forgot password ?</Link>
                    </div>

                    <div className='w-full col-span-2 mt-5'>
                        <button onClick={() => navigate('/dashboard')} type='submit' className='w-full font-medium p-3 rounded-3xl bg-primary-light-green text-white outline-none border-none'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
