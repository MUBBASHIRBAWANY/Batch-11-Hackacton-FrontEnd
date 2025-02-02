import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/AxiosInstance';
import Select from 'react-select'
import { useSelector } from 'react-redux';

const Adduser = () => {
    const [val, setVal] = useState(0)
    const [userDep, SetuserDep] = useState('')
    const navigate = useNavigate()
    const [Dep, setDep] = useState("");
    console.log(userDep)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        //document.getElementById("SubButton").disabled = true;
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('image', data.userimage[0])
        formData.append('userType', val);
        formData.append('dep' , userDep) 


        try {
            console.log(data, val)
            const res = await axiosInstance.post('/users',

                formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            
            navigate('/users')
        } catch (err) {
            console.log(err)
        };

    }
    const DepLaist = useSelector((state)=> state.department.state)
    console.log(DepLaist)
    const Department = [
        DepLaist.map((item)=>{
            return {value: item._id, label: item.DepatmentName }
        })
    ]
    const UsedFor = [
        { value: 2, label: 'for Reception' },
        { value: 3, label: 'for Hod' }

    ]
    console.log(Department[0])
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
                                type="text"
                                {...register("password")}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">UsedFor</label>
                                <Select onChange={(vals) => setVal(vals.value)} options={UsedFor} />
                            </div>
                        </div>
                        <div>

                                <label className="block text-gray-700 font-semibold mb-2">DepartMent</label>
                                <Select onChange={(vals) => SetuserDep(vals.value)} options={Department[0]} />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Image </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    {...register('userimage', { required: 'Thumbnail is required' })}
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
