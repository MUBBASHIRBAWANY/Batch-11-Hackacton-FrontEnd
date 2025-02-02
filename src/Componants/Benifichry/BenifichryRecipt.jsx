import React from "react";
import './Benifichrry.css'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { usePDF } from "react-to-pdf";


const BeneficiaryReceipt = ({ TOken, beneficiaryName, beneficiaryEmail, departmentName, beneficiaryCnic }) => {
  const {id} = useParams()
  const benificiary = useSelector((state) => state.benificiary.Benificiary);
  const Findbenificiary = benificiary.find((item)=> item._id == id)
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  const Departments = useSelector((state) => state.department.state);

  console.log(Findbenificiary)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).replace(",", ""); // Removes the comma
};
  return (
    <div className="body1">
      <div class="token "ref={targetRef}>
        <div>
        <h2>SAYLANI WELFARE TRUST</h2>
        <p><strong>Token Date:</strong> {formatDate(Findbenificiary.date)}</p>
        <p><strong>Beneficiary Name:</strong> {Findbenificiary.BeneficiaryName}</p>
        <p><strong>Token Number:</strong> <span class="highlight">{Findbenificiary.TOken}</span></p>
        <p><strong>Department:</strong> <span class="highlight">{Departments?.find((item) => item._id == Findbenificiary.DepatmentName)?.DepatmentName}</span></p>
        <p><strong>Email:</strong> {Findbenificiary.BeneficiaryEmail}</p>
        <p><strong>Phone:</strong> {Findbenificiary.BeneficiaryPhoneNumber}</p>
        <p><strong>Cnic:</strong> {Findbenificiary.BeneficiaryCnic}</p>
        <p>* Please bring this token for service.</p>
        <p>* Contact us for any inquiries.</p>
        </div>
      </div>
      <button className="bg-slate-700 text-white px-1 rounded-md" onClick={() => toPDF()}>
        Print Receipt
        <i class="fas fa-print"></i>
      </button>
    </div>
  );
};

export default BeneficiaryReceipt;