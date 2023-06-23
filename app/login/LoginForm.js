"use client"
import { Formik, Form, Field } from "formik";
import { setCookie } from "cookies-next";
import { useRouter} from "next/navigation";
import { useState } from "react";



const LoginForm = () => {

    const [errors, setErrors] = useState(null);
    const router = useRouter();

    return ( 
        <Formik initialValues={{
            email: "",
            password: "",
        }}
        onSubmit={(values, {setSubmitting}) => {
            //post til api
            console.log(values)
            fetch("http://localhost:4000/login", {
            //Vi bruger mappen "framework2-api" som api. Mappen ligger i øvelser mappen

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
                setCookie("token", result.accessToken, {sameSite: "lax"});
                setCookie("user", JSON.stringify(result.user, {sameSite: "lax"}));
                //vi bruger same site fordi så sender cookien kun når den skal bruges
                //istedet for at den altid og konstant bliver brugt
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
     );
}
 
export default LoginForm;