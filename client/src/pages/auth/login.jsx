import CommonForm from "@/components/common/form";
import { loginFormControl } from "@/config";
import { Divide } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit(){

  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl tracking-tight font-bold text-foreground">
          Sign in to your Account
        </h1>
        <p className="mt-2">Don't have an Account?

        <Link
          className="font-medium  text-primary hover:underline ml-2"
          to={"/auth/register"}
        >
          Sign up
        </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControl}
        buttonText={"Sign In"}
        formData={formData}
        setDormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
