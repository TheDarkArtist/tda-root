"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { generateCuid } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface CreateButtonProps {
  type: "project" | "post";
}

const CreateButton: React.FC<CreateButtonProps> = ({ type }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const slug = generateCuid();

  const handleClick = () => {
    startTransition(() => {
      router.push(`/${type}s/${slug}/edit`);
    });
  };

  return (
    <Button
      className="py-5"
      variant="outline"
      onClick={handleClick}
      disabled={isPending}
    >
      {isPending
        ? `Creating ${type.charAt(0).toUpperCase() + type.slice(1)}...`
        : `New ${type.charAt(0).toUpperCase() + type.slice(1)}`}
    </Button>
  );
};

export default CreateButton;
