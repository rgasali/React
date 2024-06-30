export default function GroceryList(){
    const items=[
        {id:1, name:'bread'},
        {id:2, name:'milk'},
        {id:3, name:'eggs'}
    ];

    return(
        <>
            <h2>Grocery List</h2>
            <ul>
                {items.map((item)=><li producto ={item.id}>{item.name}</li>)}
            </ul>
        </>
    );
}