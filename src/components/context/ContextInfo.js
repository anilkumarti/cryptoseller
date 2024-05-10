import { createContext } from "react";
const ContextInfo=createContext({
    items:[],
   totalCartItems:0,
   addItem: ()=> {}
  
})

export default ContextInfo;