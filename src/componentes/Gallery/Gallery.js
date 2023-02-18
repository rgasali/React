import {useState} from 'react';
import { sculptureList } from "../../assets/data";


export default function Gallery() {
  const [index, setIndex]=useState(0);
  const [showMore, setShowMore]=useState(false);

  function handleClick(){
    setIndex(index+1);
  }

  function handleMoreClick(){
    setShowMore(!showMore);
  }

  function handleBackClick(){
    setIndex(index-1);
  }

  let sculpture= sculptureList[index];
  return(
    <>
      <button onClick={handleClick} disabled={index<sculptureList.length -1? false : true}>
        Siguiente
      </button>
      <button onClick={handleBackClick} disabled={index===0? true: false}>
        Anterior
      </button>
      <h2>
        <i>{sculpture.name}</i>
        por {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ?'Ocultar' :'Mostrar'} detalles
      </button>
      
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      {showMore && <p>{sculpture.description}</p>} 
    </>
  )
}