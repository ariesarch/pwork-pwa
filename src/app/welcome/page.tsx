"use client";
import { Button } from "@/components/atoms/Button";
import LogoOnBlack from "@/components/icons/logo-on-black";
import MainLayout from "@/components/molecules/main-layout";
import { useLogout } from "@/hooks/useLogout";
import { Loader2 } from "lucide-react";
import React from "react";

const Welcome = () => {
  const { mutate, isPending } = useLogout();
  const token = localStorage.getItem("---nmat---");
  const logout = () => {
    mutate(
      { myAccessToken: token ?? "" },
      {
        onSuccess: () => {},
      }
    );
  };
  return (
    <MainLayout className="flex flex-col justify-center items-center gap-4 bg-patchwork_black-500 h-screen">
      <div className="text-2xl text-patchwork_white-900">
        Welcome to Patchwork
      </div>
      <LogoOnBlack />
      <Button onClick={logout} disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Logout
      </Button>
    </MainLayout>
  );
};

export default Welcome;
