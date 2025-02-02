import React from 'react'

const BenifichryEdit = () => {
  return (
    <div>
    <div>
        <h1 className="text-3xl font-bold text-center  text-gray-800 mb-6">Add Benifichry</h1>
        <div>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Date</label>
                    <input
                        type="Date"
                        {...register("date")}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        {...register("BeneficiaryName")}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>

                    <label className="block text-gray-700 font-semibold mb-2">Cnic</label>
                    <input type="text"
                        id="cnic"
                        pattern="^\d{5}-\d{7}-\d{1}$"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="XXXXX-XXXXXXX-X"
                        {...register("BeneficiaryCnic")} />

                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="text"
                        id="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("BeneficiaryEmail")} />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input type="text"
                        id="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("BeneficiaryPhoneNumber")} />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Beneficiary Address</label>
                    <input type="text"
                        id="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register("BeneficiaryAddress")} />
                </div>
                <div>

                    <label className="block text-gray-700 font-semibold mb-2">Resolved</label>
                    <Select onChange={(vals) => setIssue(vals.value)} options={Department[0]} />
                </div>

                <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Enter Benifichry
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default BenifichryEdit
