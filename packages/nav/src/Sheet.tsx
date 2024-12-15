import React from "react";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
   
}

export const Sheet:FC<SheetProps> = ({ isOpen, onClose }) => {
  return <div>sheet</div>
}