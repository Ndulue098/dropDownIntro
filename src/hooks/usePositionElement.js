import { useEffect, useRef, useState } from "react";

export default function usePositionElement(isOpen,name) {
     const refPosition = useRef(null);
     const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
   
     useEffect(() => {
       if (isOpen === name && refPosition.current) {
         const rect = refPosition.current.getBoundingClientRect();
         setPosition({
           top: rect.bottom + window.scrollY+20,
           left: rect.left + window.scrollX,
           width: rect.width,
         });
       }
     }, [isOpen, name]);
   
     return {refPosition,position}
}

