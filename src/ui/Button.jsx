
export default function Button({children,type}){

    return <button className={` mb-14 md:mb-0 flex items-center justify-center  bg-AlmostBlack text-AlmostWhite hover:bg-AlmostWhite hover:text-AlmostBlack transition-all duration-500 border-1 border-AlmostBlack font-semibold rounded-2xl
    ${type==="nav"?"py-2 px-6 w-full md:w-fit border-MediumGray bg-AlmostWhite rounded-xl text-MediumGray":"py-4 px-8"}`}>
            {children}
        </button>
}

