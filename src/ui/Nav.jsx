import { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import useOutsideClick from "../hooks/useOutsideClick";

export default function Nav() {
  const [open,setOpen]=useState(false)

  
  function handleClick(e){
    e.stopPropagation()
    setOpen(pre=>!pre)
  }

  function close(){
    setOpen(false)
  }
  const {ref}=useOutsideClick(close)
  console.log(open);
  

  return (
    <nav className="2xl:px-12 xl:px-6 lg:px-6 lg:gap-12 md:gap-8 md:px-4 flex items-center md:justify-center justify-between  px-5 gap-20  py-4 pt-6 md:mb-20 mb-8">
      <img className="" src="../images/logo.svg" alt="" />
      <div className="hidden md:flex items-center justify-between w-full text-lg font-semibold">
        <ul class="flex gap-10 md:gap-6 md:text-[14px] lg:text-lg cursor-pointer text-base text-MediumGray *:hover:text-AlmostBlack">
          {/* react compound component */}
          <Dropdown>
            <li className=" relative flex items-center justify-center gap-2 ">
              <Dropdown.Head open="feature">
                <Dropdown.Name name="Features" />
                <Dropdown.Btn open="company" icon="icon-arrow" />
              </Dropdown.Head>
              
              <Dropdown.Body name="feature">
                <Dropdown.List icon="todo">Todo List</Dropdown.List>
                <Dropdown.List icon="calendar" >Calendar</Dropdown.List>
                <Dropdown.List icon="reminders">Reminders</Dropdown.List>
                <Dropdown.List icon="planning">Planning</Dropdown.List>
              </Dropdown.Body>
            </li>
          </Dropdown>
          <Dropdown>
            <li className=" relative flex items-center justify-center gap-2 ">
              <Dropdown.Head open="company">
                <Dropdown.Name name="Company" />
                <Dropdown.Btn open="company" icon="icon-arrow" />
              </Dropdown.Head>
              
              <Dropdown.Body name="company">
                <Dropdown.List >History</Dropdown.List>
                <Dropdown.List >Our Team</Dropdown.List>
                <Dropdown.List >Blog</Dropdown.List>
              </Dropdown.Body>
            </li>
          </Dropdown>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <ul class="flex gap-10 text-MediumGray *:hover:text-AlmostBlack cursor-pointer items-center justify-center text-base">
          <li>Login</li>
          <Button type="nav">Register</Button>
        </ul>
      </div>

      {/* small screen */}
      
      <div>
        <img onClick={handleClick} className="cursor-pointer md:hidden block" src={`../images/icon-${open ?"close-":""}menu.svg`} alt="menu icon" />
      </div>
 
      {open && <div  className="md:hidden block absolute inset-0 bg-AlmostBlack/75 backdrop-blur-none ">
          <div ref={ref} className="max-w-[70%] ml-auto h-screen bg-AlmostWhite p-6 text-base">
            <img onClick={handleClick} className="cursor-pointer ml-auto mb-8" src={`../images/icon-close-menu.svg`} alt="menu icon" />
            <ul className="flex flex-col mb-7 *:mr-auto *: text-lg font-medium text-MediumGray gap-6">
              <Dropdown >
                <li className="flex flex-col items-start justify-self-start gap-2 ">
                  <Dropdown.Head open="feature" size="mobile">
                    {/* <span className="flex items-center justify-center gap-4 mb-3"> */}
                    <Dropdown.Name name="Features" />
                    <Dropdown.Btn open="feature"  icon="icon-arrow" />
                    {/* </span> */}
                  </Dropdown.Head>
                  
                  <Dropdown.Body name="feature" size="mobile">
                    <Dropdown.List icon="todo">Todo List</Dropdown.List>
                    <Dropdown.List icon="calendar" >Calendar</Dropdown.List>
                    <Dropdown.List icon="reminders">Reminders</Dropdown.List>
                    <Dropdown.List icon="planning">Planning</Dropdown.List>
                  </Dropdown.Body>
                </li>
              </Dropdown>
              <Dropdown>
                <li className="flex flex-col items-start justify-self-start gap-2 ">
                  <Dropdown.Head open="company" size="mobile">
                      <Dropdown.Name name="Company" />
                      <Dropdown.Btn open="company" icon="icon-arrow" />
                  </Dropdown.Head>
                  <Dropdown.Body name="company" size="mobile">
                    <Dropdown.List >History</Dropdown.List>
                    <Dropdown.List >Our Team</Dropdown.List>
                    <Dropdown.List >Blog</Dropdown.List>
                  </Dropdown.Body>
                </li>
              </Dropdown>
              <li>Careers</li>
              <li>About</li>
            </ul>
            <ul class="flex flex-col *:text-lg gap-5 w-full text-MediumGray *:hover:text-AlmostBlack cursor-pointer items-center justify-center text-base">
              <li className="text-lg">Login</li>
              <Button type="nav">Register</Button>
            </ul>
          </div> 
      </div>}

    </nav>
  );
}
/*  */
