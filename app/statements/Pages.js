

const getStatements = async () => {
    // const token = cookies().get("token")
        //cookies er en metode
    let result = await fetch("http://localhost:4000/statements", {
        method: DELETE,
        // headers: {
        //     "Authorization": `Bearer ${token.value}`,
        // },
    });
    return result.json();
};

const Statements = async () => {

    const statements = await getStatements();

    return ( 
        <section>
            <div>
                <p></p>
                <button>X</button>
            </div>
        </section>
     );
}
 
export default Statements;