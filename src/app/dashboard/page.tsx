
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Dashboard has been removed per user request. Redirecting to home.
    router.replace("/");
  }, [router]);

  return null;
}
