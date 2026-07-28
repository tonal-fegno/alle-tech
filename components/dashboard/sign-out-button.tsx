"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/dashboard/ui/button";

export function SignOutButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={async () => {
        // redirect: false + a client-side navigation keeps the redirect URL
        // relative to the browser origin; the server-computed callbackUrl
        // resolves against the container bind address (0.0.0.0) in Docker.
        await signOut({ redirect: false });
        window.location.href = "/dashboard/login";
      }}
    >
      <LogOut className="size-4" />
      Sign out
    </Button>
  );
}
