"use client"
//Det skal være et client component fordi formmik bruger hooks, og hooks er et client component
import { useContext } from "react";
import { AuthContext, AuthProvider } from "@/context/AuthContext";
import LoginForm from "./LoginForm";


const Login = () => {


    // const { setAuth } = useContext(AuthContext);

    return ( 
        <AuthProvider>
            <main>
                <LoginForm />
            </main>
        </AuthProvider>
     );
}
 
export default Login;