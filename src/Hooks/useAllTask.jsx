import { useQuery } from "@tanstack/react-query";



import useAxiosPublic from "./UseAxiosPublic";
import useAuth from "./useAuth";



const useAllTask = () => {
    const axiosPublic=useAxiosPublic();
    const {user}=useAuth();
    const {refetch,data:Tasks=[]}=useQuery({
        queryKey:['Tasks'],
        queryFn: async()=>{
            const res=await axiosPublic.get(`/AllTasks?email=${user.email}`);
            return res.data;
        }
    })
    return [Tasks,refetch]
};

export default useAllTask;