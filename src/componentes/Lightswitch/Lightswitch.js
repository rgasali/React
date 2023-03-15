export default function Ligtswitch(){
    function handleClick(){
        let bodyStyle=document.body.style;
        if(bodyStyle.backgroundColor==='black'){
            bodyStyle.backgroundColor='white';
        } else{
            bodyStyle.backgroundColor='black';
        }

    }

    return (
        <button onClick={handleClick}>
            alternar las luces
        </button>
    );

}