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
import { LoginInputType, loginFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const defaultValues = {
  email: "",
  phone: "",
  password: "",
};
const Login = () => {
  const [activeTab, setActiveTab] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues,
  });

  function onSubmit({ email, phone, password }: LoginInputType) {
    // console.log("login:", email, phone, password);
  }
  return (
    <MainLayout className="bg-patchwork_black-500 h-screen text-patchwork_white-900">
      <div className="flex justify-between items-center py-6">
        <BackArrow />
        <h3>Login</h3>
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
        <p className="w-full flex justify-end text-base mr-auto cursor-pointer hover:text-patchwork_black-100">
          Forgot your password?
        </p>
        <Button className="mt-4" type="submit">
          Log in
        </Button>
      </form>
    </MainLayout>
  );
};

export default Login;
