import { z } from "zod";

export const loginFormSchema = z.object({
	email: z.string().email({ message: "Please provide a valid email" }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters" }),
	// phone: z.string().min(2, {
	//   message: "Phone is required",
	// }),
});
export type LoginInputType = z.infer<typeof loginFormSchema>;

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
