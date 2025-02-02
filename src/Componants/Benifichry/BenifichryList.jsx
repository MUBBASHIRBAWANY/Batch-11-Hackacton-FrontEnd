import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/AxiosInstance";
import { deleteBenificiary, fetchBenificiaries } from "../../Redux/Reducers/BenifichryRedusers";
import { fetchDepartments } from "../../Redux/Reducers/DepartmentRedusers";
import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import BenifichryRecipt from "./BenifichryRecipt";

const BenifichryList = () => {
  const [printing, setPrinting] = useState(false);
  const isLogin = useSelector((state) => state.loginer.state);
  const Foc = useSelector((state) => state.benificiary.Benificiary);
  const Departments = useSelector((state) => state.department.state);
  const [userdata, setUserData] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getdata = async () => {
    try {
      const res = await axiosInstance.get("/Benifichry");
      const res2 = await axiosInstance.get("/dep");
      setUserData(res.data[0])
      dispatch(fetchBenificiaries(res?.data));
      dispatch(fetchDepartments(res2?.data));
        
      console.log(userdata)
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  
  useEffect(() => {
    getdata();
  }, []);

  const deleteData = async (id) => {
    try {
      await axiosInstance.delete(`/Benifichry/Beneficiary/${id}`);
      dispatch(deleteBenificiary(id));
    } catch (err) {
      console.error("Error deleting beneficiary:", err);
    }
  };

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const FocPerPage = 10;
  const indexOfLastVendor = currentPage * FocPerPage;
  const indexOfFirstVendor = indexOfLastVendor - FocPerPage;
  const currentFoc = Foc?.slice(indexOfFirstVendor, indexOfLastVendor);
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
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).replace(",", ""); // Removes the comma
};
  return (
    <div className="min-h-screen flex justify-center">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-0">
            Benifichry List
          </h1>
          <Link to="/Benifichry/Add">
            <button className="bg-blue-600 p-2 md:p-3 m-1 rounded-lg text-white text-sm md:text-base">
              Add New
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full max-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-400 text-white uppercase text-xs md:text-sm leading-normal">
                <th className="py-3 px-4 md:px-6 text-left">Token</th>
                <th className="py-3 px-4 md:px-6 text-left">Date</th>
                <th className="py-3 px-4 md:px-6 text-left">Beneficiary Name</th>
                <th className="py-3 px-4 md:px-6 text-left">Email</th>
                <th className="py-3 px-4 md:px-6 text-left">For</th>
                <th className="py-3 px-4 md:px-6 text-left">Cnic</th>
                <th className="py-3 px-4 md:px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-xs md:text-sm font-light">
              {currentFoc?.map((vendor, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">{vendor.TOken}</td>
                  <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">{formatDate(vendor.date)}</td>
                  <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">{vendor.BeneficiaryName}</td>
                  <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">{vendor.BeneficiaryEmail}</td>
                  <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">
                    {Departments?.find((item) => item._id === vendor.DepatmentName)?.DepatmentName}
                  </td>
                  <td className="py-3 px-4 md:px-6 text-left text-sm md:text-base">{vendor.BeneficiaryCnic}</td>
                  <td className="flex space-x-2 py-3 px-4 md:px-6">
                    {isLogin !== "Rec" && (
                      <Link to={`/Benifichry/Edit/${vendor._id}`} className="text-blue-600 hover:text-blue-900">
                        <CiEdit className="inline-block w-5 h-5 text-gray-700" />
                      </Link>
                    )}
                    
                    <Link to={`/Benifichry/view/${vendor._id}`}> <FaEye className="inline-block w-5 h-5 text-gray-700" /> </Link>
                    
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
  );
};

export default BenifichryList;