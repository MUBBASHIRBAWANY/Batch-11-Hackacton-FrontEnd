import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/AxiosInstance';

const Adduser = () => {
    const navigate = useNavigate()
    const [IsAdmin, setIsAdmin] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        //document.getElementById("SubButton").disabled = true;
         const formData = new FormData();
         formData.append('name', data.name);
         formData.append('email', data.email);
         formData.append('password', data.password);
         formData.append('image', data.userimage[0])
         formData.append('admin', IsAdmin);

          try {
            const res = await axiosInstance.post('/users',

             formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            console.log(res.status)
            if(res.status === 201){
                navigate('/users')
            }
            }catch(err){
                console.log(err)
            };

    }
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center  text-gray-800 mb-6">Add User</h1>
                <div>
                    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                {...register("name")}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                {...register("email")}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Password </label>
                            <input
                                type="number"
                                {...register("Convert_To")}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Image </label>
                            <input
                                type="file"
                                accept="image/*"
                                {...register('userimage', { required: 'Thumbnail is required' })}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Is Admin </label>
                            <input
                                type="checkbox"
                                value={IsAdmin}
                                onChange={(e) => setIsAdmin(e.target.checked)}
                            
                            />
                        </div>
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Add Foc
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Adduser
