import { cookies } from "next/dist/client/components/headers";

const getSecrets = async () => {
    const token = cookies().get("token")
        //cookies er en metode
    let result = await fetch("http://localhost:4000/secrets", {
        headers: {
            "Authorization": `Bearer ${token.value}`,
        },
    });
    return result.json();
};

const Secrets = async () => {


    const secrets = await getSecrets();
    
    return ( 
        <main className="p-5">
            <h1 className="text-2xl">Secrets</h1>
            {secrets.map(secret => (
                <div className="p-5">
                    <h2 className="font-bold">{secret.quote}</h2>
                    <p>{secret.author}</p>
                </div>
            ))}
        </main>
     );
     //dette er en listevisning
}
 
export default Secrets;