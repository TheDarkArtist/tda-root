"use client";

import Loader from "@/components/utils/loader";
import { User } from "@prisma/client";
import { FC, useTransition } from "react";
import { toast } from "sonner";

interface TwoFAFormProps {
  user: User;
  handleTwoFAChange: (formData: FormData) => Promise<{ error?: string }>;
}

const TwoFAForm: FC<TwoFAFormProps> = ({ user, handleTwoFAChange }) => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const response = await handleTwoFAChange(formData);

      if (response.error) {
        toast.error(response.error);
      } else {
        toast.success("Two-factor authentication updated successfully.");
      }
    });
  };

  return (
    <div className="w-full border border-zinc-700 rounded-sm p-4 bg-zinc-950">
      <h2 className="text-sm sm:text-2xl font-semibold">
        Two Factor Authentication
      </h2>
      <form onSubmit={handleSubmit} className="flex gap-4 my-4">
        <select
          name="isTwoFactorEnabled"
          defaultValue={user?.isTwoFactorEnabled ? "On" : "Off"}
          className="px-2 py-0.5 text-sm bg-zinc-900 border border-zinc-800 rounded-sm w-80"
        >
          <option value="On">On</option>
          <option value="Off">Off</option>
        </select>
        <button
          type="submit"
          disabled={isPending}
          className={`flex justify-between gap-2 bg-green-700 pl-4 py-0.5 rounded-sm text-white text-sm ${
            isPending ? "pr-2 opacity-50 cursor-not-allowed" : "pr-4"
          }`}
        >
          <span>Save</span>
          {isPending && <Loader color="white" width="16" />}
        </button>
      </form>
      <p className="text-xs text-zinc-400">
        Two-factor authentication adds an extra layer of security to your
        account by requiring you to log in with a combination of a password and
        a security code. This is especially useful for those who use two-factor
        authentication apps like Google Authenticator or Authy.
      </p>
    </div>
  );
};

export default TwoFAForm;
