import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/AxiosInstance';
import { createData } from '../../Api/CRUD Functions';

const SignupForm = () => {
    const navigate = useNavigate()
const [image, setImage] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
      
    const onSubmit = async (data )=> {
     //document.getElementById("SubButton").disabled = true;
     const formData = new FormData();
     formData.append('name', data.name);
     formData.append('email', data.email);
     formData.append('password', data.password);
     formData.append('image', data.userimage[0])
     console.log(data.userimage[0])

     
     try {
        const res = await createData('/users',formData);
        console.log(res)
        if(res.message == "Registration successful"){
            navigate('/login')
        }
        }catch(err){
            console.log(err)
        };
        
    }

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Blog Acm
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Signup your account
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
              <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input type="text" {...register("name")} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required="" />
                  </div> <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" {...register("email")} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" {...register("password")} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div> <div>
                      <label htmlFor="Cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                      <input type="password" {...register("Cpassword")} name="Cpassword" id="Cpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  
                  <div>
                      <label htmlFor= "Your Image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                      <input
            type="file"
            accept="image/*"
            {...register('userimage', { required: 'Thumbnail is required' })}
          />
                  </div>
                  
                  <button type="submit" id='SubButton' className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-700">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Do you have already Account? <Link to="/Login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default SignupForm
