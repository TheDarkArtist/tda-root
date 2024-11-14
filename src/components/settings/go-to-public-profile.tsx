"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";

const GoToPublicProfile = () => {
  const { data } = useSession();

  return (
    <Button size="sm" asChild>
      <Link href={`/${data?.user.username}`}>Go to public profile</Link>
    </Button>
  );
};

export default GoToPublicProfile;
