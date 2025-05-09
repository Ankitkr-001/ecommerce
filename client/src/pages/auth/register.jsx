import CommonForm from "@/components/common/form";
import { registerFormControl } from "@/config";
import { toast } from "sonner";
import { registerUser } from "@/store/auth-slice";
import { Divide } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      // console.log(data);
      if (data?.payload?.success) {
        toast(data?.payload?.message, {
          action: {
            label: "Done",
            onClick: () => console.log("Undo"),
          },
        });
        navigate("/auth/login");
      } else {
        console.log(data.payload);

        toast(data?.payload?.message, {
          action: {
            label: "Done",
            onClick: () => console.log("Undo"),
          },
        });
      }
    });
  }

  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl tracking-tight font-bold text-foreground">
          Create New Account
        </h1>
        <p className="mt-2">
          Alredy have an account
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
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegister;
