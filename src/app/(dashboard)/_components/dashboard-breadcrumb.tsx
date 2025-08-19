"use client";

import { usePathname } from "next/navigation";

export default function DashboardBreadcrumb() {
  const pathname = usePathname();
  console.log(pathname);
  const paths = pathname.split("/").slice(1);

  return <div></div>;
}
