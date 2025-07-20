import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
        <div>
            <Input />
            <Button className="dark:bg-amber-400 bg-red-400">Home</Button>
            <DarkmodeToggle />
        </div>
    );
}
