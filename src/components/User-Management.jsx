import { UsersData } from "../api/UsersData";
import { Dashboard } from "./Dashboard";

export const UserManagement = () => {

    console.log("UsersData", UsersData)

    return (
        <>
            <Dashboard />

            <table class="table-auto bg-gray-500 h-screen w-screen">
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
                {UsersData.map((item) =>
                    <tr key={item.id} className="ml-20">
                        <td>{item.email} </td>
                        <td>{item.name}</td>
                        <td>{item.role}</td>
                        <td>{item.status}</td>
                        <td>
                            <button className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">EDIT</button>
                            <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">DELETE</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    )
}