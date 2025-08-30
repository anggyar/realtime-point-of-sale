"use server";

import { AuthFormState } from "@/types/auth";

import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { INITIAL_STATE_LOGIN_FORM } from "@/constants/auth-constant";
import { loginSchemaForm } from "@/validations/auth-validation";

export async function login(prevState: AuthFormState, formData: FormData | null) {
  if (!formData) {
    return INITIAL_STATE_LOGIN_FORM;
  }
  const validateFields = loginSchemaForm.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // kalau terdapat error atau gagal validasi
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
  const {
    error,
    data: { user },
  } = await supabase.auth.signInWithPassword(validateFields.data);

  if (error) {
    return {
      status: "error",
      errors: {
        ...prevState.errors,
        _form: [error.message],
      },
    };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id)
    .single();

  if (profile) {
    const cookieStore = await cookies();

    cookieStore.set("user_profile", JSON.stringify(profile), {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  revalidatePath("/", "layout");
  redirect("/");
}
