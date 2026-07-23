"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/dashboard/ui/button";

export function SignOutButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => signOut({ callbackUrl: "/dashboard/login" })}
    >
      <LogOut className="size-4" />
      Sign out
    </Button>
  );
}
