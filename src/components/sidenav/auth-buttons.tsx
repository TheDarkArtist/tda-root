"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const AuthButtons = () => {
  const { data } = useSession();
  const router = useRouter();

  return (
    <div>
      {data?.user ? (
        <div>
          <button
          className="flex gap-4 items-center px-2 mx-1.5 py-1"
            onClick={() => {
              signOut();
              router.refresh();
            }}
          >
            <FaSignOutAlt className="h-4 w-4" />
            LogOut
          </button>
        </div>
      ) : (
        <button
          className="bg-zinc-900 w-full rounded flex gap-4 items-center text-left py-1 px-2"
          onClick={() => signIn("credentials")}
        >
          Login/SignUp
        </button>
      )}
    </div>
  );
};

export default AuthButtons;
