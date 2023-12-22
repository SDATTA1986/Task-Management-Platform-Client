import { useContext } from "react";
import { AuthContext } from "../Home/Shared/Providers/AuthProvider";




const useAuth = () => {
    const auth=useContext(AuthContext);
    return auth;
}

export default useAuth;