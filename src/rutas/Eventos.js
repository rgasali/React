import { Link } from "react-router-dom"
import Ligtswitch from "../componentes/Lightswitch/Lightswitch"
import ColorSwitch from "../componentes/ColorSwitch/ColorSwitch"
import GroceryList from "../componentes/GroceryList/GroceryList"
import Logueo from "../componentes/Logueo/Logueo"

export default function Eventos(){

    function clicked(){
        alert("Me clickeaste!")
    }

    return(
        <div>
            <h1>Ejercicios de eventos</h1>
            <Link to="/">Volver al inicio</Link>
            <h2>Alternar luces</h2>
            <p>Desafío 1 de 2: Arregla un manejador de eventos 
               Al hacer clic en este botón se supone que debe cambiar el fondo de la página entre blanco y negro. 
               Sin embargo, nada pasa cuando lo cliqueas. Soluciona el problema. </p>
            <Ligtswitch/>
            <h2>ColorSwitch</h2>
            <p>Este componente ColorSwitch renderiza un botón. Se supone que debe cambiar el color de la página. 
                Conéctalo a la prop manejadora de eventos onChangeColor que recibe del padre de modo que al 
                pulsar el botón cambie el color.
                Después que hagas esto, fíjate que al pulsar el botón también incrementa el contador de clics de la 
                página. Tu colega que escribió el componente padre insiste que onChangeColor no incrementa 
                ningún contador. ¿Qué más podría estar pasando? Soluciónalo de manera que el botón sólo cambie 
                el color, y no incremente el contador.
            </p>
            <ColorSwitch/>
            <h2>Desafío 3:</h2>
            <p>
                Completar la sentencia con la palabra correcta

                button  ={"clicked"} Click Me! button
            </p>
                <button onClick ={clicked}>Click Me!</button>
            <h2>Desafio 4:</h2>
                <Logueo/>
            <h2>Desafio 5:</h2>
                <GroceryList/>
        </div>
    )
}