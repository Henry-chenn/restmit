// 'use client'

import { api } from "@/convex/_generated/api";
import { ClerkLoaded, ClerkLoading, UserButton, useUser } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { fetchMutation } from "convex/nextjs";
import { useMutation } from "convex/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function SyncPage() {
  const user = await currentUser();

  await fetchMutation(api.sync.syncFunct, {
    clerkId: user?.id!,
    name: user?.username!,
  });

  redirect("/dashboard");
}
