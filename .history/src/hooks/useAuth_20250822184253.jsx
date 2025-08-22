import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
// import { AuthContext } from "../providers/AuthProvider";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;