import { createPortal } from "react-dom";
import React from "react";
import classes from './ModalBoot.module.css'
const Backdrops = (props) => {
   return <div className={classes.backdrop} onClick={props.hideCart}></div>;
};
const Modaloverlays = (props) => {
  
  return ( <div className={classes.modal}>
    <div className={classes.content}> {props.children}</div>
  </div> );
};

const ModalBoot = (props) => {
  const portalELement = document.getElementById("overlays");
  return (
    <div>
      {createPortal(<Backdrops hideCart={props.hideCart}> </Backdrops>, portalELement)}
     
      {createPortal(
        <Modaloverlays>{props.children}</Modaloverlays>,
        portalELement
      )}
    </div>
  );
};

export default ModalBoot;
