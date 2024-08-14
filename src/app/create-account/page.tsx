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
import { CreateAccountInutType, createAccountFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "@/utils/navigation";
import { Checkbox } from "@/components/atoms/Checkbox";

const defaultValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  phone: "",
};
const CreateAnAccount = () => {
  const { to } = useNavigate();
  const [activeTab, setActiveTab] = useState("email");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateAccountInutType>({
    resolver: zodResolver(createAccountFormSchema),
    defaultValues,
  });

  function onSubmit({
    email,
    username,
    password,
    confirmPassword,
    phone,
  }: CreateAccountInutType) {
    // console.log("login:", email, phone, password);
  }
  return (
    <MainLayout className="px-3 sm:px-6 bg-patchwork_black-500 text-patchwork_white-900 min-h-screen">
      <div className="flex justify-between items-center py-6">
        <div onClick={() => to("/")} className="cursor-pointer">
          <BackArrow />
        </div>
        <h3 className="font-semibold">Create An Account</h3>
        <div></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <TabsContent value="email">
            <Input
              type="email"
              {...register("email")}
              placeholder="Email address"
              error={errors.email?.message!}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              {...register("username")}
              placeholder="Username"
              error={errors.username?.message!}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <PasswordInput
              type="password"
              {...register("password")}
              placeholder="Password"
              error={errors.password?.message!}
              showPasswordToggle={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirm password"
              error={errors.confirmPassword?.message!}
              showPasswordToggle={true}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div>
              <Checkbox />
              <span className="ms-3 text-patchwork_white-900 text-center ">
                <span className="text-patchwork_black-300">I agree to the</span>{" "}
                Terms & Conditions
              </span>
            </div>
          </TabsContent>
          <TabsContent value="phone">
            <Input
              type="number"
              {...register("phone")}
              placeholder="Phone number"
              error={errors.phone?.message!}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <PasswordInput
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              error={errors.password?.message!}
              showPasswordToggle={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </TabsContent>
        </Tabs>

        <Button
          className="mt-8"
          type="submit"
          onClick={() => to("/select-communities")}
        >
          Next
        </Button>
      </form>
      <div className="my-8  flex  justify-center items-center space-x-3">
        <span className="text-patchwork_black-300">
          Already have an account?
        </span>
        <Button
          className="w-fit text-md py-2 px-3 rounded-full"
          variant="outline"
          onClick={() => to("/login")}
        >
          <span>Sign in</span>
        </Button>
      </div>
    </MainLayout>
  );
};

export default CreateAnAccount;
