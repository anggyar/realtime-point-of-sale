// Karena sifatnya client side, gunakan use client

"use client";

// Function ThemeProvider sama dengan fungsi dari next-theme, sehingga memerlukan nama alias menggunakan properti "as".

import {
    ThemeProvider as NextThemeProvider,
    ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
