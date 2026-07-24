import type { Metadata } from "next";
import Image from "next/image";

import { LoginForm } from "@/components/dashboard/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/dashboard/ui/card";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function DashboardLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-1 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Alle Tech logo"
            width={123}
            height={77}
            priority
            className="h-10 w-auto object-contain"
          />
        </div>
        <Card className="border-border/80 shadow-xs">
          <CardHeader>
            <CardTitle>Alle Tech Dashboard</CardTitle>
            <CardDescription>Sign in with your admin account.</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
