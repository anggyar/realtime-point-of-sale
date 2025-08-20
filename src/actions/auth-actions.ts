"use server";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignOut() {
  const supabase = await createClient();
  const cookieStore = await cookies();

  try {
    await supabase.auth.signOut();
    cookieStore.delete("user_profile"); //delete key user profile di cookie
    revalidatePath("/", "layout");
  } catch (error) {
    console.error("Error signing out: ", error);
  }
  redirect("/login");
}
