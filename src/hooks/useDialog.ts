"use client";
import { useRef, useState } from "react";
import useDisableBodyScroll from "./useDisableBodyScroll";

export function useDialog(onClose: () => void) {
  // const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useDisableBodyScroll(isOpen);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === dialogRef.current) {
      onClose();
      setIsOpen(false);
    }
  };

  return { dialogRef, handleOutsideClick };
}
