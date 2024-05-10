import ContextInfo from "./ContextInfo";

import React, { useState } from 'react'

const Provider = (props) => {
    const [newItems,setNewItems]=useState([])
   const addItem=(Item)=> {
    
     setNewItems(prev=> [...prev,Item])
    
   }
 

   const ContextInformation={
        items:newItems,
        totalCartItems:0,
        addItem:addItem
      
       
     }
  return (
    <ContextInfo.Provider value={ContextInformation}>
            {props.children}
            {console.log('updated things',newItems)}
    </ContextInfo.Provider>
  )
}

export default Provider
