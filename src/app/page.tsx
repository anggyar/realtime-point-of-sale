"use client";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth-store";

import Link from "next/link";

export default function Home() {
  const profile = useAuthStore((state) => state.profile);
  console.log(profile.role);
  return (
    <div className='bg-muted flex justify-center items-center h-screen flex-col space-y-4'>
      <h1 className='text-4xl font-semibold space-y-4'>
        Welcome {profile.name}
      </h1>
      <Link href={profile.role === "admin" ? "/admin" : "/order"}>
        <Button className='bg-teal-500 hover:bg-teal-700 active:bg-teal-900 text-white'>
          Access Dashboard
        </Button>
      </Link>
    </div>
  );
}
