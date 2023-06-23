"use client"
import Link from 'next/link'
import { getCookie, deleteCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useRouter} from "next/navigation";


const LoginStatus = () => {

    const [token, setToken] = useState(getCookie("token"));
    const pathname = usePathname();
    const router = useRouter();


    useEffect(() => {
        setToken(getCookie("token"))
    }, [pathname]);

    const handleLogout = () => {
        deleteCookie("token");
        deleteCookie("user");
        setToken(null);
        router.push("/");
    }

    return (!token ? <Link href="/login">Log in here!</Link> : <button onClick={handleLogout}>Log ud</button>);
}
 
export default LoginStatus;