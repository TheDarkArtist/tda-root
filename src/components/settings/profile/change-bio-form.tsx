"use client";

import Loader from "@/components/utils/loader";
import Note from "@/components/utils/note";
import { cn } from "@/lib/utils";
import { User } from "@prisma/client";
import { FC, useTransition } from "react";
import { toast } from "sonner";

interface ChangeBioFormProps {
  user: User;
  handleBioChange: (formData: FormData) => Promise<{ error?: string }>;
}

const ChangeBioForm: FC<ChangeBioFormProps> = ({ user, handleBioChange }) => {
  const [isPending, startTransition] = useTransition();

  const handleBio = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    startTransition(async () => {
      const response = await handleBioChange(formData);

      if (response && response.error) {
        toast.error(response.error);
      } else {
        toast.success("Bio updated successfully!");
      }
    });
  };

  return (
    <div className="border rounded-sm bg-zinc-950 border-zinc-700 p-4">
      <h2 className="font-bold">Change bio</h2>
      <form onSubmit={handleBio} className="flex items-end my-2 gap-2">
        <textarea
          defaultValue={user?.bio as string}
          name="bio"
          className="px-2 py-0.5 text-sm bg-zinc-900 border border-zinc-800 rounded-sm w-full"
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
        Bio is a short description of yourself that will be displayed on your
        profile.
      </p>
      <Note
        title="INFO"
        description="This bio is in plain text for now, i'll implement markdown support later"
      />
    </div>
  );
};

export default ChangeBioForm;
