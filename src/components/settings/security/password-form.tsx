"use client";

import Loader from "@/components/utils/loader";
import { cn } from "@/lib/utils";
import { FC, useTransition } from "react";
import { toast } from "sonner";

interface PasswordFormProps {
  handlePasswordChange: (formData: FormData) => Promise<{ error?: string }>;
}

const PasswordForm: FC<PasswordFormProps> = ({ handlePasswordChange }) => {
  const [isPending, startTransition] = useTransition();

  const handlePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    startTransition(async () => {
      const response = await handlePasswordChange(formData);

      if (response && response.error) {
        toast.error(response.error);
      } else {
        toast.success("Password updated successfully!");
      }
    });
  };

  return (
    <div className="border rounded-sm bg-zinc-950 border-zinc-700 p-4">
      <h2 className="font-bold">Change Password</h2>
      <form onSubmit={handlePassword} className="flex items-center gap-2">
        <input
          type="password"
          placeholder="********"
          name="password"
          className="my-2 px-2 py-0.5 text-sm bg-zinc-900 border border-zinc-800 rounded-sm w-full max-w-80"
        />
        <button
          type="submit"
          disabled={isPending}
          className={cn(
            "flex items-center gap-2 pl-4 py-1 h-min text-xs bg-green-800 border border-green-600 rounded-sm",
            isPending ? "pr-2 bg-green-800/80" : "pr-4"
          )}
        >
          <span>Save</span>
          {isPending && <Loader color="white" width="16" />}
        </button>
      </form>
      <p className="text-xs text-zinc-400">
        Your password must be at least 6 characters long.
      </p>
    </div>
  );
};

export default PasswordForm;
