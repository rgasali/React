
function Profile(){
    let usuario={nombre:"Rodrigo", apellido:"Gasali"}

    return(
        <div>
            Nombre:{usuario.nombre}.
            Apellido:{usuario.apellido}
        </div>
    )
}


export default function Logueo({isLoggedIn}) {
    return (
    <>
    <h2>isLoggedIn</h2>
    {isLoggedIn = <Profile/> }
    </>
    );
    }