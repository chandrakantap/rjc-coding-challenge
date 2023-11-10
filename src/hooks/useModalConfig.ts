import { useState } from "react";

export function useModalConfig(initialOpen: boolean = false) {
  const [isOpen, setOpen] = useState(initialOpen);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return {
    openModal,
    closeModal,
    isOpen,
  };
}
