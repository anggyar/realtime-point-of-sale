"use server";

import { createClient } from "@/lib/supabase/server";

import { OrderFormState } from "@/types/order";
import { TableFormState } from "@/types/table";
import { createOrderSchema, orderSchema } from "@/validations/order-validation";
import { tableSchema } from "@/validations/table-validation";

export async function createOrder(prevState: OrderFormState, formData: FormData) {
  const validateFields = createOrderSchema.safeParse({
    customer_name: formData.get("customer_name"),
    status: formData.get("status"),
    table_id: formData.get("table_id"),
  });

  if (!validateFields.success) {
    return {
      status: "error",
      errors: {
        ...validateFields.error.flatten().fieldErrors,
        _form: [],
      },
    };
  }

  const supabase = await createClient();

  const orderId = `JadiRia-${Date.now()}`;

  const [orderResult, tableResult] = await Promise.all([
    supabase.from("orders").insert({
      order_id: orderId,
      customer_name: validateFields.data.customer_name,
      status: validateFields.data.status,
      table_id: validateFields.data.table_id,
    }),

    supabase
      .from("tables")
      .update({
        status: validateFields.data.status === "reserved" ? "reserved" : "unavailable",
      })
      .eq("id", validateFields.data.table_id),
  ]);

  const orderError = orderResult.error;
  const tableError = tableResult.error;

  if (orderError || tableError) {
    return {
      status: "error",
      errors: {
        ...prevState.errors,
        _form: [
          ...(orderError ? [orderError.message] : []),
          ...(tableError ? [tableError.message] : []),
        ],
      },
    };
  }

  return {
    status: "success",
  };
}

export async function updateTable(prevState: TableFormState, formData: FormData) {
  const validateFields = tableSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: parseInt(formData.get("capacity") as string),
    status: formData.get("status"),
  });

  if (!validateFields.success) {
    return {
      status: "error",
      errors: {
        ...validateFields.error.flatten().fieldErrors,
        _form: [],
      },
    };
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from("tables")
    .update({
      name: validateFields.data.name,
      description: validateFields.data.description,
      capacity: validateFields.data.capacity,
      status: validateFields.data.status,
    })
    .eq("id", formData.get("id"));

  if (error) {
    return {
      status: "error",
      errors: {
        ...prevState.errors,
        _form: [error.message],
      },
    };
  }

  return {
    status: "success",
  };
}

export async function deleteTable(prevState: TableFormState, formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.from("tables").delete().eq("id", formData.get("id"));

  if (error) {
    return {
      status: "error",
      errors: {
        ...prevState.errors,
        _form: [error.message],
      },
    };
  }

  return {
    status: "success",
  };
}
