import { useState , useEffect } from "react";

export default function useScroll() {
    const [scroll , setScroll] = useState(0);
    let throttleTimer = false;
  
    function coordY() {
      if(throttleTimer === true) {
        return setScroll(window.scrollY) 
      }else return;
    };
  
    function throttle(callback, time) {
      if (throttleTimer) return;
      
      throttleTimer = true;
      setTimeout(() => {
          callback();
          throttleTimer = false
      }, time);
    }
  
    useEffect(()=> {
      window.addEventListener('scroll' , ()=> throttle(coordY , 300));
    })
    return scroll;
}