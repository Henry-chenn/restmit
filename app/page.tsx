// "use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Authenticated, Unauthenticated } from "convex/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const user = auth();

  if (user.userId) {
    redirect("/dashboard");
  }

  return (
    <main>
      <Button asChild>
        <Link href="/signin">Go to sign in</Link>
      </Button>
    </main>
  );
}
