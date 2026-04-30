import { useEffect, useState } from "react"
import * as yup from "yup";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const addUserschema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    role: yup.string().required("Role is required")
});


export const AddUserForm = ({ handleAddUser, updatedData, setOpenForm, openForm }) => {

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        role: "",
        status: "Active"
    })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (updatedData) {
            setInputData(updatedData)
        }
    }, [updatedData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            await addUserschema.validate(inputData, { abortEarly: false });
            setErrors({});
            handleAddUser(inputData);
            
        } catch (err) {
            const newErrors = {};
            err.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
        }

    }

    return (
        <div>

            <Dialog open={openForm} onClose={setOpenForm} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/50 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <DialogPanel
                                transition
                                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                            >
                                <TransitionChild>
                                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                                        <button
                                            type="button"
                                            onClick={() => setOpenForm(false)}
                                            className="relative rounded-md text-gray-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                        >
                                            <span className="absolute -inset-2.5" />
                                            <span className="sr-only">Close panel</span>
                                            <XMarkIcon aria-hidden="true" className="size-6" />
                                        </button>
                                    </div>
                                </TransitionChild>
                                <div className="relative flex h-full flex-col overflow-y-auto bg-gray-800 py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10">
                                    <div className="px-4 sm:px-6">
                                        <DialogTitle className="text-base font-semibold text-white">Form</DialogTitle>
                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6 flex items-center ml-10 mb-25">

                                        <div className="w-full max-w-xs">
                                            <form
                                                onSubmit={handleFormSubmit}
                                                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                                        Name
                                                    </label>
                                                    <input type="text"
                                                        name="name"
                                                        value={inputData.name}
                                                        onChange={handleChange}
                                                        placeholder="Enter Name..."
                                                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                    />
                                                    {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                                                </div>
                                                <div className="mb-6">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                                        Email
                                                    </label>
                                                    <input type="email"
                                                        name="email"
                                                        value={inputData.email}
                                                        onChange={handleChange}
                                                        placeholder="Enter Email..."
                                                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                                                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                                                </div>
                                                <div className="mb-6">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                                        Role
                                                    </label>
                                                    <select
                                                        onChange={handleChange}
                                                        name="role"
                                                        value={inputData.role}
                                                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                                                        <option value="">Select Role</option>
                                                        <option value="Admin">Admin</option>
                                                        <option value="User">User</option>
                                                    </select>
                                                    {errors.role && <p className="text-red-500 text-xs italic">{errors.role}</p>}
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <button
                                                        type="submit"
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer ">
                                                        {updatedData ? "Update User" : "Add User"}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}