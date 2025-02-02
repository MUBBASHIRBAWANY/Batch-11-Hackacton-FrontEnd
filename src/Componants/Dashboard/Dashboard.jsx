import React, { useEffect } from 'react'
import ChartContainer from './Charst'
import axiosInstance from '../../utils/AxiosInstance'
import { fetchDepartments } from '../../Redux/Reducers/DepartmentRedusers'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
  const dispatch = useDispatch()
  const getdata = async ()=>{
    
    const res = await axiosInstance.get("/dep")
console.log(res.data)
  return dispatch(fetchDepartments(res?.data))
}

useEffect(()=>{
  getdata()
},[])
  return (
    <div className="min-h-[180%] bg-gray-100">
    <header className="bg-blue-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="mt-2 text-lg">Visualizing key metrics</p>
      </div>
    </header>

    <main className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <ChartContainer />
      </div>
    </main>
  </div>
  )
}

export default Dashboard
