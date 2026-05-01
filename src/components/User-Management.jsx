import { useEffect, useState } from "react";
import { UsersData as initialData } from "../api/UsersData";
import { Dashboard } from "./Dashboard";
import { DeleteConfirmModel } from "./DeleteConfirmModel";
import { AddUserForm } from "./AddUserForm";
import toast from "react-hot-toast";


export const UserManagement = () => {

    const [users, setUsers] = useState(initialData)
    const [selectedUser, setSelectedUser] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const [filterTerm, setFilterTerm] = useState("");
    const [updatedData, setUpdatedData] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handleDeleteUser = (item) => {
        setIsOpen(true)
        setSelectedUser(item.id)
    }

    const confirmDelete = () => {
        const deleteUser = users.filter(user => user.id !== selectedUser)
        setUsers(deleteUser)
        setIsOpen(false)
        setSelectedUser(null)
        toast.success("Add Delete Successfully")
    }

    const handleAddUser = (userData) => {
        if (userData.id) {
            const updatedUsers = users.map((user) =>
                user.id === userData.id ? userData : user
            );
            setUsers(updatedUsers);
            toast.success("User Updated Successfully");
        } else {
            const userWithId = { ...userData, id: Date.now() };
            setUsers([...users, userWithId]);
            toast.success("User Added Successfully");
        }

        setOpenForm(false);
        setUpdatedData(null);
    };

    const handleUpdateUser = (item) => {
        setOpenForm(true)
        setUpdatedData(item)

    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleFilterChange = (e) => {
        setFilterTerm(e.target.value)
    }

    const filteredUsers = users.filter((user) => {
        const Search = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())
        const Filter = filterTerm === "All" || filterTerm === "" ? users : user.status === filterTerm
        return Search && Filter
    });

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <>
            <Dashboard title="User Managment" />
            <DeleteConfirmModel isOpen={isOpen} setIsOpen={setIsOpen} confirmDelete={confirmDelete} />
            <div className="flex justify-end mr-15 gap-4">
                <select className="shadow appearance-none border border-gray-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                    onChange={handleFilterChange}
                    value={filterTerm}>
                    <option value="All">Filter By status 🔻</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>

                <input type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder=" Search User"
                    className="shadow appearance-none border border-gray-500 rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <button
                    onClick={() => {
                        setOpenForm(true);
                        setUpdatedData(null)
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                    +Add User
                </button>
            </div>

            {openForm ? <AddUserForm handleAddUser={handleAddUser} updatedData={updatedData} setOpenForm={setOpenForm} openForm={openForm} /> : null}

            <div className="flex flex-col text-center ml-15 mr-15 mt-10">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500 text-center bg-gray-700">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Email</th>
                                        <th scope="col" className="px-6 py-4">Name</th>
                                        <th scope="col" className="px-6 py-4">Role</th>
                                        <th scope="col" className="px-6 py-4">Status</th>
                                        <th scope="col" className="px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center bg-gray-300">
                                    {currentUsers.map((item) =>
                                        <tr key={item.id} className="border-b dark:border-neutral-500 hover:bg-gray-400 cursor-pointer">
                                            <td>{item.email} </td>
                                            <td>{item.name}</td>
                                            <td>{item.role}</td>
                                            <td>{item.status}</td>
                                            <td>
                                                <div className="flex-center">

                                                    <button
                                                        onClick={() => handleUpdateUser(item)}
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded cursor-pointer ml-3">
                                                        EDIT
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(item)}
                                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded cursor-pointer ml-3">
                                                        REMOVE
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="flex items-center justify-between border-t border-white/10 py-1 sm:px-6 bg-gray-700">
                                <span className= "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-0.5 px-5 rounded-l">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <div className="flex flex-end gap-5">
                                    <button
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-0.5 px-4 rounded-l cursor-pointer"
                                        disabled={currentPage === 1}
                                        onClick={() => setCurrentPage(prev => prev - 1)}>
                                        ←Prev
                                    </button>
                                    <button
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-0.5 px-4 rounded-r border-l border-gray-400 cursor-pointer"
                                        disabled={currentPage === totalPages}
                                        onClick={() => setCurrentPage(prev => prev + 1)}>
                                        Next→
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}