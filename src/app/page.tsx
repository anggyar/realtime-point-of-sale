import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <div className='bg-muted flex justify-center items-center h-screen flex-col space-y-4'>
      <h1 className='text-4xl font-semibold space-y-4'>Welcome Anggyar Muhamad Yahya</h1>
      <Link href={"/admin"}>
        <Button className='bg-teal-500 text-white'>Access Dashboard</Button>
      </Link>
    </div>
  );
}
