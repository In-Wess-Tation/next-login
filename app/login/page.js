//Det skal være et client component fordi formmik bruger hooks, og hooks er et client component
import LoginForm from "./LoginForm";


const Login = () => {


    // const { setAuth } = useContext(AuthContext);

    return ( 
        <main>
            <LoginForm />
        </main>
     );
}
 
export default Login;