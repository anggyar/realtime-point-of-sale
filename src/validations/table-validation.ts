import z from "zod";

export const tableSchema = z.object({
  name: z.string(),
  description: z.string(),
  capacity: z.number(),
  status: z.string(),
});

export const createTableSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(10, "Description is required"),
  capacity: z.string().min(1, "Capacity is required"),
  status: z.string().min(1, "Status is required"),
});

export type Table = z.infer<typeof tableSchema> & { id: string };
export type createTableForm = z.infer<typeof createTableSchema>;
