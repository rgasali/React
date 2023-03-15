import { useEffect , useState } from "react";
import './Tienda.css';


export default function Tienda(){
        
        const [nombre, setNombre]=useState("");
        const [imagen,setImagen]=useState("");
        const [precio,setPrecio]=useState(null);


    useEffect(()=>{
        const url= 'https://fakestoreapi.com/products';
        const peticion=fetch(url);
        peticion
        .then((res)=>res.json())
        .then((data)=>{console.log(data[1].title)
            
            setNombre(data[1].title)
            setImagen(data[1].image)
            setPrecio(data[1].price)})
        
        
    },[])




return (
    <>
       <p>nombre: {nombre}</p>
       <p>precio: {precio}</p>
       <img className="imagenProducto" src={imagen} alt="producto"></img>

    </>

);

}



