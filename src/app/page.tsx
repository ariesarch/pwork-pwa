import { Button } from "@/components/atoms/Button";
import Divider from "@/components/atoms/DividerComponent";
import LogoOnBlack from "@/components/icons/logo-on-black";
import MastodonLogo from "@/components/icons/mastodon-logo";

export default function Home() {
  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 place-items-center w-full">
      <div className="col-span-12 lg:col-span-3"></div>
      <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-center gap-4 bg-patchwork_black-500 h-screen px-6 w-full">
        <LogoOnBlack />
        <Button className="mt-5">Button</Button>
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
      </div>
      <div className="col-span-12 lg:col-span-3"></div>
    </div>
  );
}
