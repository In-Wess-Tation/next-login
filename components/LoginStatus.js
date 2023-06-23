"use client"
import Link from 'next/link'
import { getCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';

const LoginStatus = () => {

    const [token, setToken] = useState(getCookie("token"));
    const pathname = usePathname();

    useEffect(() => {
        setToken(getCookie("token"))
    }, [pathname]);

    return (!token ? <Link href="/login">Log in here!</Link> : <button>Log ud</button>);
}
 
export default LoginStatus;