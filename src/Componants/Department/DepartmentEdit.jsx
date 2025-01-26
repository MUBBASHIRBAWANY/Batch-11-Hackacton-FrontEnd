import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/AxiosInstance";


const DepartmentEdit =  () =>{
    const navigate = useNavigate()
    const {id} = useParams();
    const Depart = useSelector((state)=> state.department.state)
    const [dep, setDep] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        //document.getElementById("SubButton").disabled = true;
        try {
            console.log(data )
            const res = await axiosInstance.put(`/dep/update/${id}`,data);
            console.log(res.status)
            if (res.status === 200) {
                navigate('/Department')
            }
        } catch (err) {
            console.log(err)
        };

    }
     const getdata = () => {
            const res = Depart.find((item) => item._id == id)
            setDep(res)
            console.log(res)
        }
        useEffect(() => {
            getdata()
        }, [])
    return (
        <div>
                <h1 className="text-3xl font-bold text-center  text-gray-800 mb-6">Edit DepartMent</h1>
                <div>
                    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                {...register("DepatmentName")}
                                defaultValue={dep.DepatmentName}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Edit Department
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default DepartmentEdit;