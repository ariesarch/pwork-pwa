import * as React from "react";
import { cn } from "@/lib/utils";
import { EyeOff, Eye } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  showPasswordToggle?: boolean; // Add a prop to toggle password visibility
  error?: string;
}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = "text", showPasswordToggle = false, error, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

    const inputType = showPassword && type === "password" ? "text" : type;

    return (
      <div className="relative mb-5">
        <div className="relative">
          <input
            type={inputType}
            className={cn(
              "flex w-full rounded-md border-input bg-background px-6 py-4 bg-patchwork_black-400 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:-ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            autoComplete="current-password"
            ref={ref}
            {...props}
          />
          {showPasswordToggle && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-2 flex items-center px-2"
            >
              {showPassword ? (
                <EyeOff className="text-gray-500" />
              ) : (
                <Eye className="text-gray-500" />
              )}
            </button>
          )}
        </div>
        {error && (
          <span className="my-1 text-sm text-patchwork_red-500">{error}</span>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
