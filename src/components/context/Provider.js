import ContextInfo from "./ContextInfo";

import React, { useState } from 'react'

const Provider = (props) => {
    const [newItems,setNewItems]=useState([])
    
   const addItem=(Item)=> {
    
    
     setNewItems(prev=> [...prev,Item])
    
   }
   const removeItem=(delId)=> {
   const updatedItem=newItems.filter(item=> Number(item.id)!==Number(delId))
   
    setNewItems([...updatedItem])
   }

 

   const ContextInformation={
        items:newItems,
        totalCartItems:0,
        addItem:addItem,
        removeItem:removeItem
      
       
     }
  return (
    <ContextInfo.Provider value={ContextInformation}>
            {props.children}
           
    </ContextInfo.Provider>
  )
}

export default Provider
