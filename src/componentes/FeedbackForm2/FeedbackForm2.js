//import { useState } from "react";

export default function FeedbackForm2() {
    //const [name, setName]=useState('');

    function handleClick(){
        let name=(prompt('¿Cual es tu nombre?'));
        alert(`Hola, ${name}!`);
        
    }
    

    return (
        <button onClick={handleClick}>
            saludar
        </button>
    );
}