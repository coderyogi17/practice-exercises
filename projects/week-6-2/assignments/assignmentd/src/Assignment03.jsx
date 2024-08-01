
import { useState, memo, useMemo } from 'react'

export const Assignment03=()=>{
const [items, setItems]= useState(
[{
   
    name:"Milk",
    price:10
},{  
   
    name:"Eggs",
    price:20
},{
  
    name:"Bread",
    price:30
},{
  
    name:"Yogurt",
    price:40
}
]
)


const sumWithInitial = useMemo(()=>items.reduce((acc,cv)=>acc+cv.price,0),[items]);
console.log(sumWithInitial);




    return(
            <div>
                 <ul> 
                    {items.map((item,idx)=> {
                   return <li key={idx}>{item.name} Price is ${item.price}</li>
                 })}
                </ul>
             <p>
            Total cost: {sumWithInitial}
             </p>
            </div>

                )
}

