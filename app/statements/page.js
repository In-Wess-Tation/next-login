import { revalidatePath } from "next/cache";


async function getData() {
    let res = await fetch("http://localhost:4000/statements/")
        if(!res.ok) {
           throw new Error("Failed to fetch data")
        }

        return await res.json();
}



const Statements = async () => {
    
    //   const handleDelete = async () => {
    //     const response = await fetch(`http://localhost:4000/statements/`, {
    //         method: 'DELETE',
    //     })
    //     const data = await response.json()
    //     console.log(data)
    //     data.id
    //   }
    const deleteData = async (formdata) => {
        "use server"
        console.log(formdata)
        //fortolk form data
        let data = Object.fromEntries(formdata)
        console.log(data.statementId)
        //lav delete request til api
       

        let res = await fetch("http://localhost:4000/statements/" + data.statementId, {
            method: "DELETE"
        })
        if(res.ok) revalidatePath("/statements")

        //revalidate path (for at genløse data)
    }

    const data = await getData();

    
    return ( 
        <section>
            <h1 className="text-2xl pb-2">This is statements</h1>
            {data.map((state) => (  
                <>
                <p key={state.id}>{state.sentence}</p>
                <form action={deleteData}>
                    <input type="hidden" name="statementId"  value={state.id}/>
                    <button className="bg-red-600 px-2" submit="delete">X</button>
                </form>
                </>
            )
            )}
        </section>
     );
}
 
export default Statements;


// onClick={() => {
//     fetch("http://localhost:4000/statements/", { 
//         method: 'DELETE', 
//         headers: {
//         'Content-Type': 'application/json'
//         }
//     })
//     .then((response) => {
//         if(!response.ok) {
//             throw new Error("something went wrong...")
//         }
//         return response.json()
//     })
//     .then((data) => {})
//     .catch((e) => {
//         console.log(e)
//     })
// }}