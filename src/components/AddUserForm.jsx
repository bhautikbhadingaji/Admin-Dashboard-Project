import { useState } from "react"

export const AddUserForm = () => {

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        role: "",
        status: "Active"
    })

    console.log("inputData",inputData)


  const handleChange = (e) => {
        setInputData(e.target.value);
    };

const handleFormSubmit = (e) => {
    e.preventDefault()
}

    return (
        <>
            <div className="w-full max-w-xs">
                <form
                    onSubmit={handleFormSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input type="text"
                        onChange={handleChange}
                            placeholder="Enter Name..."
                            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input type="email"
                        onChange={handleChange}
                            placeholder="Enter Email..."
                            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Role
                        </label>
                        <select 
                        onChange={handleChange}
                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="Role">Select Role</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}