import { useEffect, useRef } from "react";

export default function useOutsideClick(handleClose,listenCapture=false) {
  const ref = useRef();
  useEffect(function () {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // Handle the click outside event
        console.log("Clicked outside");
        handleClose()
      }
    }

    document.addEventListener("click", handleClickOutside,listenCapture);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClose,listenCapture]);

  return {ref};
}
