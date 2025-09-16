"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { Ban, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export const metadata = {
  title: "Jadi Ria | Payment Failed",
};
export default function Failed() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-4'>
      <Ban className='size-16 text-red-500' />
      <h1 className='text-2xl font-bold'>Payment Failed</h1>
      <Link href={"/order"}>
        <Button>Back to Order</Button>
      </Link>
    </div>
  );
}
