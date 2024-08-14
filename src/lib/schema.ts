import { z } from "zod";

export const loginFormSchemaWithEmail = z.object({
  email: z.string().email({ message: "Please provide a valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const loginFormSchemaWithPhone = z.object({
  phone: z.string().min(2, {
    message: "Phone is required",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
export type LoginInputTypeWithEmail = z.infer<typeof loginFormSchemaWithEmail>;
export type LoginInputTypeWithPhone = z.infer<typeof loginFormSchemaWithPhone>;

export const createAccountFormSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email" }),
  username: z.string().min(1, { message: "Username is requried" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Confirm Password must be at least 8 characters" }),
  phone: z.string().min(2, {
    message: "Phone is required",
  }),
});

export type CreateAccountInutType = z.infer<typeof createAccountFormSchema>;
