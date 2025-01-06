import React from "react";
// import { LoginForm } from "./LoginForm";
import { LoginFormWithPassword } from "./LoginFormWithPassword";

interface LoginSignUpModelProps {
  onClose: () => void;
}

const LoginSignUpModel: React.FC<LoginSignUpModelProps> = ({ onClose }) => {
  return (
    <div className="  fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg h-[670px] max-w-[500px] relative">
        {/* Modal Content */}
        {/* <LoginForm onClose={onClose} /> */}
        <LoginFormWithPassword onClose={onClose} />
      </div>
    </div>
  );
};

export default LoginSignUpModel;
