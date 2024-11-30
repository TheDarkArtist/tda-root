"use client";

import Loader from "@/components/utils/loader";
import { cn } from "@/lib/utils";
import { User } from "@prisma/client";
import { FC, useTransition } from "react";
import { toast } from "sonner";

interface ChangeNameFormProps {
  user: User;
  handleNameChange: (formData: FormData) => Promise<{ error?: string }>;
}

const ChangeNameForm: FC<ChangeNameFormProps> = ({
  user,
  handleNameChange,
}) => {
  const [isPending, startTransition] = useTransition();

  const handleName = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    startTransition(async () => {
      const response = await handleNameChange(formData);

      if (response && response.error) {
        toast.error(response.error);
      } else {
        toast.success("Name updated successfully!");
      }
    });
  };

  return (
    <div className="border rounded-sm bg-zinc-950 border-zinc-700 p-4">
      <h2 className="font-bold">Change name</h2>
      <form onSubmit={handleName} className="flex items-center gap-2">
        <input
          defaultValue={user?.name as string}
          name="name"
          className="my-2 px-2 py-0.5 text-sm bg-zinc-900 border border-zinc-800 rounded-sm w-full max-w-80"
          type="text"
        />
        <button
          type="submit"
          disabled={isPending}
          className={cn(
            "flex items-center gap-2 pl-4 py-1 h-min text-xs bg-green-800 border border-green-600 rounded-sm",
            isPending ? "pr-2 bg-green-800/80" : "pr-4"
          )}
        >
          <span>Change</span>
          {isPending && <Loader color="white" width="16" />}
        </button>
      </form>
      <p className="text-xs text-zinc-400">
        Your name will be visible to other users on your profile it will appear
        next to your username around the site.
      </p>
    </div>
  );
};

export default ChangeNameForm;
