import TableClientes from "@/components/app/tables/TableClientes";


// async function getClientes() {
//     const resp = await fetch('http://localhost:4000/clientes');
//     const data = await resp.json();
//     return data;
// }

export default async function Clientes() {
    //const users = await getClientes();
    
    return (
        <>
            <TableClientes  />
        </>
    );
}import TableClientes from "@/components/app/tables/TableClientes";



// async function getClientes() {
//     const resp = await fetch('http://localhost:4000/clientes');
//     const data = await resp.json();
//     return data;
// }


export default async function Clientes() {
    //const users = await getClientes();
    
    return (
        <>
            <TableClientes  />
        </>
    );
}