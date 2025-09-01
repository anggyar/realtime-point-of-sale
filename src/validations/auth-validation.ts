import z from "zod";

export const loginSchemaForm = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export const createUserSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  avatar_url: z.union([z.string().min(1, "image URL is required"), z.instanceof(File)]),
});

export const updateUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  avatar_url: z.union([z.string().min(1, "image URL is required"), z.instanceof(File)]),
});

// Lebih menghemat menggunakan infer daripada harus menulis ulang type nya.
export type LoginForm = z.infer<typeof loginSchemaForm>;
export type createUserForm = z.infer<typeof createUserSchema>;
export type updateUserForm = z.infer<typeof updateUserSchema>;
