import { useState } from "react";
import { UsersData as initialData } from "../api/UsersData";
import { Dashboard } from "./Dashboard";
import { DeleteConfirmModel } from "./DeleteConfirmModel";
import { AddUserForm } from "./AddUserForm";

export const UserManagement = () => {

    const [users, setUsers] = useState(initialData)
    const [selectedUser, setSelectedUser] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [openForm, setOpenForm] = useState(false)


    const handleDeleteUser = (item) => {
        console.log("item=>", item)
        setIsOpen(true)
        setSelectedUser(item.id)
    }

    const confirmDelete = () => {
        const deleteUser = users.filter(user => user.id !== selectedUser)
        setUsers(deleteUser)
        setIsOpen(false)
        setSelectedUser(null)
    }

    const handleAddUser = () => {
        setOpenForm(true)
    }

    return (
        <>
            <Dashboard title="User Managment" />
            <DeleteConfirmModel isOpen={isOpen} setIsOpen={setIsOpen} confirmDelete={confirmDelete} />
            <div className="flex justify-end mr-15 gap-4">
<select className="shadow appearance-none border border-gray-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    <option>Filter By status</option>
    <option>Active</option>
    <option>Inactive</option>
</select>

                <input type="text" 
                placeholder="Search User"
                className="shadow appearance-none border border-gray-500 rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                <button
                    onClick={() => handleAddUser()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                    +Add User
                </button>
            </div>

            {openForm ? <AddUserForm /> : null}

            {/* <table className="table-auto bg-gray-500 h-screen w-screen text-center">
                <thead>
                    <tr className="bg-gray-700">
                        <th>Email</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((item) =>
                        <tr key={item.id}>
                            <td>{item.email} </td>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>{item.status}</td>
                            <td>
                                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                                    EDIT
                                </button>
                                <button
                                    onClick={() => handleDeleteUser(item)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                                    REMOVE
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table> */}

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
               {users.map((item) =>
                        <tr key={item.id} className="border-b dark:border-neutral-500">
                            <td>{item.email} </td>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>{item.status}</td>
                            <td>
                                <div className="flex-center">

                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer ml-3">
                                    EDIT
                                </button>
                                <button
                                    onClick={() => handleDeleteUser(item)}
                                    className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded cursor-pointer ml-3">
                                    REMOVE
                                </button>
                                </div>
                            </td>
                        </tr>
                    )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}