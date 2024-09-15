"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import Link from "next/link";

export default function Dashboard() {
  const user = useUser();
  if (!user.isLoaded) {
    return <div>loading</div>;
  }
  const shouldRenderButton = useQuery(api.tools.renderButton, {
    clerkId: user.user?.id!,
  });
  return (
    <div className="flex justify-center gap-4">
      <UserButton />
      <Button asChild>
        <Link href="/leaderboard">Leaderboard</Link>
      </Button>
      <Button asChild>
        <Link href="/example-uploader">Upload Images</Link>
      </Button>
      {shouldRenderButton && (
        <Button asChild>
          <Link href="/textblast">Text Blast Your Hackers</Link>
        </Button>
      )}
    </div>
  );
}
