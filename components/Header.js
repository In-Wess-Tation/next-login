import Link from 'next/link'
import { cookies } from 'next/headers';

const Header = () => {

    const token = cookies().get("token");
    // token && console.log(token.value)

    return ( 
        <header>
            <h1>My app</h1>
            {!token ? <Link href="/login">Log in here!</Link> : <button>Log ud</button>}
        </header>
     );
}
 
export default Header;