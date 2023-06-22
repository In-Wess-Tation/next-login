"use client"
//Det skal være et client component fordi formmik bruger hooks, og hooks er et client component
import { Formik, Form, Field } from "formik";

const Login = () => {

    //Vi bruger mappen "framework2-api" som api. Mappen ligger i øvelser mappen
    return ( 
        <main>
            <Formik initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={(values, {setSubmitting}) => {
                //post til api
                fetch("http://localhost:4000/login", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(values),
                    //det er et JSON object hvis der er quotes på begge sider af colonen
                }).then(response => response.json())
                .then(result => console.log(result))
                setSubmitting(false);
            }}
            >
                {({ isSubmitting }) => (<Form className="w-60 mx-auto flex flex-col p-4 border gap-2">
                    <h2 className="text-xl font-bold">Log in</h2>
                    <Field className="text-black" type="email" name="email" />
                    <Field className="text-black" type="password" name="password" />
                    <button type="submit" disabled={isSubmitting}>{!isSubmitting ? 'Log In' : 'Logging In...'}</button>
                </Form>)}
            </Formik>
        </main>
     );
}
 
export default Login;