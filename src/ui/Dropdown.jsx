import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";
import usePositionElement from "../hooks/usePositionElement";

const DropDownContext = createContext();

export default function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState("");
  function handleClose(){
    setIsOpen("");
  }

  return (
    <DropDownContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </DropDownContext.Provider>
  );
}

function Head({children, open,size=""}){
    const {setIsOpen } = useContext(DropDownContext);

  function handleOpen(e) {
    e.stopPropagation()
    setIsOpen((o) => (o === open ? "" : open));
  }

  const event=size!=="mobile"? {onMouseEnter:handleOpen} : {onClick:handleOpen}

  return <p {...event} className="flex items-center justify-center gap-2.5 cursor-pointer">
    {children}
  </p>
}

function Name({ name }) {
  return <p className="relative">{name}</p>;
}

function Btn({ icon,open}) {
  const { isOpen,} = useContext(DropDownContext);

  // function handleOpen(e) {
  //   e.stopPropagation()
  //   setIsOpen((o) => (o === open ? "" : open));
  // }

  // const event=size!=="mobile"? {onMouseEnter:handleOpen} : {onClick:handleOpen}

  return (
    <div >
      <img src={`../images/${icon}-${isOpen=== open  ? "up" : "down"}.svg`} alt="icon" />
    </div>
  );
}

function Body({ children, name,size}) {
  const { isOpen,handleClose,setIsOpen} = useContext(DropDownContext);
  //! closing on click outside
  const {ref}=useOutsideClick(handleClose)

  const {refPosition,position}= usePositionElement(isOpen, name);
  return <>
    {size==="mobile"?
     isOpen === name && <ul className="flex flex-col gap-3.5  *:mr-auto relative left-6">
        {children}
      </ul>:
     <>
      <div ref={refPosition} className="absolute w-full h-0" />

      {isOpen === name &&
        createPortal(
          <ul 
          onMouseLeave={()=>setIsOpen("")}
          ref={ref} 
            style={{
              position: "absolute",
              top: `${position.top}px`,
              left: `${name==="feature"?(position.left)-60:(position.left)+0}px`,
              width: `${name==="feature"?(position.width)+60:(position.width)+20}px`,
              zIndex: 50,
            }}
            className="flex flex-col lg:p-4.5 md:p-3.5 rounded-lg gap-3 max-w-[10rem] bg-AlmostWhite drop-shadow-xl items-baseline "
          >
            {children}
          </ul>,
          document.body
        )}
    </>
  }
  </>
  
  
}

function List({ children, icon }) {
  return (
    <li className=" flex  items-center justify-center  text-MediumGray hover:text-AlmostBlack cursor-pointer">
      {icon && <img className="lg:w-4 md:w-3 mr-3" src={`../images/icon-${icon}.svg`} alt="" />}
      <span className="md:text-base text-lg  text-nowrap font-medium"> {children}</span>
    </li>
  );
}
Dropdown.Name = Name;
Dropdown.Btn = Btn;
Dropdown.Body = Body;
Dropdown.List = List;
Dropdown.Head= Head;

/* 








*/