import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  isSearch?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, isSearch, ...props }, ref) => {
    return (
      <div className="mb-5 relative">
        {isSearch && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
            <Search aria-hidden="true" />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex w-full rounded-md border-input bg-background px-6 py-4 bg-patchwork_black-400 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:-ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          autoComplete="username"
          {...props}
        />
        {error && (
          <span className="my-1 text-sm text-patchwork_red-500">{error}</span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
