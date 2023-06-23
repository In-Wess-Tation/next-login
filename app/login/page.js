"use client"
//Det skal være et client component fordi formmik bruger hooks, og hooks er et client component
import { Formik, Form, Field } from "formik";
import { setCookie } from "cookies-next";
import { useState } from "react";
import { useRouter} from "next/navigation";

const Login = () => {

    const [errors, setErrors] = useState(null);
    const router = useRouter();

    //Vi bruger mappen "framework2-api" som api. Mappen ligger i øvelser mappen
    return ( 
        <main>
            <Formik initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={(values, {setSubmitting}) => {
                //post til api
                console.log(values)
                fetch("http://localhost:4000/login", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(values),
                    //det er et JSON object hvis der er quotes på begge sider af colonen
                })
                .then(async response => {
                    if(!response.ok) {
                        const text = await response.text();
                        throw Error(text);
                    }else {
                        return response.json()
                    }})
                    
                .then(result => {
                    setCookie("token", result.accessToken)
                    setCookie("user", JSON.stringify(result.user))
                    setErrors(null)
                    router.push("/secrets")
                })
                .catch(error => setErrors({status: JSON.parse(error.message)}))
                .finally(() => setSubmitting(false))

                setSubmitting(false);
            }}
            >
                {({ isSubmitting }) => (<Form className="w-60 mx-auto flex flex-col p-4 border gap-2">
                    <h2 className="text-xl font-bold">Log in</h2>
                    <Field className="text-black" type="email" name="email" />
                    <Field className="text-black" type="password" name="password" />
                    <button type="submit" disabled={isSubmitting}>{!isSubmitting ? 'Log In' : 'Logging In...'}</button>
                    {errors?.status && <p className="text-red-500">{errors.status}</p>}
                </Form>)}
            </Formik>
        </main>
     );
}
 
export default Login;