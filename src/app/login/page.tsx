"use client";
import BackArrow from "@/components/icons/back-arrow";
import MainLayout from "@/components/molecules/main-layout";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/Tabs";
import { useState } from "react";
import { Input } from "@/components/atoms/Input";
import { PasswordInput } from "@/components/atoms/PasswordInput";
import { Button } from "@/components/atoms/Button";
import {
  LoginInputTypeWithEmail,
  LoginInputTypeWithPhone,
  loginFormSchemaWithEmail,
  loginFormSchemaWithPhone,
} from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLogin } from "@/hooks/useLogin";
import { Loader2 } from "lucide-react";
import { useNavigate } from "@/utils/navigation";

const emailDefaultValues = {
  email: "",
  password: "",
};
const phoneDefaultValues = {
  phone: "",
  password: "",
};
const Login = () => {
  const [activeTab, setActiveTab] = useState<string>("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { to } = useNavigate();
  const { mutate, isPending } = useLogin();

  const {
    register: emailRegister,
    handleSubmit: emailHandleSubmit,
    reset: emailReset,
    formState: { errors: emailErrors },
  } = useForm<LoginInputTypeWithEmail>({
    resolver: zodResolver(loginFormSchemaWithEmail),
    defaultValues: emailDefaultValues,
  });

  const {
    register: phoneRegister,
    handleSubmit: phoneHandleSubmit,
    reset: phoneReset,
    formState: { errors: phoneErrors },
  } = useForm<LoginInputTypeWithPhone>({
    resolver: zodResolver(loginFormSchemaWithPhone),
    defaultValues: phoneDefaultValues,
  });

  function onSubmitWithEmail({ email, password }: LoginInputTypeWithEmail) {
    mutate({ username: email, password: password });
    emailReset();
  }
  function onSubmitWithPhone({ phone, password }: LoginInputTypeWithPhone) {
    mutate({ username: phone, password: password });
    phoneReset();
  }
  return (
    <MainLayout className="bg-patchwork_black-500 h-screen text-patchwork_white-900">
      <div className="flex justify-between items-center py-6">
        <div onClick={() => to("/")} className="cursor-pointer">
          <BackArrow />
        </div>
        <h3>Login</h3>
        <div></div>
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex items-center justify-between bg-patchwork_black-400 border border-patchwork_black-300 rounded-lg mb-8">
          <TabsTrigger
            value="email"
            active={activeTab === "email"}
            className="text-base rounded-lg w-full py-3 px-5"
          >
            Email
          </TabsTrigger>
          <TabsTrigger
            value="phone"
            active={activeTab === "phone"}
            className="w-full text-base rounded-lg py-3 px-5"
          >
            Phone number
          </TabsTrigger>
        </TabsList>

        {activeTab === "email" && (
          <form onSubmit={emailHandleSubmit(onSubmitWithEmail)}>
            <TabsContent value="email">
              <Input
                type="email"
                {...emailRegister("email")}
                placeholder="Email address"
                error={emailErrors.email?.message!}
              />
              <PasswordInput
                type="password"
                {...emailRegister("password")}
                placeholder="Enter your password"
                error={emailErrors.password?.message!}
                showPasswordToggle={true}
              />
            </TabsContent>
            <p
              className="w-full flex justify-end text-base mr-auto cursor-pointer hover:text-patchwork_black-100"
              onClick={() => {}}
            >
              Forgot your password?
            </p>
            <Button
              className="mt-4 flex items-center justify-center"
              type="submit"
              disabled={isPending}
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{" "}
              Log in
            </Button>
          </form>
        )}

        {activeTab === "phone" && (
          <form onSubmit={phoneHandleSubmit(onSubmitWithPhone)}>
            <TabsContent value="phone">
              <Input
                type="number"
                {...phoneRegister("phone")}
                placeholder="Phone number"
                error={phoneErrors.phone?.message!}
              />
              <PasswordInput
                type="password"
                {...phoneRegister("password")}
                placeholder="Enter your password"
                error={phoneErrors.password?.message!}
                showPasswordToggle={true}
              />
            </TabsContent>
            <p
              className="w-full flex justify-end text-base mr-auto cursor-pointer hover:text-patchwork_black-100"
              onClick={() => {}}
            >
              Forgot your password?
            </p>
            <Button
              className="mt-4 flex items-center justify-center"
              type="submit"
              disabled={isPending}
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{" "}
              Log in
            </Button>
          </form>
        )}
      </Tabs>
    </MainLayout>
  );
};

export default Login;
