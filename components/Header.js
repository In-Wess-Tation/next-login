import LoginStatus from './LoginStatus';

const Header = () => {

    // token && console.log(token.value)

    return ( 
        <header>
            <h1>My app</h1>
            <LoginStatus />
        </header>
     );
}
 
export default Header;