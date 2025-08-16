import { DarkModeToggle } from "@/components/common/darkmode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
        <div>
            <Input />
            <Button className="dark:bg-teal-500 bg-amber-600">Submit</Button>

            {/* TOGGLE DARKMODE */}
            <DarkModeToggle />
        </div>
    );
}
