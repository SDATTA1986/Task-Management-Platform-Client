import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../Home/NavBar/NavBar";
import { MdAddCircleOutline } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../Home/Shared/Providers/AuthProvider";
import swal from "sweetalert";
import userDefaultPic from '../../src/assets/user.png'
const Dashboard = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {

                swal("Good Bye!", "You have successfully Logged Out!", "success");
            })
            .catch()
    }
    return (
        <div>
            <NavBar ></NavBar>
            <div className="flex text-center items-center">


                <div className="flex flex-col w-1/6 relative">
                    <div className="avatar absolute top-12 left-14">
                        <div className="w-[60px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            {user.photoURL ? <img src={user.photoURL} />
                                : <img src={userDefaultPic} />
                            }
                        </div>
                    </div>
                    <div className=" mt-24 w-[200px] h-[400px] bg-green-300">
                        <ul className="menu">






                            <li>

                                <NavLink to="/dashboard/addTask" className="text-xl">Create Task <MdAddCircleOutline /></NavLink>
                            </li>
                            <div className="divider"></div>
                            <li>

                                <NavLink to="/dashboard/MyPet" className="text-xl">Manage Task <FaCartPlus /></NavLink>
                            </li>
                            <div className="divider"></div>


                            <li>

                                <NavLink to="/dashboard/request" className="text-xl">
                                    To Do List <LuListTodo /></NavLink>
                            </li>
                            <div className="divider"></div>
                            <li>


                                <button onClick={handleLogOut} className="text-xl">Log Out<IoIosLogOut /></button>
                            </li>




                        </ul>
                    </div>


                </div>
                <div className="w-5/6">
                    <span className="text-4xl">Welcome {user.displayName} </span>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;