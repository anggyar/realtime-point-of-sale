import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { UtensilsCrossed } from "lucide-react";
import { ReactNode } from "react";

type AuthLayoutprops = {
    children: ReactNode;
};
export default function AuthLayout({ children }: AuthLayoutprops) {
    return (
        <div className="relative bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="absolute top-4 right-4">
                <DarkmodeToggle />
            </div>

            <div className="flex w-full max-w-sm flex-col gap-6">
                <div className="flex items-center gap-2 self-center font-medium">
                    <div className="bg-teal-500 flex p-2 items-center justify-center rounded-md">
                        <UtensilsCrossed className="size-4" />
                    </div>
                    Jadi Ria
                </div>
                {children}
            </div>
        </div>
    );
}
