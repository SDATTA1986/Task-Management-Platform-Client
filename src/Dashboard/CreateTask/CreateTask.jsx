

import swal from "sweetalert";

import { useForm } from "react-hook-form"

import { useContext } from "react";
import { AuthContext } from "../../Home/Shared/Providers/AuthProvider";

const CreateTask = () => {
    
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const onSubmit = (data) => {
        data.status="inprogress";
        data.email=user.email;
        console.log(data);
        
    
        fetch("http://localhost:5000/addTask", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                swal("Congratulations!", "You have successfully Added This Task in To-Do List!", "success");
                
                
            }
        })
    }

    

    
    
    return (
        <div>
            

            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className="relative z-0 w-full mt-6 mb-6 group">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Title</label>
                    <input type="text" name="Title" id="name" className="input input-bordered input-primary w-full "  {...register("Title")} placeholder="Task Title" required />

                </div>
                
                
                <div className="relative z-0 w-full mb-6 group">

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Priority</label>
                    <select  id="Priority" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("Priority")}>
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>
                        


                    </select>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Description</label>
                    <textarea type="text" name="Description" id="name" className="textarea textarea-bordered w-full"  {...register("Description")} placeholder="Task Description" required />

                </div>
                <div className="relative z-0 w-full mb-6 group">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Deadline</label>
                    <input type="date" name="Deadline" id="Deadline" className="input input-bordered input-primary w-full "  {...register("Deadline")} placeholder="Deadline" required />

                </div>





             


                <input type="submit" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" value="Create" />
            </form>

        </div>
    );
};

export default CreateTask;