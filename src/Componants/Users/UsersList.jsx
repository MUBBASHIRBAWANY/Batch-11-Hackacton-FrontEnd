import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteUser, fetchUsers } from '../../Redux/Reducers/UserReduser'
import axiosInstance from '../../utils/AxiosInstance'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
import { fetchDepartments } from '../../Redux/Reducers/DepartmentRedusers'

const UsersList = () => {

  const isLogin = useSelector((state) => state.loginer.state)
  const Departments = useSelector((state) => state.department.state)  

  let Foc = useSelector((state) => state.users.state)
  console.log(Foc)
  if (isLogin == 'Admin') {
    const users = []
    const dispatch = useDispatch()
    const getdata = async () => {

      const res = await axios.get("http://localhost:5000/users")
      const res2 = await axiosInstance.get("/dep")

      dispatch(fetchUsers(res?.data?.data))

      return dispatch(fetchDepartments(res2?.data))

    }
    const navigate = useNavigate()
    useEffect(() => {
      getdata()
    }, [])
    const UsedFor = [
      { value: 2, label: 'Reception' },
      { value: 3, label: 'for Hod' },
      { value: 1, label: 'Admin' }

    ]
    const deleteData = async (id) => {
      try {
        dispatch(deleteUser(id))
        const res = await axiosInstance.delete(`/users/user/${id}`)
        console.log(res)

      }
      catch (err) {
        console.log(err)
      }
    }

    let count = 1;
    const [currentPage, setCurrentPage] = useState(1);
    const FocPerPage = 10;

    // Calculate the indices for slicing the Foc array
    const indexOfLastVendor = currentPage * FocPerPage;
    const indexOfFirstVendor = indexOfLastVendor - FocPerPage;
    const currentFoc = Foc?.slice(indexOfFirstVendor, indexOfLastVendor);
    console.log(currentFoc)

    // Calculate total pages
    const totalPages = Math.ceil(Foc?.length / FocPerPage);

    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };


    return (
      <div className="min-h-screen flex justify-center">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-0">
              Blogger List
            </h1>
            <Link to="/Users/Add">
              <button className="bg-blue-600 p-2 md:p-3 m-1 rounded-lg text-white text-sm md:text-base">
                Add New
              </button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full max-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-400 text-white uppercase text-xs md:text-sm leading-normal">
                  <th className="py-3 px-4 md:px-6 text-left">S.no</th>
                  <th className="py-3 px-4 md:px-6 text-left">BLogaar Name</th>
                  <th className="py-3 px-4 md:px-6 text-left">Email</th>
                  <th className="py-3 px-4 md:px-6 text-left">For </th>
                  <th className="py-3 px-4 md:px-6 text-left">UserDep </th>
                  <th className="py-3 px-4 md:px-6 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-xs md:text-sm font-light">
                {currentFoc?.map((vendor, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">
                      {count++}
                    </td>
                    <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">
                      {vendor.name}
                    </td>
                    <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">
                      {vendor.email}
                    </td>
                    <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">
                      {UsedFor.find((item) => item.value == vendor.userType)?.label}
                    </td> <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">
                      {Departments?.find((item) => item._id == vendor.Dep)?.DepatmentName}
                    </td>
                    <td className="flex space-x-2 py-3 px-4 md:px-6">
                      <CiEdit
                        onClick={() => navigate(`/Users/Edit/${vendor._id}`)}
                        className="text-violet-950 bg-slate-300 h-6 w-6 md:h-8 md:w-8 cursor-pointer"
                      />
                      <MdDelete
                        onClick={() => deleteData(vendor._id)}
                        className="h-6 w-6 md:h-8 md:w-8 cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-wrap justify-between items-center mt-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-3 py-2 md:px-4 md:py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-gray-700 text-sm md:text-base">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-3 py-2 md:px-4 md:py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>You are not authorized to view this page</h1>
      </div>
    )

  }
}

export default UsersList
