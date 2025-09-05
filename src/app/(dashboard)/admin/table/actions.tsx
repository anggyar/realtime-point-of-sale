"use server";

import { deleteFile, uploadFile } from "@/actions/storage-action";
import { createClient } from "@/lib/supabase/server";
import { MenuFormState } from "@/types/menu";
import { TableFormState } from "@/types/table";
import { menuSchema } from "@/validations/menu-validation";
import { tableSchema } from "@/validations/table-validation";

export async function createTable(prevState: TableFormState, formData: FormData) {
  // eslint-disable-next-line prefer-const
  let validateFields = tableSchema.safeParse({
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

  const { error } = await supabase.from("tables").insert({
    name: validateFields.data.name,
    description: validateFields.data.description,
    capacity: validateFields.data.capacity,
    status: validateFields.data.status,
  });

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

export async function updateMenu(prevState: MenuFormState, formData: FormData) {
  let validateFields = menuSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: parseFloat(formData.get("price") as string),
    discount: parseFloat(formData.get("discount") as string),
    category: formData.get("category"),
    image_url: formData.get("image_url"),
    is_available: formData.get("is_available") === "true" ? true : false,
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

  if (validateFields.data.image_url instanceof File) {
    const oldImageUrl = formData.get("old_image_url") as string;
    const { errors, data } = await uploadFile(
      "images",
      "menus",
      validateFields.data.image_url,
      oldImageUrl.split("/images/")[1]
    );

    if (errors) {
      return {
        status: "error",
        errors: {
          ...prevState.errors,
          _form: [...errors._form],
        },
      };
    }

    validateFields = {
      ...validateFields,
      data: {
        ...validateFields.data,
        image_url: data.url,
      },
    };
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from("menus")
    .update({
      name: validateFields.data.name,
      description: validateFields.data.description,
      price: validateFields.data.price,
      discount: validateFields.data.discount,
      category: validateFields.data.category,
      image_url: validateFields.data.image_url,
      is_available: validateFields.data.is_available,
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

export async function deleteMenu(prevState: MenuFormState, formData: FormData) {
  const supabase = await createClient();
  const image = formData.get("image_url") as string;

  const { status, errors } = await deleteFile("images", image.split("/images/")[1]);

  if (status === "error") {
    return {
      status: "error",
      errors: {
        ...prevState.errors,
        _form: [errors?._form?.[0] ?? "Unknown error"],
      },
    };
  }

  const { error } = await supabase.from("menus").delete().eq("id", formData.get("id"));

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
