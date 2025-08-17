import z, { email } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

// Lebih menghemat menggunakan infer daripada harus menulis ulang type nya.
export type LoginForm = z.infer<typeof loginSchema>;
