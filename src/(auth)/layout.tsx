import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { ReactNode } from "react";

type AuthLayoutprops = {
    children: ReactNode;
};
export default function AuthLayout({ children }: AuthLayoutprops) {
    return (
        <div className="relative">
            <div className="absolute top-4 right-4">
                <DarkmodeToggle />
            </div>
        </div>
    );
}
