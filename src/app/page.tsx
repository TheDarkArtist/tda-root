import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { os } from "@/utils/fonts";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex flex-col space-y-6 justify-center items-center h-full">
      <div className="border border-dashed border-sky-900 mx-6 break-all max-w-full p-2 rounded-sm">
        {JSON.stringify(session)}
      </div>
      <h2
        className={cn(
          "font-black text-6xl text-red-900 text-center",
          os.className
        )}
      >
        TDA NEXT TEMPLATE
      </h2>
      {!session?.user ? (
        <LoginButton>Login</LoginButton>
      ) : (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button type="submit">Log Out</Button>
        </form>
      )}
    </main>
  );
}
