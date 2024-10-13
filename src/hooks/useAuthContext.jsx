import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider";

const useAuthContext = () => {
    const authentication = useContext(AuthContext);
    return authentication;
}

export default useAuthContext;