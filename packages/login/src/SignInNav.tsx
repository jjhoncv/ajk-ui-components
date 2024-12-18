import { useState } from "react";
import { ButtonSignIn } from "./ButtonSignIn";
import { LoginModal } from "./LoginModal";

export const SignInNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ButtonSignIn
        handleClick={() => {
          setIsOpen(true);
        }}
      />
      <LoginModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
};
