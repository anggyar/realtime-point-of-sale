import { environment } from "@/configs/environment";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
    // ambil variabel yang terdapat di environtmen
    const { SUPABASE_ANON_KEY, SUPABASE_URL } = environment;

    // returnkan kedaplam createBrowserClient
    return createBrowserClient(SUPABASE_URL!, SUPABASE_ANON_KEY!);
}
