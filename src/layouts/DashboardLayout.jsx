import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex gap-6">
           
            <div className="w-[20%] bg-red-200">
                <ul>
                    <li>
                        <Link to ="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to ="/dashboard/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to ="/dashboard/editProfile">Edit Profile</Link>
                    </li>
                </ul>
            </div>

           <div className="w-80% bg-green-300 px-6">
           <Outlet></Outlet> 
           </div>
        
        </div>

        
    );
};

export default DashboardLayout;