import CommonForm from "@/components/common/form";
import { registerFormControl } from "@/config";
import { Divide } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit(){

  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl tracking-tight font-bold text-foreground">
          Create New Account
        </h1>
        <p className="mt-2">Alredy have an account

        <Link
          className="font-medium  text-primary hover:underline ml-2"
          to={"/auth/login"}
        >
          Login
        </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControl}
        buttonText={"Sign up"}
        formData={formData}
        setDormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegister;
