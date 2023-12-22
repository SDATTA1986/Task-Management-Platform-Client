

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";

import swal from "sweetalert";



import { AuthContext } from './../Providers/AuthProvider';
import NavBar from "../../NavBar/NavBar";


const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { createUser, upProfile } = useContext(AuthContext);
    const regex1 = /^[^A-Z]*$/;
    const regex2 = /^[^\W_]*$/;
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const Name = e.target.name.value;
        const Photo = e.target.photoURL.value;

        if (password.length < 6) {

            swal("Sorry!", "Password should be at least 6 characters or longer", "error");

            return;
        }
        if (regex1.test(password) && !regex2.test(password)) {
            swal("Sorry!", "Password should contain at least one capital letter", "error");

            return;
        }
        if (regex2.test(password) && !regex1.test(password)) {
            swal("Sorry!", "Password should contain at least one special character", "error");

            return;
        }
        if (regex2.test(password) && regex1.test(password)) {
            swal("Sorry!", "Password should contain at least one special character and at least one capital letter", "error");

            return;
        }

        createUser(email, password)
            .then(() => {

                upProfile(Name, Photo)
                    .then(() => {
                        navigate(location?.state ? location.state : '/');
                        e.target.reset();
                        swal("Thank you!", "You have successfully registered!", "success");
                    })
                    .catch()
            })
            .catch(error => {
                swal("Sorry!", `${error.message}`, "error");
            }
            )

    }
    return (
        <div>
            <NavBar/>

            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="PhotoURL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-green-600 hover:bg-green-700 text-xl font-light text-white">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? Please <Link className="text-green-700 font-bold" to='/login'>Login</Link></p>
            </div>


        </div>
    );
};

export default Register;