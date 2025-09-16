import z from "zod";

export const orderSchema = z.object({
  order_id: z.string(),
  customer_name: z.string(),
  status: z.string(),
  payment_token: z.string(),
  table_id: z.string(),
});

export const createOrderSchema = z.object({
  customer_name: z.string().min(1, "Customer name is required"),
  status: z.string().min(1, "Select a status"),
  table_id: z.string().min(1, "Select a table"),
});

export type Order = z.infer<typeof orderSchema>;
export type createOrderForm = z.infer<typeof createOrderSchema>;
