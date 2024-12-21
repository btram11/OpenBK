"use client";
import { useEffect } from "react";

const useDisableBodyScroll = (isOpen: boolean) => {
  useEffect(() => {
    // const dialog = document.querySelector("#dialog");

    // if (dialog)
    if (isOpen) {
      // dialog.style.display = "block";
      // dialog.classList.add("block");
      // document.body.style.overflow = "hidden";
      document.body.classList.add("overflow-hidden");
    } else {
      // dialog.style.display = "none";
      // dialog.classList.remove("block");

      document.body.classList.remove("overflow-hidden");

      // document.body.style.overflow = "auto";
    }

    // Cleanup overflow setting khi modal đóng hoặc component unmount
    return () => {
      // if (dialog) {
      //   // dialog.style.display = "none";
      //   dialog.classList.remove("block");
      // }
      // document.body.style.overflow = "auto";
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]); // Chạy lại khi trạng thái `isOpen` thay đổi
};

export default useDisableBodyScroll;
