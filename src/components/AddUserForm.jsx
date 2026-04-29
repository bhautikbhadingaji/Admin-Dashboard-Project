import { useState } from "react"
import * as yup from "yup";

export const AddUserForm = ({ handleAddUser, updatedData }) => {


    const addUserschema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email format").required("Email is required"),
        role: yup.string().required("Role is required")
    });

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        role: "",
        status: "Active"
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    };

    const handleFormSubmit = async (e) => {

        if (updatedData) {
            setInputData(updatedData)
        } else {
            e.preventDefault()
            const validData = await addUserschema.validate(inputData, { abortEarly: false });
            handleAddUser(inputData)
        }
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
                            name="name"
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
                            name="email"
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
                            name="role"
                            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="Role">Select Role</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer ">
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}