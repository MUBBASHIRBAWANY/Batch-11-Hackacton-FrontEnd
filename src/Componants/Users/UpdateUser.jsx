import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [IsAdmin, setIsAdmin] = useState(0);
    let users = useSelector((state) => state.users.state)


    const onSubmit = async (data) => {
        console.log(data)
    }

    const getdata = () => {
        const res = users.find((item) => item._id == id)
        setUser(res)
        console.log()
        if(res.Admin == "true" ? true : false){
            setIsAdmin(1)
        }
        console.log(IsAdmin, user)
        console.log(res)
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center  text-gray-800 mb-6">Edit User</h1>
                <div>
                    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                            defaultValue={user.name}
                                type="text"
                                {...register("name")}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                            defaultValue={user.email}
                                type="email"
                                {...register("email")}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Password </label>
                            <input
                            defaultValue={user.password}
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
                                Edit user
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser
