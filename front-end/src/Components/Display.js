import React from "react";
import Navbar from "./Navbar";

const Display =(props) =>{
    const {list, deleteApplicant} = props
     return(
        <div>
            <Navbar />

         <div>{list.map((item) => {
            return(
                <list key={item._id}>
                   <li>{item.firstname}</li> 
                   <li>{item.surname}</li>
                   <li>{item.phone}</li>
                   <li>{item.email}</li>
                   <li>{item.age}</li>
                   <button onClick={()=>deleteApplicant(item._id)}>Delete</button>
                </list>
            )

         })}

         </div>
        </div>
     )
}

export default Display