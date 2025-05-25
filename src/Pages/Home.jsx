import Button from "../ui/Button";
import Nav from "../ui/Nav";

export default function Home() {
  return (
    <header className=" h-screen flex flex-col bg-AlmostWhite ">
        <Nav/>
      <div className="xl:max-w-[82rem] lg:max-w-[74rem] xl:gap-[13rem] md:gap-[5rem] md:max-w-[60rem] max-w-[34rem] lg:gap-[7rem] gap-[3rem] sm:grid-cols-1 sm:grid-rows-[auto] lg:px-6 md:px-3 px-0  mx-auto grid place-items-center md:grid-cols-2 md:grid-rows-none">
        <div className="flex flex-col h-full md:px-0 px-5 ">
          <div className=" md:my-auto md:text-start text-center md:block flex items-center flex-col">
            <h1 className=" xl:text-[4.8rem]  lg:text-[4.2rem] md:text-[3.2rem] leading-[1] font-bold md:mb-11 text-balance
            sm:text-4xl text-[34px] mb-7 ">
              Make remote work
            </h1>
            <p className="lg:text-[19px] md:mb-14 mb-9 xl:mr-[88px] lg:mr-[44px] md:text-base  text-base text-MediumGray font-medium">
              Get your team in sync, no matter your location. Streamline 
              processes, create team rituals, and watch productivity soar.
            </p>
            
            <Button>Learn more</Button> 
          
          </div>

            <div className="flex items-center justify-between ">
              <img className="lg:w-fit md:w-[4rem] sm:max-w-[5rem] max-w-[4rem] " src="../images/client-databiz.svg" alt="" />
              <img className="lg:w-fit md:w-[4rem] sm:max-w-[5rem] max-w-[4rem] " src="../images/client-audiophile.svg" alt="" />
              <img className="lg:w-fit md:w-[4rem] sm:max-w-[5rem] max-w-[4rem] " src="../images/client-meet.svg" alt="" />
              <img className="lg:w-fit md:w-[4rem] sm:max-w-[5rem] max-w-[4rem] " src="../images/client-maker.svg" alt="" />
            </div>
        </div>

        <>
          <img className="lg:max-w-[90%] md:max-w-full md:block hidden" src="../images/image-hero-desktop.png" alt="" />
          <img className="max-w-full row-start-1 md:hidden block" src="../images/image-hero-mobile.png" alt="" />
        </>
      </div>
    </header>
  );
}

/* 

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
*/
