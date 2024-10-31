import { currentUser } from "@/lib/actions/utils/auth";
import Image from "next/image";

const Header = async () => {
  const user = await currentUser();
  return (
    <div className="border-b dark:border-zinc-800 border-zinc-200 pb-4 flex flex-col w-full">
      <div className="h-10 w-full"></div>
      {user?.username ? (
        <div className="flex items-center">
          <Image
            src={user?.image || "/img/tda.png"}
            className="rounded mx-2"
            alt="user image"
            height={64}
            width={64}
          />
          <div>
            <div className="text-lg font-bold">{user?.name}</div>
            <div className="text-sm">{user?.username}</div>
          </div>
        </div>
      ) : (
        <div className="text-sm p-4">Login or Sign Up to continue.</div>
      )}
    </div>
  );
};

export default Header;
