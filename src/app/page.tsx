"use client";
import { Button } from "@/components/atoms/Button";
import Divider from "@/components/atoms/DividerComponent";
import LogoOnBlack from "@/components/icons/logo-on-black";
import MastodonLogo from "@/components/icons/mastodon-logo";
import MainLayout from "@/components/molecules/main-layout";
import { useNavigate } from "@/utils/navigation";

export default function Home() {
  const { to } = useNavigate();
  return (
    <MainLayout className="flex flex-col justify-center items-center gap-4 bg-patchwork_black-500 h-screen">
      <div onClick={() => to("/")} className="cursor-pointer">
        {" "}
        <LogoOnBlack />
      </div>
      <Button className="mt-5" onClick={() => to("/create-account")}>
        Create account
      </Button>
      <Divider text="or" />
      <Button className="rounded-full space-x-3" variant="outline">
        <MastodonLogo /> <span>Sign in with Mastodon</span>
      </Button>
      <div className="flex flex-col sm:flex-row justify-center items-center space-x-3">
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
      <span className="text-patchwork_white-900 text-center absolute bottom-5">
        <span className="text-patchwork_black-300">
          By continuing you agree to our
        </span>{" "}
        Terms & Conditions, Privacy Policy
      </span>
    </MainLayout>
  );
}
